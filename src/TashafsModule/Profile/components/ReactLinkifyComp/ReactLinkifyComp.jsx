import React from "react";
import ReactLinkify from "react-linkify";

const ReactLinkifyComp = ({data}) => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

  return (
    <ReactLinkify
      componentDecorator={(decorateHref, decoratedText, key) => {
        if (decorateHref.startsWith("mailto:")) {
          const email = decorateHref.replace("mailto:", "");
          if (isIOS) {
            // Open mailto links in the default iOS mail app
            return (
              <a
                target="_top"
                rel="noopener noreferrer"
                href={`mailto:${email}`}
                key={key}
              >
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
      {data}
    </ReactLinkify>
  );
};

export default ReactLinkifyComp;
