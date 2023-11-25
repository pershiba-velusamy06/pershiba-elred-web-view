import React, { useState } from 'react'
import { navigateToImg, navigateToPdf } from '../../../bioGlobalFunctions'
import { Spinner } from 'react-bootstrap'
import { getFileExtension } from '../../../../../globalFunctions'

const AwardPreviewContainer = ({ data, pdfLable, imgLable, navigate, userCode }) => {
    const [pdfLoader, setpdfLoader] = useState(true)
    const [awardCertificateLoader, setAwardCertificateLoader] = useState(true)
   

    const fileType = getFileExtension(data?.awardCertificateURL)
    return (
        <div
            className="preview-container"
            onClick={data?.awardContentType == 'pdf' ? () =>
                navigateToPdf(data, userCode, navigate, awardCertificateLoader, ) : () => navigateToImg(data, userCode, navigate,awardCertificateLoader)}>
            {
                data.awardContentType !== "none" && <div
                    className="preview-awards"
                // style={{
                //     backgroundImage:
                //         data?.awardContentType == "pdf"
                //             ? `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url(${data?.pdfPreview})`
                //             : `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url(${data?.awardCertificateURL})`,
                // }}
                >
                    <div className='overlayCert'> </div>
                        <Spinner animation="border" variant="dark" size="sm" className={awardCertificateLoader ? 'show-img-loader-certificate pdf-spinner' : 'hide-img-loader'} />
                        <img src={data?.awardContentType == "pdf" ? data?.pdfPreview : data?.awardCertificateURL} alt="err"
                          className={!awardCertificateLoader ? 'certificateImage' : 'hide-img-loader'} onLoad={() => setAwardCertificateLoader(false)} />

                        <div className="label-certificate">
                            <Spinner animation="border" variant="dark" size="sm" className={pdfLoader ? 'show-img-loader pdf-spinner' : 'hide-img-loader'} />

                            <img className={!pdfLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setpdfLoader(false)}
                                src={data?.awardContentType === "pdf" ? pdfLable : imgLable}
                                alt=""
                            />
                            <div className="name">
                                {/* Certificate.{data?.awardContentType == "image" ? "png" : "pdf"} */}
                                Award.{fileType}
                            </div>
                        </div>
                 
                </div>
            }
        </div>
    )
}

export default AwardPreviewContainer
