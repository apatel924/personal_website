import React from "react";
import { View, Text } from "react-native";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <View>
        <Text style={{ color: "#64ffda", fontSize: 24 }}>
          Welcome to my personal website!
        </Text>
      </View>
    </Layout>
  );
};

export default App;
