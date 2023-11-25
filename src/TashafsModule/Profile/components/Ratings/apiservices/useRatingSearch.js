import { useState,useCallback } from 'react';

import axios from 'axios';
import useRatings from "../../../../hooks/useRatings";
import _ from 'lodash';
const useRatingSearch = (isLive, productionUrl, userCode, type, endPoint,fetchNextSearch) => {
    const [data, setData] = useState([]);
    const [loader, setLoading] = useState({ ethical: false, Meet: false })
    const [searchHasMore,setSearchHasMore]=useState(false)
    // const { page,  fetchNextSearch } = useRatings(
    //     isLive, productionUrl, userCode, endPoint,type);

    const [isSearch, setIsSearch] = useState(false)
    const searchApi = (type, text) => {
  
        let searchTextVal = text ?? "";
        if (searchTextVal !== "") {
            const start = 1; const offSet = 10
            let url = `${isLive ? productionUrl : ""}/${endPoint}?userCode=${userCode}&start=${start}&offset=${offSet}&searchKey=${searchTextVal}`
            axios.post(url).then((response) => {
                setSearchHasMore(response.data.result<10?false:true)
                if (response.data.result) {
                   
                    setData(response.data.result)
                    setIsSearch(true)
                    setLoading({ ethical: false, Meet: false })
                }
            }).catch((error) =>{
                // console.log(error)
                });
        } else {
            setIsSearch(false)
            setSearchHasMore(false)
            fetchEmptySearch(1, searchTextVal)
        }

    }


    const fetchEmptySearch = (p,data) => {
        let text=data??""
        if (text === "") {
            setLoading({ ethical: false, Meet: false })
        fetchNextSearch(p);
        } else {
          searchApi(text?.toLowerCase())
        }
      };

    const closePopup=()=>{
        setIsSearch(false)
        setLoading({ ethical: false, Meet: false })
        setData([])
    }


    const deBoundeEthical =useCallback(_.debounce((text) => {
   
        searchApi('ethical', text.toLowerCase())
    }, 300),[])

    const deBoundeMeet =useCallback( _.debounce((text) => {
    
        searchApi('Meet', text.toLowerCase())
    }, 300),[])
    return { deBoundeEthical,deBoundeMeet, ethicalloader:loader.ethical,meetLoader:loader.Meet,data,ethicalSearchMore:searchHasMore,meetSearchMore:searchHasMore,
        isSearchEthical:isSearch,isSearchMeet:isSearch ,setLoading,closeEthicalPopup:closePopup,closeMeetpopUp:closePopup}
     
}

export default useRatingSearch
