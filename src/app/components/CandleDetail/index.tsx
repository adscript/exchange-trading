import { Fonts } from "@/utils/theme";
import { Box, Text } from "@gluestack-ui/themed";
import React from "react";
import {
  CandlestickChartPriceText,
  TPriceType,
} from "react-native-wagmi-charts";

const priceType = ["open", "high", "close", "low"];

const CandleDetail = () => {
  return (
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding={16}
      paddingTop={7}
    >
      <Box flex={1} flexShrink={1} flexDirection="row" flexWrap="wrap">
        {priceType.map((label: TPriceType, index) => {
          return (
            <Box
              width={"49%"}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              marginRight={3}
              key={index}
            >
              <Text
                fontFamily={Fonts.regular}
                fontSize={"$md"}
                textTransform="capitalize"
              >
                {label}
              </Text>
              <CandlestickChartPriceText
                type={label}
                style={{ fontFamily: Fonts.medium, fontSize: 14 }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CandleDetail;
