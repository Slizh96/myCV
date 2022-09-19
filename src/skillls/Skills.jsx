import React from "react";
import s from './Skills.module.css'
import c from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}> {/*второй частью перезатираем нужные параметры*/}
                <Title title='Skills'/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'It is the best programmer language. I know it '}/>
                    <Skill title={'HTML'} description={'It uses for creat web-site'}/>
                    <Skill title={'CSS'} description={'It makes for creat beautiful web-site '}/>
                    <Skill title={'JS'} description={'It is programmer language'}/>
                    <Skill title={'HTML'} description={'It uses for creat web-site'}/>
                    <Skill title={'CSS'} description={'It makes for creat beautiful web-site '}/>
                </div>
            </div>
        </div>
    )
}