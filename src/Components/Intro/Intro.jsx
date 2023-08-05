import React from 'react'
import "./Intro.scss"
import reklama from "../../Assets/img/nrg-banner.jpg"

export const Intro = () => {
    return (
        <intro className="intro">

            <div className="intro__container">

                <ul className="intro__list">

                    <li>
                        <a className="intro__link" href="#">Узбекистана</a>
                    </li>

                    <li>
                        <a className="intro__link" href="#">Мир</a>
                    </li>

                    <li>
                        <a className="intro__link" href="#">Экономика</a>
                    </li>

                    <li>
                        <a className="intro__link intro__link1" href="#">Политика</a>
                    </li>

                    <li>
                        <a className="intro__link" href="#">Общество</a>
                    </li>

                    <li>
                        <a className="intro__link" href="#">Технологии</a>
                    </li>

                    <li>
                        <a className="intro__link" href="#">Спорт</a>
                    </li>

                    <li>
                        <a className="intro__link" href="#">Культура</a>
                    </li>

                    <li>
                        <a className="intro__link" href="#">Происшествия</a>
                    </li>

                    <li>
                        <a className="intro__link" href="#">Туризм</a>
                    </li>

                </ul>

            </div>


            <aside className="intro__aside">

                <div className="container">

                    <img src={reklama} width="1280" height="99" alt="aside" />

                </div>

            </aside>
        </intro>
    )
}
