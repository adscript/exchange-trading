import { Box, ScrollView, StatusBar } from "@gluestack-ui/themed";
import React from "react";
import Navbar from "../components/Navbar";
import CandleSizeTab from "../components/CandleSizeTab";
import CandleChart from "../components/CandleChart";
import TradingHistory from "../components/TradingHistory";
import BottomSection from "../components/BottomSection";
import { color } from "@/utils/theme";

const TradingPages = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navbar />
      <ScrollView
        h="$full"
        backgroundColor={color.softGrey}
        showsVerticalScrollIndicator={false}
      >
        <CandleSizeTab />
        <CandleChart />
        <TradingHistory />
        <Box height={100} />
      </ScrollView>
      <BottomSection />
    </>
  );
};

export default TradingPages;
