import React from "react";
import s from './Projects.module.css'
import c from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";
import todoImg from '../assets/image/todo.jpg';
import socImg from '../assets/image/soc.png'

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socImg})`,
    };
    const todo = {
        backgroundImage: `url(${todoImg})`,
    };
    return (
        <div className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}> {/*второй частью перезатираем нужные параметры*/}
                <Title title='My projects'/>
                <div className={s.projects}>
                    <Project style={social} src='' title='Social network'
                             description='i use js, ts, css, html, react, redux, in this project'/>
                    <Project style={todo} src='' title='Todo list'
                             description='i use ALSO js, ts, css, html, react, redux, in this project'/>
                </div>
            </div>
        </div>
    )
}