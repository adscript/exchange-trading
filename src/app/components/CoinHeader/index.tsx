import React, { useRef } from "react";
import { Box, Text } from "@gluestack-ui/themed";
import LottieView from "lottie-react-native";
import { Fonts, color } from "@/utils/theme";
import { formatNominal } from "@/utils/formatting";

const CoinHeader = ({ currentPercentage, currentPrice }) => {
  const animation = useRef(null);
  return (
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={14}
      paddingRight={30}
    >
      <Box flexDirection="row" alignItems="center">
        <LottieView
          autoPlay
          loop
          ref={animation}
          style={{
            width: 60,
            height: 60,
          }}
          resizeMode="contain"
          source={require("../../../assets/animations/bitcoin.json")}
        />
        <Box flexDirection="column">
          <Text fontFamily={Fonts.regular} fontSize={"$md"}>
            Bitcoin
          </Text>
          <Text
            fontFamily={Fonts.regular}
            color={color.darkGrey}
            fontSize={"$sm"}
          >
            BTC
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontFamily={Fonts.regular} fontSize={"$md"} textAlign="right">
          {formatNominal(currentPrice?.toFixed(2), "$")}
        </Text>
        <Text
          fontFamily={Fonts.regular}
          color={currentPercentage?.includes("-") ? color.red : color.green}
          fontSize={"$sm"}
          textAlign="right"
        >
          {currentPercentage + "%"}
        </Text>
      </Box>
    </Box>
  );
};

export default CoinHeader;
