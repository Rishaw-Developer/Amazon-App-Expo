import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import Header from "../../components/commenComp/Header";
import { StatusBar } from "expo-status-bar";
import HomeSearch from "../../components/HomeComp/HomeSearch";
import { useRoute } from "@react-navigation/native";

const ProductScreen = () => {
  const route = useRoute();
  const [productData, setProductData] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${route.params.id}`)
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []);
  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView>
        <ScrollView style={{ padding: 20 }}>
          <Image
            source={{ uri: productData?.image }}
            style={{
              resizeMode: "contain",
              height: 300,
              width: "100%",
              marginBottom: 20,
            }}
          />
          <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "700" }}>
            {productData?.title}
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 17,
              fontWeight: "600",
              marginBottom: 10,
            }}
          >
            ${productData?.price}
          </Text>
          <Text>
            {Array(4)
              .fill()
              .map(() => "⭐")}
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15 }}>Description</Text>
            <Text>{productData?.description}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#f78f18",
                borderRadius: 50,
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={styles.addToCartText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
