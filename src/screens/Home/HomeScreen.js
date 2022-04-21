import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import Header from "../../components/commenComp/Header";
import HomeSearch from "../../components/HomeComp/HomeSearch";
import HomeProduct from "../../components/HomeComp/HomeProduct";
import Constants from "expo-constants";

const HomeScreen = () => {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight, backgroundColor: "white" }}>
      <Header />
      <ScrollView>
        <HomeSearch />
        <HomeProduct />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
