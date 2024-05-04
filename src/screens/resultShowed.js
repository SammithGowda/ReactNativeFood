import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import yelp from "../api/yelp"
import { useEffect, useState } from "react"
const ResultShowed = ({ navigation }) => {
    const [photos, setPhotos] = useState(null)
    const id = navigation.getParam("id")
    const getSingleImageBasedOnId = async (id) => {
        const res = await yelp(`/${id}`)
        setPhotos(res.data)
    }

    useEffect(() => {
        getSingleImageBasedOnId(id)
    }, [])

    if (!photos) {
        return null
    }

    return (
        <View>
            <Text>{photos.name}</Text>
            <FlatList
                data={photos.photos}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 110,
        borderRadius: 5
    }
})
export default ResultShowed