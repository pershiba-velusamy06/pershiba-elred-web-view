import { navigateToNeeds, navigateToHomeFromNeeds} from "../../bioGlobalFunctions";
import { useNavigate, useSearchParams, NeedsViewContainer, useFetchNeeds, NeedsViewHeader } from "./ImportsNeedsView";

const NeedsView = ({ isLive, productionUrl }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const { data, loading, fetchMoreNeeds, hasMore, loader } = useFetchNeeds( isLive, productionUrl, userCode );
  const navigate = useNavigate();

  return (
    <div className="leads-view">
      <NeedsViewHeader
        navigateToHomeFromNeeds={navigateToHomeFromNeeds}
        userCode={userCode}
        navigate={navigate}
      />
      <NeedsViewContainer
        loading={loading}
        data={data}
        fetchMoreNeeds={fetchMoreNeeds}
        hasMore={hasMore}
        navigateToNeeds={navigateToNeeds}
        userCode={userCode}
        loader={loader}
      />
    </div>
  );
};

export default NeedsView;
