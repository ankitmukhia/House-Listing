import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import React from "react";

const HomeDetailScreen = (props) => {
  const { houseId } = props.route.params;


  const house = useSelector((state) =>
    state.HouseReducer.houses.find((house) => house._id === houseId)
    
  );
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{house.title}</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: house.image,
            }}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Home Type: </Text>
          <Text style={styles.value}>{house.homeType}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Price: </Text>
          <Text style={styles.value}>${house.price}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.value}>{house.address}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.value}>{house.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
  },
  group: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
  },
});
