import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
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
        searchApi('mexican')
    },[])

    return [searchApi, results, errorMsg]
}