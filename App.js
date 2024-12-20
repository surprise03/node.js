import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Use a safer evaluation for production
    } catch {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.display}>{input || "0"}</Text>
        <Text style={styles.result}>{result}</Text>
        <View style={styles.buttons}>
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
            <Button key={num} mode="contained" onPress={() => handlePress(num)} style={styles.button}>
              {num}
            </Button>
          ))}
          {["+", "-", "*", "/"].map((op) => (
            <Button key={op} mode="contained" onPress={() => handlePress(op)} style={styles.button}>
              {op}
            </Button>
          ))}
          <Button mode="contained" onPress={calculate} style={styles.button}>
            =
          </Button>
          <Button mode="contained" onPress={clear} style={styles.button}>
            C
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  display: { fontSize: 40, textAlign: "right", marginBottom: 10 },
  result: { fontSize: 30, textAlign: "right", marginBottom: 20 },
  buttons: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  button: { margin: 5, width: "22%" },
});
