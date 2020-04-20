import React from "react";
import Typeface from "typeface-roboto";
import {
  Text,
  View,
  ScrollView,
  Icon,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Button,
  TouchableNativeFeedback,
  TouchableHighlight,
  AsyncStorage,
  processColor,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from "react-native";
//import styles from "../resources/styles/homeStyles.scss";
import navigation from "@react-navigation/native";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FinFamily</Text>
        <View style={styles.buttons}>
          <Button
            style={styles.button1}
            onPress={() => navigation.navigate("Cadastro")}
            title="Create Account"
          />
          <Button
            style={styles.button2}
            onPress={() => navigation.navigate("Login")}
            title="Login"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "linear-Gradient(hsl(127,72,65))",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  title: {
    fontSize: "50px",
    position: "absolute",
    top: "20%",
    width: "100%",
  },
  buttons: {
    width: "90%",
    alignContent: "space-around",
    position: "relative",
    top: "40%",
    justifyContent: "space-between",
    fontSize: "20px",
    fontWeight: "900",
    boxSizing: "border-Box",
    borderSize: "1px",
    borderStyle: "solid",
    borderColor: "#3ED4AF",
    borderRadius: "20px",
    margin: "20px",
  },
  button1: {
    backgroundColor: "#65E674",
  },
  button2: {
    backgroundColor: "#3ED4AF",
  },
});

export default Home;
