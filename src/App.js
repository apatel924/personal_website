import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to Ashish Patel's Personal Website</Text>
    {/* Future components will be integrated here */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
