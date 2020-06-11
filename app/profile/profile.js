import React from "react";
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
} from "react-native";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: user,
      data: undefined,
    };
    this.logout = this.logout.bind(this);
  }

  // async logout() {
  //   console.log("logout");
  //   var result = await NetworkExecutor.get(services.LOGOUT);
  //   this.props.navigation.pop();
  // }

  // componentDidMount() {
  //   this.props.navigation.setParams({ logout: this.logout });
  //   this.loadProducts();
  // }

  render() {
    var user = this.state.user;
    var foto = "data:image/gif;base64," + user.fotoUser;
    return (
        null
    );
  }
}

export default Profile;
