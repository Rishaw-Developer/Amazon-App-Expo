import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Product from "./Product";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeProduct = () => {
  const navigation = useNavigation();

  const windowHeight = Dimensions.get("window").height;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <View>
          {data.map((item, index) => (
            <Product
              key={index+1}
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
              desc={item.description}
            />
          ))}
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: windowHeight / 1.5,
          }}
        >
          <Text style={{ fontSize: 25 }}>🙈 Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default HomeProduct;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 75
  }
});
