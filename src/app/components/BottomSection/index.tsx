import { Icon } from "@/assets/images";
import { useWebSocket } from "@/app/context/webSocket";
import { randomPercentage, randomPriceFromInterval } from "@/utils/priceManipulation";
import { color } from "@/utils/theme";
import { Box, Button, ButtonText, Image } from "@gluestack-ui/themed";
import moment from "moment";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

const BottomSection = () => {
  const socket = useWebSocket();
  const insets = useSafeAreaInsets();

  const handleOnBuy = () => {
    const data = {
      price: randomPriceFromInterval(42000, 43000),
      amount: randomPriceFromInterval(1, 10, 5),
      action: "buy",
      time: moment().format("HH:mm:ss"),
      percentage: randomPercentage(0, 5)
    };
    socket.emit("trading", data);
  };

  const handleOnSale = () => {
    socket.emit("trading", {
      price: randomPriceFromInterval(40000, 42000),
      amount: randomPriceFromInterval(1, 10, 5),
      action: "sell",
      time: moment().format("HH:mm:ss"),
      percentage: randomPercentage(-3,0)
    });
  };

  return (
    <Box
      paddingBottom={16 + insets.bottom}
      paddingTop={16}
      paddingHorizontal={16}
      flexDirection="row"
      borderColor={color.grey}
      borderWidth={2}
    >
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        flex={1}
        marginRight={15}
        backgroundColor={color.green}
        onPress={handleOnBuy}
      >
        <Image alt="icon" source={Icon.buy} style={styles.image} />
        <ButtonText marginLeft={4}>Buy</ButtonText>
      </Button>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        flex={1}
        marginLeft={15}
        backgroundColor={color.red}
        onPress={handleOnSale}
      >
        <Image
          alt="icon"
          source={Icon.sell}
          style={styles.image}
          tintColor={color.surface}
        />
        <ButtonText marginLeft={4}>Sell</ButtonText>
      </Button>
    </Box>
  );
};

export default BottomSection;
