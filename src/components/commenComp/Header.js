import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{ uri: "https://pngimg.com/uploads/amazon/amazon_PNG24.png" }}
          style={{ resizeMode: "contain", width: 100, height: 40 }}
        />
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Text style={styles.cartText}>11+</Text>
          <Image
            source={require("../../../assets/shopping-cart.png")}
            style={{ resizeMode: "contain", width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 5 }}>
          <Image
            source={require("../../../assets/account.png")}
            style={{ resizeMode: "contain", width: 35, height: 35 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    zIndex: 100, 
    backgroundColor: "#fff",
    
  },
  cartText: {
    backgroundColor: "#fc0335",
    fontWeight: "bold",
    borderRadius: 50,
    position: "absolute",
    padding: 3,
    fontSize: 12.5,
    left: 12,
    top: -5,
    zIndex: 100,
    color: "white"
  },
});
