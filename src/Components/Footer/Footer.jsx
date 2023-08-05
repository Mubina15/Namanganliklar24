import React from 'react'
import "./Footer.scss"
import tg from "../../Assets/img/icon-telegram-blue.png"
import logo from "../../Assets/img/Logo_f.png"

export const Footer = () => {
    return (
        <footer className='footer'>

            <div className="footer__container">

                <div className="footer__div">

                    <a className="footer__logo--link" href="#">
                        <img src={logo} width="173" height="21" alt="footer__logo"/>
                    </a>

                    <div className="footer__div5">

                        <p className="footer__text">Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:</p>

                        <div className="footer__tg--link">
                            <img src={tg} width="20" height="20" alt="footer__tg" />
                                <p className="footer__tg__text">Подписатся</p>
                        </div>

                    </div>

                </div>

                <hr className="footer__line" />

                    <div className="footer__divs">

                        <div>
                            <h3 className="footer__title__sayt">О сайте</h3>

                            <p className="footer__text2">
                                Воспроизводство, копирование, тиражирование, распространение и иное использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.
                            </p>
                        </div>

                        <ul className="footer__list">
                            <li className="footer__item"><a className="footer__link" href="#">Информация о сайте</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Напишите нам</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Реклама</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Прислать новость</a></li>
                        </ul>

                        <ul className="footer__list2">
                            <li className="footer__item2"><a className="footer__link2" href="#">Использование материалов</a></li>
                            <li className="footer__item2"><a className="footer__link2" href="#">Темы дня</a></li>
                            <li className="footer__item2"><a className="footer__link2" href="#">Наша команда</a></li>
                        </ul>

                    </div>

            </div>

        </footer>
    )
}
