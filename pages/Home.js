import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigate } from "react-router-native";

export default function Home() {
  const [ID, setID] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (ID.length > 0) {
      setID();
    } else {
      Alert.alert("Input an ID")
    } 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.home} > Home </Text>
        <TextInput
          style={styles.input}
          placeholder="ID"
          onChangeText={(ID) => setID(ID)}
        />

        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.submitText}> Submit </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.footer} onPress={() => navigate("/")}>
          <Text style={styles.footerText}> Home </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footer} onPress={() => navigate("/timeline")}>
          <Text style={styles.footerText}> Timeline </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footer} onPress={() => navigate("/profile")}>
          <Text style={styles.footerText}> Profile </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 40,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  home:{
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 200,
    marginLeft: 30,
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
    marginTop: 50,
  },
  submit: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "black",
    borderRadius: 5,
    width: 80,
    marginTop: 10,
    marginLeft: 60,
  },
  submitText: {
    color: "white",
    textAlign: "center",
    margin: 5,
  },
  footer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "black",
    borderRadius: 5,
    width: 80,
    marginTop: 10,
    marginLeft: 60,
  }, 
  footerText: {
    color: "white",
    textAlign: "center",
    margin: 5,
  }



});
