import { View, Text, Image, StyleSheet } from "react-native"
const ResultDetails = ({ result }) => {
    return (
        <View style={styles.items}>
            <Text >{result.name}</Text>
            <Image style={styles.image} source={{uri:result.image_url}} />
            <Text>{result.rating} Starts {result.review_count} Reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width:250,
        height:120,
        borderRadius:3,
        marginBottom:5,
    },
    items:{
        marginLeft:15,
        marginBottom:5,
    }
})
export default ResultDetails