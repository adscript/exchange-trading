import { Fonts, color } from "@/utils/theme";
import { Box, Text } from "@gluestack-ui/themed";
import React from "react";
import { formatNominal } from "@/utils/formatting";
import { useTradingHistoryHooks } from "./hooks";

const TradingHistory = () => {
  const {history} = useTradingHistoryHooks()

  return (
    <Box marginTop={10} paddingHorizontal={16}>
      <Text fontFamily={Fonts.bold} fontSize={"$md"} marginBottom={8}>
        Trading History
      </Text>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          color={color.darkBlue}
          fontFamily={Fonts.regular}
          fontSize={"$xs"}
          flex={1}
          textAlign="left"
        >
          Price
        </Text>
        <Text
          color={color.darkBlue}
          fontFamily={Fonts.regular}
          fontSize={"$xs"}
          flex={1}
          textAlign="center"
        >
          Amount
        </Text>
        <Text
          color={color.darkBlue}
          fontFamily={Fonts.regular}
          fontSize={"$xs"}
          flex={1}
          textAlign="right"
        >
          Time
        </Text>
      </Box>
      <Box>
        {
          history?.map((item, idx) => {
            return (
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                key={idx}
              >
                <Text
                  fontFamily={Fonts.regular}
                  fontSize={"$xs"}
                  color={item.action === "buy" ? color.green : color.red}
                  flex={1}
                  textAlign="left"
                >
                  {formatNominal(item.price.toFixed(2))}
                </Text>
                <Text
                  fontFamily={Fonts.regular}
                  fontSize={"$xs"}
                  color={color.darkBlue}
                  flex={1}
                  textAlign="center"
                >
                  {item.amount}
                </Text>
                <Text
                  fontFamily={Fonts.regular}
                  fontSize={"$xs"}
                  flex={1}
                  textAlign="right"
                >
                  {item.time}
                </Text>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default TradingHistory;
