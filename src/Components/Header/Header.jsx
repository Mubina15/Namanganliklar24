import React from 'react'
import "./Header.scss"
import logo from "../../Assets/img/logo.svg"
import search from "../../Assets/img/search.svg"
import ru from "../../Assets/img/cif_ru.png"
import telegram from "../../Assets/img/tg.svg"

export const Header = () => {
    return (
        <header className="he">

            <div className="header header__container">

                <div className="header__div">

                    <a className="header__logo" href="#">
                        <img src={logo} width="329" height="30" alt="header__logo" />
                    </a>

                    <ul className="header__list">

                        <li className="header__item">
                            <a className="header__number" href="#">
                                <span className="header__val">$</span>
                                10137.2
                            </a>
                        </li>

                        <li className="header__item">
                            <a className="header__number" href="#">
                                <span className="header__val">P</span>
                                138.26
                            </a>
                        </li>

                        <li className="header__item">
                            <a className="header__number" href="#">
                                <span className="header__val">E</span>
                                10988.72
                            </a>
                        </li>

                    </ul>

                    <div>

                        <ul className="header__ul">
                            <li>
                                <a className="header__link__img" href="#">
                                    <img className="header__search__img" src={search} width="24" height="24" alt="search" />
                                </a>
                            </li>

                            <li>
                                <a className="header__img__ru" href="#">
                                <img className="search__img" src={ru} width="20" height="20" alt="ru" />
                                        <p className="ru">Ру</p>
                                </a>
                            </li>

                            <li>
                                <a className="header__tg__link" href="#">
                                    <img src={telegram} width="20" height="20" alt="tg"/>
                                        <p className="header__podpiska__text">Подписатся</p>
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </header>
    )
}
