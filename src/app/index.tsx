import React, { useEffect, useRef, useState } from "react";
import {
  GluestackUIProvider, Box
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import {
  ReadexPro_200ExtraLight,
  ReadexPro_300Light,
  ReadexPro_400Regular,
  ReadexPro_500Medium,
  ReadexPro_600SemiBold,
  ReadexPro_700Bold,
} from "@expo-google-fonts/readex-pro";
import WebSocketProvider from "@/app/context/webSocket";
import TradingPages from "./pages/TradingPages";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all 

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    ReadexPro_200ExtraLight,
    ReadexPro_300Light,
    ReadexPro_400Regular,
    ReadexPro_500Medium,
    ReadexPro_600SemiBold,
    ReadexPro_700Bold,
  });
  const animation = useRef(null);

  useEffect(() => {
    const splashLoading = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(splashLoading);
  });

  if (isLoading || !fontsLoaded) {
    return (
      <Box
        flex={1}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "white",
          }}
          resizeMode="contain"
          source={require("../assets/animations/loading.json")}
        />
      </Box>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <WebSocketProvider>
          <TradingPages />
        </WebSocketProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
