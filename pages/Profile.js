import { View, Text, StyleSheet,} from "react-native";
import { useNavigate } from "react-router-native";
import Header from "./Header"

export default function Profile() {
	const navigate = useNavigate();

	return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
            </View>

            <View>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 40,
                        fontWeight: "bold",
                    }}
                >
                    Profile
                </Text>

            </View>   
            
        </View>

	);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 30,
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
    },
})

