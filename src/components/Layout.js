import React from "react";
import { View } from "react-native";

const Layout = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        minHeight: "100vh",
        backgroundColor: "#0a192f",
      }}
    >
      {/* We will add the SideNav in a later step */}
      <View style={{ flex: 1, padding: 20 }}>{children}</View>
    </View>
  );
};

export default Layout;
