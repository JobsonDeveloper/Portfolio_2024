import React from "react"
import "./CertificatesCard.scss";
import { Zoom } from "@mui/material";

export const CertificatesCard = (props) => {
    return (
        <Zoom in={props.showCertificate}>
            <div className="jd_certificates_data">
                <img src={props.certificateUrl} alt="Foto de um certificado" className="jd_certificates_img" />
            </div>
        </Zoom>
    )
}