import { Fonts, color } from "@/utils/theme";
import { Box, Text } from "@gluestack-ui/themed";
import React from "react";

interface CandleSizeTextProps {
  label: string;
  isActive?: boolean;
}

const CandleSizeText = ({ isActive, label }: CandleSizeTextProps) => {
  return (
    <Box
      flex={1}
      paddingHorizontal={7.75}
      paddingVertical={6}
      backgroundColor={isActive ? color.surface : undefined}
      borderRadius={7}
    >
      <Text textAlign="center" fontFamily={Fonts.regular} fontSize={"$sm"}>
        {label}
      </Text>
    </Box>
  );
};

const size = [
  {
    label: "1Hour",
    isActive: true,
  },
  {
    label: "1Day",
    isActive: false,
  },
  {
    label: "1Month",
    isActive: false,
  },
  {
    label: "1Year",
    isActive: false,
  },
];

const CandleSizeTab = () => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      padding={2}
      backgroundColor={color.grey}
      borderRadius={9}
      margin={16}
    >
      {size.map((item) => (
        <CandleSizeText
          label={item.label}
          isActive={item.isActive}
          key={item.label}
        />
      ))}
    </Box>
  );
};

export default CandleSizeTab;
