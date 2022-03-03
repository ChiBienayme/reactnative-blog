import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, } from "react-native";
import { useNavigate } from "react-router-native";
import Header from "./Header"

export default function Timeline() {
	const navigate = useNavigate();
    const [JSON_DATA, setJSON_DATA] = useState('');
    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(() => {
        async function fetchData() {
          fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((response) => response.json())
            .then((responseJson) => {
              setJSON_DATA(responseJson);
              setShowIndicator(false);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        fetchData();
     
      }, []);

    const ItemRender = ({ title }) => (
        <View style={styles.listItem}>
            <Text style={styles.itemText}> {title} </Text>
        </View>
    );

    const header = () => {
        return (
            <View style={{
                height: 50,
                width: "100%",
                backgroundColor: "powderblue",
                justifyContent: 'center',
                alignItems: 'center',
            }}>
        
            <Text style={{ fontSize: 24, color: 'black' }}> New Post </Text>
        
            </View>
        );
    }

    const divider = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: 'black',
              margin: 10,
            }}
          />
        );
      }

	return (
		<View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>

            <View>
                <Text style={styles.timeline}>
                    Timeline
                </Text>
            </View>

            <View>               
                <ActivityIndicator
                    size="large"
                    color="red"
                    animating={showIndicator}
                    style={styles.activityIndicator} />
            
                <FlatList
                    data={JSON_DATA}
                    renderItem={({ item }) => <ItemRender title={item.title} />}
                    ItemSeparatorComponent={divider}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={header}
                />
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
    timeline: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
    },
})