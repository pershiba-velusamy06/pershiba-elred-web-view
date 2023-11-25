import React from "react";
import { useNavigate } from "react-router-dom";

function CardHeader({ loading, data, userCode }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between">
      <p className="section_test_text mb-0">Comments</p>
      {!loading || data.length? (
        <div
          className="btn-see-more"
          onClick={() => navigate(`/comments?userCode=${userCode}`)}>
          See all
        </div>
      ):null}
    </div>
  );
}

export default CardHeader;
