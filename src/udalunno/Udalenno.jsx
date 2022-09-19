import React from "react";
import s from './Udalenno.module.css'
import c from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";

export const Udalenno = ()=>{
    return(
        <div className={s.udalenno}>
            <div className={`${c.container} ${s.container}`}>
                <Title title='I Am Available For a remote job'/>
                <a href='' className={s.button}>Нанять меня</a>
            </div>
        </div>
    )
}