import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "react-router-native";

export default function Timeline() {
	const navigate = useNavigate();

	return (
        <View>
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
        </View>  

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
    
    footer: {
      borderWidth: 1,
      borderColor: "lightgrey",
      backgroundColor: "coral",
      borderRadius: 5,
      width: 80,
      marginTop: 40,
      margin: 5,
      flexDirection: "row",
      flexWrap: "wrap",
    }, 
    footerText: {
      color: "white",
      textAlign: "center",
      margin: 5,
    }
  
  });
  