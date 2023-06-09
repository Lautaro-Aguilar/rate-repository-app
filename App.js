import { Alert, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => Alert.alert('Hola!')}>
      <Text>Holaaa!</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
