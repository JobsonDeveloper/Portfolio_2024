import React from "react"
import "./CurseCard.scss";
import { Zoom } from "@mui/material";

export const CurseCard = (props) => {
    return (
        <Zoom in={props.showCurse}>
            <ul className="jd_main_curse_data">
                <li className="jd_main_curse_item">
                    <div className="jd_curse_title_type">
                        <h6 className="jd_curse_subtitle">Curso</h6>
                        
                        <p className="jd_curse_type_text">- {props.type}</p>
                    </div>
                    <p className="jd_curse_text">{props.curse}</p>
                </li>

                <li className="jd_main_curse_item">
                    <h6 className="jd_curse_subtitle">Instituição</h6>
                    <p className="jd_curse_text">{props.institution}</p>
                </li>

                <li className="jd_main_curse_item jd_curse_statusType">
                    <h6 className="jd_curse_subtitle">Status</h6>
                    <p className="jd_curse_text">{props.status}</p>
                </li>

                <li className="jd_main_curse_item">
                    <h6 className="jd_curse_subtitle">Período</h6>
                    <p className="jd_curse_text">{props.period}</p>
                </li>
            </ul >
        </Zoom>
    )
}