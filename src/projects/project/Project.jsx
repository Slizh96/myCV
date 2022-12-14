import React from "react";
import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.icon} style={props.style}>
                <a className={s.button}>See project</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}