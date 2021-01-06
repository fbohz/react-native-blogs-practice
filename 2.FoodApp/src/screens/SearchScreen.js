import React, {useState} from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar'
// import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMsg] = useResults()

    // console.log(results)

    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
          return result.price === price;
        });
      };
    

    return (
        <>
            <SearchBar term={term}  
                onTermChange={newTerm  => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
                <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
 
})

export default SearchScreen