import React from "react";
import s from './Footer.module.css';
import c from '../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${c.container} ${s.container}`}>
                <h3 className={s.title}>Olga Slizh</h3>
                <div className={s.icons}>
                    <div className={s.soc}>Telegram</div>
                    <div className={s.soc}>LinkedIn</div>
                    <div className={s.soc}>GitHub</div>
                </div>
                <span className={s.title}>2022 Все права защищены</span>
            </div>
        </div>
    )
}