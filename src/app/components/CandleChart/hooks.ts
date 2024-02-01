import { uri, useWebSocket } from "@/app/context/webSocket";
import { dateStringToTimestamp } from "@/utils/date";
import { randomPriceFromInterval } from "@/utils/priceManipulation";
import { useEffect, useState } from "react";

export const useCandleChartHooks = () => {
  const socket = useWebSocket();
  const [candleData, setCandleData] = useState([]);
  const [currentPercentage, setCurrentPercentage] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(function initiateCandleData() {
    const fetchCandleData = async () => {
      try {
        const response = await fetch(uri);
        const result = await response.json();
        const lastClosingPrice = randomPriceFromInterval(40000, 43000);
        const modifiedCandleData = result.map((item, idx, arr) => {
          return {
            timestamp: dateStringToTimestamp(item.Date),
            open: Number(item.Open.replace(/[,]/g, "")),
            high: Number(item.High.replace(/[,]/g, "")),
            low: Number(item.Low.replace(/[,]/g, "")),
            close:
              idx + 1 < arr.length
                ? Number(arr[idx + 1].Open.replace(/[,]/g, ""))
                : lastClosingPrice,
            percentage: item["Change %"],
          };
        });

        const lastCandleData =
          modifiedCandleData[modifiedCandleData.length - 1];
        setCurrentPrice(lastCandleData.close);
        setCurrentPercentage(lastCandleData.percentage);
        setCandleData(modifiedCandleData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCandleData();
  }, []);

  useEffect(function socketListener(){
    if (socket) {
      socket?.on("updateLastPriceAndPercentage", (item) => {
        setCurrentPercentage(item.percentage);
        setCurrentPrice(Number(item.lastPrice));
        setCandleData((prev) => {
          const newLatestData = [...prev];
          let latestCandleData = newLatestData[newLatestData.length - 1];

          newLatestData[newLatestData.length - 1] = {
            ...latestCandleData,
            close: item.lastPrice,
            high:
              Number(item.lastPrice) > Number(latestCandleData.high)
                ? item.lastPrice
                : latestCandleData.high,
            low:
              Number(item.lastPrice) < Number(latestCandleData.low)
                ? item.lastPrice
                : latestCandleData.low,
          };

          return newLatestData;
        });
      });
    }
  }, [socket]);

  const onChangeCrosshair = (xValue) => {
    if (xValue !== -1) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  };

  return {
    state: {
      candleData,
      currentPrice,
      currentPercentage,
      isHovering,
    },
    method: {
      onChangeCrosshair,
    },
  };
};
