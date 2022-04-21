import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from "react-native";

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        underlineColorAndroid="transparent"
      />
      <Pressable style={styles.button}>
        <Image
          source={require("../../../assets/search.png")}
          style={{ width: 20, height: 20, resizeMode: "contain" }}
        />
      </Pressable>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#f08616",
    height: 40,
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
