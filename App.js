import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Calculator from "./components/Calculator";

export default function App() {

  return (
    <SafeAreaView>
      <Calculator />
    </SafeAreaView>
  );
}
