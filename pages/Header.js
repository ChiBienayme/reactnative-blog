import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { useNavigate } from "react-router-native";

export default function Header() {
	const navigate = useNavigate();

	return (
        
            <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={() => navigate("/")}>
                    <Text style={styles.headerText}> Home </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.header} onPress={() => navigate("/timeline")}>
                    <Text style={styles.headerText}> Timeline </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.header} onPress={() => navigate("/profile")}>
                    <Text style={styles.headerText}> Profile </Text>
                </TouchableOpacity>
            </View>
         

	);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 5,
      marginTop: 5,
      padding: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor:"powderblue",
      borderRadius: 5,
    },
    
    header: {
      borderWidth: 1,
      borderColor: "lightgrey",
      backgroundColor: "coral",
      borderRadius: 5,
      width: 70,
      margin: 5,
    }, 

    headerText: {
      color: "white",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
    }
  
  });
  