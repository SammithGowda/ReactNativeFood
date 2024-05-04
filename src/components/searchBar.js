import { View, Text, StyleSheet, TextInput } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useEffect } from "react";
const SearchBar = ({ item, setValue, sumbitValue }) => {
   
    return (

        <View style={styles.backGround}>
            <Feather name="search" style={styles.iConStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={item}
                onChangeText={(value) => setValue(value)}
                onSubmitEditing={() => sumbitValue()}
                style={styles.Input}
                placeholder="Search"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    backGround: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
        marginBottom:5
    },
    Input: {
        flex: 1,
        fontSize: 18

    },
    iConStyle: {
        fontSize: 30,
        alignSelf: "center",
        marginHorizontal: 15
    }
})
export default SearchBar