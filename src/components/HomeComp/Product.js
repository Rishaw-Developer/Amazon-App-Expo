import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

const Product = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Product", { id: props.id })}
    >
      <Image source={{ uri: `${props?.image}` }} style={styles.productImage} />
      <Text style={{ marginTop: 10 }}>{props?.title}</Text>
      <Text
        style={{ color: "green", fontWeight: "bold", marginVertical: 5 }}
      >{`$${props?.price}`}</Text>
      <TouchableOpacity style={styles.addToCart}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
    marginVertical: 5,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  productImage: {
    width: "100%",
    height: 175,
    borderRadius: 5,
    resizeMode: "contain",
  },
  addToCart: {
    backgroundColor: "#f78f18",
    borderRadius: 50,
    alignItems: "center",
    padding: 10,
  },
  addToCartText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
  },
});
