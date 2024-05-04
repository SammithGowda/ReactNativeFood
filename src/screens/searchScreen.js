import { View, Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from "../components/searchBar"
import { useState } from "react"
import useResults from "../hooks/useResults"
import ResultList from "../components/resultList"
const SearchScreen = () => {
    const [searchedItem, setSearchedItem] = useState("")
    const [makeApiCall, result, errorMsg] = useResults();//api data 

    const filterProductByPrice = (price) => { // filter each data with sorted price $,$$,$$$
        return result.filter((eachProduct) => {
            return eachProduct.price === price
        })
    }

    return (

        <>
            <SearchBar
                item={searchedItem}
                setValue={setSearchedItem}
                sumbitValue={() => makeApiCall(searchedItem)} />
            <Text>{searchedItem}</Text>
            {errorMsg ? { errorMsg } : null}
            <ScrollView>
                <ResultList title="Cost Effective" result={filterProductByPrice("$")} />
                <ResultList title="Bit Pricer" result={filterProductByPrice("$$")} />
                <ResultList title="Big Spender!" result={filterProductByPrice("$$$")} />
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({})
export default SearchScreen