import React,{useState} from "react";
import "./viewallawards.scss";
import back from "../../../../assets/images/backpage.svg";
import bluetick from "../../../../assets/images/bluetick.svg";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchAwardsPagination from "../../apiServices/useFetchAwardsPagination";
import ViewAllDataContainer from "./ViewAllDataContainer/ViewAllDataContainer";
import {AwardsHeader} from './AwardsHeader/AwardsHeader'
import useAwardsSearch from '../../apiServices/useAwardSearch'
import * as deviceinfo from 'react-device-detect';
import { preventZoom } from "../../../../globalFunctions";
const ViewAllAwards = ({ isLive, productionUrl }) => {
  const [searchText, setSearchText] = useState("")
  const [isOpenSearch, setisOpenSearch] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const userCode = location.state.data;

  const openandCloseSearch=(isOpen)=>{
    setisOpenSearch(isOpen)
    preventZoom(deviceinfo)
  }


const { data, hasMore, fetchMoreData,setLoading,paginateLoader,fetchAwards, page,loading } = useFetchAwardsPagination(userCode, isLive, productionUrl);
const { deBoundeAwards,isSearch,searchData}=useAwardsSearch( isLive, productionUrl,userCode,fetchAwards, page, setLoading, loading )  
const viewAllDataContainerProps = {data:isSearch?searchData:data,loading, fetchMoreData, hasMore, navigate, searchLength:searchData.length,dataLength:data.length,
     bluetick, userCode,searchText,isSearch,paginateLoader,isOpenSearch}
  return (
    <div className="view-all-awards">
      <AwardsHeader SearchFunction={deBoundeAwards} searchText={searchText} setSearchText={setSearchText} setStartLoad={setLoading} isOpenSearch={isOpenSearch} setisOpenSearch={setisOpenSearch} openandCloseSearch={openandCloseSearch} />
      <ViewAllDataContainer {...viewAllDataContainerProps}/>
    </div>
  );
};

export default ViewAllAwards;
