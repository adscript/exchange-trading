import { Icon } from "@/assets/images";
import { Fonts, color } from "@/utils/theme";
import { Text } from "@gluestack-ui/themed";
import { Box, Image } from "@gluestack-ui/themed";
import React from "react";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Navbar = () => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={color.softGrey}
      paddingHorizontal={16}
      paddingTop={10 + insets.top}
      paddingBottom={10}
    >
      <Image alt="back" source={Icon.back} style={styles.image} />
      <Text
        fontFamily={Fonts.bold}
        fontSize={"$lg"}
        flex={1}
        lineHeight={40}
        textAlign="center"
        color={color.darkBlue}
      >
        Trading
      </Text>
      <Image alt="order" source={Icon.order} style={styles.image} />
    </Box>
  );
};

export default Navbar;
