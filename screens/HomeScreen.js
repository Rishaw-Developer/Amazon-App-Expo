import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform
} from "react-native";
import Header from "../components/Header";
import HomeSearch from "../components/HomeSearch";
import HomeProduct from "../components/HomeProduct";
import Constants from "expo-constants";

const HomeScreen = () => {
  return (
    <View style={{paddingTop: Constants.statusBarHeight}}>
      <Header />
      <ScrollView>
        <HomeSearch />
        <HomeProduct />
      </ScrollView>
      {/* <StatusBar hidden={true} /> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;