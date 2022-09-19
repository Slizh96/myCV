import React from "react";
import s from './Projects.module.css'
import c from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}> {/*второй частью перезатираем нужные параметры*/}
                <Title title='My projects'/>
                <div className={s.projects}>
                    <Project src='' title='project 1'
                             description='i use js, ts, css, html, react, redux, in this project'/>
                    <Project src='' title='project 2'
                             description='i use ALSO js, ts, css, html, react, redux, in this project'/>
                </div>
            </div>
        </div>
    )
}