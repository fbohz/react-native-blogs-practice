import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'washington dc'
                }
            })
        setErrorMsg("")    
        setResults(response.data.businesses)
        } catch (err) {
            setErrorMsg("Something went wrong")
            
        }
    }
    /*
    // This will cause an infinite loop: 
         searchApi('tacos')
    // Below useEffect solves this.
    */
    
    // empty array means it will only be rendered once
    useEffect(() => {
        searchApi('tacos')
    },[])

    return (
        <View>
            <SearchBar term={term}  
                onTermChange={newTerm  => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 
})

export default SearchScreen