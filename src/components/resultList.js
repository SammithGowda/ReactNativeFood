import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ResultDetails from "./resultDetails"
import { withNavigation } from "react-navigation"
const ResultList = ({ title, result, navigation }) => {
    if(!result.length){
        return null
    }
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={result}
                keyExtractor={key => key.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate("ResultShowe",{id:item.id})}>
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    ) //each item component
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15
    }
})
export default withNavigation(ResultList)