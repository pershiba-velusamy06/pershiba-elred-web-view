import React, { useState } from "react";
import moment from "moment";
import shareIcon from "../../../../../../assets/images/share-arrow.svg";
import { handleShareProfile } from "../../needsGlobalFunctions";
import { Spinner } from "react-bootstrap";
import {
  parseParagraph,
  parseParagraphItalic,
} from "../../../../../../globalFunctions";
import ReactLinkify from "react-linkify";
import ReactLinkifyComp from "../../../ReactLinkifyComp/ReactLinkifyComp";

const InnerContentDiv = ({ data }) => {
  const [logoLoader, setLogoLoader] = useState(true);

  // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  // const isAndroid = /Android/.test(navigator.userAgent);

  const formattedText = data?.needDescription.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < data?.needDescription.split("\n").length - 1 ? <br /> : null}
    </React.Fragment>
  ));

  return (
    <div className="details_div">
      <div className="content_outer">
        <div className="inner_header">
          <div className="date">
            {moment(data?.needCreatedAt).format("ddd, DD MMM YYYY")}
          </div>
          <div className="share" onClick={() => handleShareProfile(data)}>
            <Spinner
              animation="border"
              variant="light"
              size="sm"
              className={
                logoLoader ? "show-img-loader spinner" : "hide-img-loader"
              }
            />
            <img
              src={shareIcon}
              alt=""
              className={logoLoader ? "hide-img-loader" : "show-img-loader"}
              onLoad={() => setLogoLoader(false)}
            />{" "}
            Share
          </div>
        </div>
        <div className="content">
          {/* <ReactLinkify
            componentDecorator={(decorateHref, decoratedText, key) => {
              if (decorateHref.startsWith("mailto:")) {
                const email = decorateHref.replace("mailto:", "");
                if (isIOS) {
                  // Open mailto links in the default iOS mail app
                  return (
                    <a target="_top" rel="noopener noreferrer" href={`mailto:${email}`} key={key}>
                      {decoratedText}
                    </a>
                  );
                } else if (isAndroid) {
                  // Open mailto links in the Gmail app on Android devices
                  return (
                    <a
                      target="_blank"
                      href={`intent://send?to=${email}#Intent;scheme=mailto;package=com.google.android.gm;end`}
                      key={key}
                    >
                      {decoratedText}
                    </a>
                  );
                } else {
                  // Open mailto links in Gmail for other non-iOS devices
                  return (
                    <a
                      target="_blank"
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                      key={key}
                    >
                      {decoratedText}
                    </a>
                  );
                }
              } else {
                return (
                  <a target="_blank" href={decorateHref} key={key}>
                    {decoratedText}
                  </a>
                );
              }
            }}
          >
            {data?.needDescription}
          </ReactLinkify> */}
          <ReactLinkifyComp data={data?.needDescription}/>
        </div>
      </div>
    </div>
  );
};

export default InnerContentDiv;
