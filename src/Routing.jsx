import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./TashafsModule/Profile/Profile";
import Testimonal from "./UmeshModule/Testimonial/Testimonal";
import TestimonaDetails from "./UmeshModule/Testimonial/TestimonalDetails/TestimonalDetails";
import Test from "./TashafsModule/Test/Test";
import MySuperSkills from "./TashafsModule/MySuperSkills/MySuperSkills";
import Bio from "./TashafsModule/Bio/Bio";
import ResumeView from "./TashafsModule/Bio/pages/ResumeView/ResumeView";
import AwardView from "./TashafsModule/Bio/pages/AwardView/AwardView";
import ViewAllAwards from "./TashafsModule/Bio/pages/ViewAllAwards/ViewAllAwards";
import ShareCard from "./TashafsModule/ShareCard/ShareCard";
import Comments from "./UmeshModule/comments/Comments";
import CertificateView from "./TashafsModule/Bio/pages/CertificateView/CertificateView";
import SearchTestimonials from "./UmeshModule/Testimonial/search/SearchTestimonials";
import LeadsView from "./TashafsModule/Bio/pages/LeadsView/LeadsView";
import NeedsView from "./TashafsModule/Bio/pages/NeedsView/NeedsView";
import ImageCertificateView from "./TashafsModule/Bio/pages/ImageCertificateView/ImageCertificateView";
import Invite from "./UmeshModule/events/invite";
import Information from "./UmeshModule/events/info";
import Member from "./UmeshModule/events/member";
import Details from "./UmeshModule/events/details/Details";
import Chat from "./UmeshModule/events/chat/Chat";
import { getUserCode } from "./globalFunctions";
import ErrorPage from "./TashafsModule/components/ErrorPage/ErrorPage";
import Page404 from "./TashafsModule/components/Page404/Page404";
import NeedsCard from "./TashafsModule/Profile/components/Needs/NeedsCard/NeedsCard";
import SignupPage from "./TashafsModule/Bio/pages/SignupPage/SignupPage";
import EnterOTP from "./TashafsModule/Bio/pages/EnterOTP/EnterOTP";
import RespondingLeads from "./TashafsModule/Profile/components/Leads/Pages/RespondingLeads/RespondingLeads"
import LeadsReply from "./TashafsModule/Profile/components/Leads/Pages/Leadsreply/LeadsReply"
import NoInternet from './TashafsModule/components/NoInternet/NoInternet'
import { useContext } from "react";
import { AadharPopupContext } from "./TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import ViewProfilePicture from "./TashafsModule/Profile/components/ViewProfilePicture/ViewProfilePicture";
const Routing = ({ productionUrl, isLive,isOffline ,setisOffline }) => {
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);

  const userCode = getUserCode()

  return (
 

      <Router>
           {isOffline? <NoInternet isOffline={isOffline} setisOffline={setisOffline}/>:
        <Routes>
          <Route path="/testEvent" element={<Invite />} />
          <Route path="/testEvent/info" element={<Information />} />
          <Route path="/testEvent/members" element={<Member />} />
          <Route path="/testEvent/details" element={<Details />} />
          <Route path="/testEvent/chat" element={<Chat />} />

          <Route
            path="/testimonials"
            element={<Testimonal productionUrl={productionUrl} isLive={isLive} />}
          />
          <Route
            path="/testimonials/search"
            element={
              <SearchTestimonials productionUrl={productionUrl} isLive={isLive} />
            }
          />
          <Route
            path="/testimonials/details"
            element={
              <TestimonaDetails productionUrl={productionUrl} isLive={isLive} />
            }
          />
          <Route
            path="/comments"
            element={<Comments productionUrl={productionUrl} isLive={isLive} showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />}
          />
          <Route
            exact
            path="/"
            element={userCode !== null ? <Profile productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />}
          />
          <Route path="/share-card" element={userCode !== null ?
            <ShareCard productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/my-super-skills"
            element={
              <MySuperSkills isLive={isLive} productionUrl={productionUrl} />
            }
          />
          <Route
            path="/my-bio"
            element={<Bio isLive={isLive} productionUrl={productionUrl} />}
          />
          <Route path="/my-bio/resume-view" element={<ResumeView />} />
          <Route path="/my-bio/award-view" element={<AwardView />} />
          <Route path="/my-bio/leads" element={<LeadsView isLive={isLive} productionUrl={productionUrl} />} />
          <Route path="/my-bio/needs" element={<NeedsView isLive={isLive} productionUrl={productionUrl}/>} />
          <Route
          path="/my-bio/leads/responding-leads"
          element={<RespondingLeads  isLive={isLive} productionUrl={productionUrl}/>}
        />
        <Route path="/my-bio/leads/leads-reply" element={<LeadsReply isLive={isLive} productionUrl={productionUrl} userCode={userCode}/>} />
        {/* <Route
          path="/leads/your-information"
          element={<YourInformationForm />}
        /> */}
          <Route path="/my-bio/needs/need" element={<NeedsCard isLive={isLive} productionUrl={productionUrl} userCode={userCode}/>} />
          <Route
            path="/my-bio/view-awards-certificates"
            element={<ViewAllAwards isLive={isLive} productionUrl={productionUrl} />}
          />
          <Route
            path="/my-bio/award-view/certificate"
            element={<CertificateView />}
          />
          <Route
            path="/my-bio/award-view/view-certificate"
            element={<ImageCertificateView />}
          />
          <Route
            path="/page-not-found"
            element={<Page404 />}
          />
          <Route
            path="/signup"
            element={<SignupPage productionUrl={productionUrl} isLive={isLive} userCode={userCode}/>}
          />
          <Route
            path="/validate-otp"
            element={<EnterOTP productionUrl={productionUrl} isLive={isLive} userCode={userCode}/>}
          />
          <Route path="/view-profile-picture" element={userCode !== null ?
            <ViewProfilePicture productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
        </Routes>}
      </Router>
  );
};

export default Routing;
