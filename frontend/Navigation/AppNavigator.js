import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AboutScreen from "../Screens/AboutScreen";
import AddHomeScreen from "../Screens/AddHomeScreen";
import HomeDetailScreen from "../Screens/HomeDetailScreen";
import HomeListScreen from "../Screens/HomeListScreen";

import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeList"
        component={HomeListScreen}
        option={{ title: "HomeHunt" }}
      />
      <Stack.Screen name="HomeDetails" component={HomeDetailScreen} />
      <Stack.Screen name="AddHome" component={AddHomeScreen} />
    </Stack.Navigator>
  );
};

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="about" component={AboutScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "About") {
            iconName = "info";
          }

          return <MaterialIcons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        option={{ title: "HomeHunt" }}
      />
      <Tab.Screen name="About" component={AboutStackNavigator} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
