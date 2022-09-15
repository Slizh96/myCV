import React from "react";
import s from './Main.module.css'
import c from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={c.container}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>I am Olga Slizh</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>
        </div></div>
    )
}