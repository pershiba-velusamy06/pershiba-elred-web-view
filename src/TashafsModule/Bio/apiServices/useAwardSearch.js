import { useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
const useAwardsSearch = (isLive, productionUrl, userCode,fetchAwards, page, setLoading, loading ) => {
    const [data, setData] = useState([]);
const [offSet,setOffset]=useState(10)
const [searchHasMore, setsearchHasMore] = useState(true);

    const [isSearch, setisSearch] = useState(false)
    const searchApi = (text) => {

        let searchTextVal = text ?? "";
        if (searchTextVal !== "") {
            const start = 1;
            let url = `${isLive ? productionUrl : ""}/noSessionPreviewAwards?userCode=${userCode}&start=${start}&offset=&searchKey=${searchTextVal}`
            axios.post(url).then((response) => {
                if (response.data.result) {
                    setsearchHasMore(response.data.result.length<10?false:true)
                    setData(response.data.result)
                    setisSearch(true)
                    setLoading(false)
                   // setOffset(offSet+10)
                }
            })
        } else {
            setisSearch(false)
            setData([])
            fetchEmptySearch(1, searchTextVal)
        }

    }


    const fetchEmptySearch = (p, data) => {
        setLoading(true)
        let text = data ?? ""
        if (text === "") {
            debounceAllCall(p);
        } else {
            searchApi(text?.toLowerCase())
        }

    };

    const debounceAllCall = _.debounce((p) => {
        fetchAwards(p);
    }, 300)

    const deBoundeAwards = useCallback(_.debounce((text) => {
        searchApi(text.toLowerCase())
    }, 300), [])
    return { deBoundeAwards, loading, searchData: data, isSearch,offSet , searchHasMore}

}

export default useAwardsSearch
