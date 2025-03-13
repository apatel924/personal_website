import React from "react";
import { View } from "react-native";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        minHeight: "100vh",
        backgroundColor: "#0a192f",
      }}
    >
      <SideNav />
      <View style={{ flex: 1, padding: 20 }}>{children}</View>
    </View>
  );
};

export default Layout;
