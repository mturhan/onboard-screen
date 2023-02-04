import { View, Text, SafeAreaView, Button, Alert } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const clear = async () => {
    try {
      await AsyncStorage.clear();
      await AsyncStorage.getItem("alreadyLaunched");
    } catch (error) {}
  };
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button onPress={clear} title="Temizle" />
    </SafeAreaView>
  );
};

export default Home;
