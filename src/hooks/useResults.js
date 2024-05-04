import { useEffect, useState } from "react"
import yelp from "../api/yelp"

export default () => {
    const [result, setResult] = useState([])
    const [errorMsg, setErrorMsg] = useState("")

    const makeApiCall = async (itemVlue) => {
        try {
            const resp = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: itemVlue,
                    location: "san jose"
                }
            })
            setResult(resp.data.businesses)
        } catch (error) {
            console.log(error)
            setErrorMsg("Somwthing went wrong")
        }
    }

    useEffect(() => {
        makeApiCall("pasta")
    }, [])
    return [makeApiCall, result, errorMsg]
}