import React from "react";
import { View, Text } from "react-native";

const App = () => {
  console.log("App is rendering"); // <--- Debug log
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <Text style={{ color: "white", fontSize: 24 }}>Hello from App</Text>
    </View>
  );
};

export default App;
