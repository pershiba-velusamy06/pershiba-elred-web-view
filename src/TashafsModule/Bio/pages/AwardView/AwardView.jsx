import {useLocation, useNavigate, back, awardImg, bluetick, imgLable, pdfLable, AwardPreviewContainer, AwardTopContainer} 
        from './ImportsAwardView'

const AwardView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, userCode } = location.state;

  const awardTopContainerProps = { back, data, awardImg, bluetick, navigate }
  const awardPreviewContainerProps = { data, pdfLable, imgLable, navigate, userCode }
  
  return (
    <div className="awardview">
      <AwardTopContainer {...awardTopContainerProps} />
      <AwardPreviewContainer {...awardPreviewContainerProps} />
    </div>
  );
};

export default AwardView;
