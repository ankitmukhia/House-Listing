import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Components/Card";
import * as HouseAction from "../Redux/Action/HouseAction";

const HomeListScreen = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const houses = useSelector((state) => state.HouseReducer.houses);



  useEffect(() => {
    setIsLoading(true);
    dispatch(HouseAction.fetchHouses())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (houses.length === 0 && !isLoading) {
    return (
      <View style={styles.centered}>
        <Text style={styles.centeredText}>
          No house found. You could add one!
        </Text>
        <FloatingAction
          position="right"
          animated={false}
          showBackground={false}
          onPress={() => props.navigation.navigate("AddHome")}
          color="orange"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={houses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card
            navigation={props.navigation}
            title={item.title}
            address={item.address}
            description={item.description}
            price={item.price}
            image={item.image}
            yearBuilt={item.yearBuilt}
            id={item._id}
          />
        )}
      />
      <FloatingAction
        position="right"
        animated={false}
        showBackground={false}
        onPressMain={() => props.navigation.navigate("AddHome")}
        color="orange"
      />
    </View>
  );
};

export default HomeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 15,
  },
});
