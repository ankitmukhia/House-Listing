import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import AppNavigator from "./Navigation/AppNavigator";
import store from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
