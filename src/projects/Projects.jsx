import React from "react";
import s from './Projects.module.css'
import c from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}> {/*второй частью перезатираем нужные параметры*/}

            </div>
        </div>
    )
}