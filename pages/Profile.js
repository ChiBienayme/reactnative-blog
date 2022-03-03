import { View, Text, StyleSheet,} from "react-native";
import { useNavigate } from "react-router-native";
import Footer from "./Footer"

export default function Profile() {
	const navigate = useNavigate();

	return (
        <View style={styles.container}>
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

            <View>
                <Footer />
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
})

