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
import Footer from "./Footer"

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


      {/* FOOTER */}
      <View>
        <Footer />
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
    marginTop: 200,
    marginLeft: 30,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
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
 

});
