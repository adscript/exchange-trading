import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const uri = 'http://192.168.0.101:3000'

const WebSocketContext = createContext(null);

export const useWebSocket = () => {
  return useContext(WebSocketContext);
}

const WebSocket = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(uri);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    }; 
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>{children}</WebSocketContext.Provider>
  );
};

export default WebSocket;
