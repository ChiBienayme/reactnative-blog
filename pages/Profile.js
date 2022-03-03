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

            <View style={styles.footer}>
                <Footer />
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
    footer: {
        marginTop: 280,
    }
})

