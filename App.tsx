import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useLogging } from "./src/hooks/useLogging";

export default function App() {
  const [logging] = useLogging("Application");

  useEffect(() => {
    logging.info("Loading application."); // this will be in the console
  }, [logging]);

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button
        onPress={() => {
          alert("You tapped the button!");
        }}
        title="Press Me"
      />

      <Button
        onPress={() => {
          alert("AAAAA!");
        }}
        title="Don't press me"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
