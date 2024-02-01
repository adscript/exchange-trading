import React from "react";
import { CandlestickChart } from "react-native-wagmi-charts";
import { Box } from "@gluestack-ui/themed";
import { useCandleChartHooks } from "./hooks";
import CandleDetail from "../CandleDetail";
import CoinHeader from "../CoinHeader";

const CandleChart = () => {

  const { state, method } = useCandleChartHooks();

  const { candleData, currentPrice, currentPercentage, isHovering } = state;

  const { onChangeCrosshair } = method;

  return (
    <CandlestickChart.Provider data={candleData}>
      <Box flex={1} flexDirection="row">
        {isHovering ? (
          <CandleDetail />
        ) : (
          <CoinHeader
            currentPercentage={currentPercentage}
            currentPrice={currentPrice}
          />
        )}
      </Box>
      <CandlestickChart>
        <CandlestickChart.Candles />
        <CandlestickChart.Crosshair onCurrentXChange={onChangeCrosshair}>
          <CandlestickChart.Tooltip />
        </CandlestickChart.Crosshair>
      </CandlestickChart>
    </CandlestickChart.Provider>
  );
};

export default CandleChart;
