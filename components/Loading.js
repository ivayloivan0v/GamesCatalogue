import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#009dff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: "center",
  },
});
