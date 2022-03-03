import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "react-router-native";

export default function Timeline() {
	const navigate = useNavigate();

	return (
        
            <View style={styles.container}>
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
         

	);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 5,
      marginTop: 200,
      padding: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor:"powderblue",
      borderRadius: 5,
    },
    
    footer: {
      borderWidth: 1,
      borderColor: "lightgrey",
      backgroundColor: "coral",
      borderRadius: 5,
      width: 70,
      margin: 5,
    }, 

    footerText: {
      color: "white",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
    }
  
  });
  