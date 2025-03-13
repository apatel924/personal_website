import React from "react";
import { View, Text } from "react-native";

const SideNav = () => {
  return (
    <View
      style={{
        width: 200,
        paddingTop: 40,
        backgroundColor: "#112240",
        minHeight: "100vh",
      }}
    >
      <Text style={{ color: "#ccd6f6", marginBottom: 20, fontSize: 18 }}>
        About
      </Text>
      <Text style={{ color: "#ccd6f6", marginBottom: 20, fontSize: 18 }}>
        Experience
      </Text>
      <Text style={{ color: "#ccd6f6", marginBottom: 20, fontSize: 18 }}>
        Projects
      </Text>
    </View>
  );
};

export default SideNav;
