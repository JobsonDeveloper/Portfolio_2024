import React from "react"
import "./ProfissionCard.scss";
import { Zoom } from "@mui/material";

export const ProfissionCard = (props) => {
    return (
        <Zoom in={props.showProfission}>
            <ul className="jd_main_profission_data">
                <li className="jd_main_profission_item">
                    <h6 className="jd_profission_subtitle">Empresa</h6>
                    <p className="jd_profission_text">{props.company}</p>
                </li>

                <li className="jd_main_profission_item">
                    <h6 className="jd_profission_subtitle">Função</h6>
                    <p className="jd_profission_text">{props.function}</p>
                </li>

                <li className="jd_main_profission_item">
                    <h6 className="jd_profission_subtitle">Tipo de contrato</h6>
                    <p className="jd_profission_text">{props.position}</p>
                </li>

                {/* <li className="jd_main_profission_item jd_profission_statusType">
                    <h6 className="jd_profission_subtitle">Periodo</h6>
                    <p className="jd_profission_text">{props.status}</p>
                </li> */}

                <li className="jd_main_profission_item">
                    <h6 className="jd_profission_subtitle">Período</h6>
                    <p className="jd_profission_text">{props.period}</p>
                </li>
            </ul >
        </Zoom>
    )
}