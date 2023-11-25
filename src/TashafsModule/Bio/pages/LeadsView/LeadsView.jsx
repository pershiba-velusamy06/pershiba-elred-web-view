import React, { useState } from "react";
import "./leadsview.scss";
import { useSearchParams } from "react-router-dom";
import { LeadsViewHeader,LeadsShimmer,LeadsPaginated,useFetchLeads } from "./LeadsViewImports";

const LeadsView = ({ isLive, productionUrl }) => {
  const [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const [page, setPage] = useState(11);
  const [hasMore, setHasMore] = useState(true);

  const { loading, leadsData, loader, setLoader, setCountofLeads, getCOuntofLeads, setLeadsData } = useFetchLeads(isLive, productionUrl, userCode);

  const leadsPaginatedProps = {leadsData, isLive, productionUrl, userCode, page, setPage, hasMore, setHasMore, loader, setLoader, setCountofLeads, getCOuntofLeads, setLeadsData};

  return (
    <>
      <div className="leads-view-main-wrapper">
        <LeadsViewHeader userCode={userCode} />
        <div className="leads-view1">
          {loading ? <LeadsShimmer /> : <LeadsPaginated {...leadsPaginatedProps} />}
        </div>
      </div>
    </>
  );
};

export default LeadsView;
