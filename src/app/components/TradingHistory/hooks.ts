import { uri, useWebSocket } from "@/app/context/webSocket";
import { useEffect, useState } from "react";

export const useTradingHistoryHooks = () => {
  const socket = useWebSocket();
  const [history, setHistory] = useState(null);

  useEffect(function socketListener() {
    if (socket) {
      socket?.on("update", (item) => {
        setHistory(item);
      });
    }
  }, [socket]);

  useEffect(function historyFetcher() {
    const fetchData = async () => {
      try {
        const response = await fetch(uri + "/trading-history");
        const result = await response.json();

        setHistory(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return {
    history
  }
};
