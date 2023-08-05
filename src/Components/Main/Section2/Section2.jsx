import React from 'react'
import "./Section2.scss"
import calendar from "../../../Assets/img/ic_outline-date-range.png"
import pic1 from "../../../Assets/img/Rectangle38.png"
import pic2 from "../../../Assets/img/Rectangle39.png"
import pic3 from "../../../Assets/img/Rectangle40.png"
import pic4 from "../../../Assets/img/Rectangle41.png"



export const Section2 = () => {
    return (
        <section>
            <div className='section section__container'>
                <div>
                    <h3 className='section__h3'>
                        Последние новости
                    </h3>
                    <div className='section__df'>
                        <img src={pic1} alt="" />
                        <div className='section__tx'>
                            <h2 className='section__ti1'>По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело</h2>
                            <p className='section__tex1'>После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.
                            </p>
                            <div className='section__cal'>
                                <img src={calendar} alt="calendar" width="18" height="20" />
                                <p>11:31 / 15.05.2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='section__df'>
                        <img src={pic2} alt="" />
                        <div className='section__tx'>
                            <h2 className='section__ti2'>Мирзиёев: «Нам следовало бы принять некоторые правила
                                карантина как часть повседневной жизни»
                            </h2>
                            <p className='section__tex1'>Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.
                            </p>
                            <div className='section__cal'>
                                <img src={calendar} alt="calendar" width="18" height="20" />
                                <p>11:31 / 15.05.2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='section__df'>
                        <img src={pic3} alt="" />
                        <div className='section__tx'>
                            <h2 className='section__ti3'>В Ташкенте планируют ввести новую систему электронных проездных билетов
                            </h2>
                            <p className='section__tex1'>Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.
                            </p>
                            <div className='section__cal'>
                                <img src={calendar} alt="calendar" width="18" height="20" />
                                <p>11:31 / 15.05.2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='section__df'>
                        <img src={pic1} alt="" />
                        <div className='section__tx'>
                            <h2 className='section__ti4'>По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело</h2>
                            <p className='section__tex1'>После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.
                            </p>
                            <div className='section__cal'>
                                <img src={calendar} alt="calendar" width="18" height="20" />
                                <p>11:31 / 15.05.2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='section__df'>
                        <img src={pic2} alt="" />
                        <div className='section__tx'>
                            <h2 className='section__ti5'>Мирзиёев: «Нам следовало бы принять некоторые правила
                                карантина как часть повседневной жизни»
                            </h2>
                            <p className='section__tex1'>Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.

                            </p>
                            <div className='section__cal'>
                                <img src={calendar} alt="calendar" width="18" height="20" />
                                <p>11:31 / 15.05.2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='section__df fd'>
                        <img src={pic3} alt="" />
                        <div className='section__tx'>
                            <h2 className='section__ti6'>В Ташкенте планируют ввести новую систему электронных проездных билетов
                            </h2>
                            <p className='section__tex1'>Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.
                            </p>
                            <div className='section__cal'>
                                <img src={calendar} alt="calendar" width="18" height="20" />
                                <p>11:31 / 15.05.2020</p>
                            </div>
                        </div>
                    </div>

                    <a className='section__lin' href="#">Больше новостей</a>
                </div>
                    <div className='section__df--2'>
                        <div className='hr'>
                            <h3 className='section__samiye'>Cамые популярные новости</h3>
                            <p className='section__fakt'>
                                По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело
                            </p>
                            <p className='section__pm'>
                                11:31 / 15.05.2020
                            </p>
                        </div>
                        <div className='hr'>
                            <p className='section__fakt'>
                                По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело
                            </p>
                            <p className='section__pm'>
                                11:31 / 15.05.2020
                            </p>
                        </div>
                        <div className='hr'>
                            <p className='section__fakt'>
                                По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело
                            </p>
                            <p className='section__pm'>
                                11:31 / 15.05.2020
                            </p>
                        </div>
                        <div>
                            <p className='section__fakt'>
                                По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело
                            </p>
                            <p className='section__pm'>
                                11:31 / 15.05.2020
                            </p>
                        </div>
                        <img className='img' src={pic4} alt="pic4" width="386" height="447" />
                    </div>

            </div>
        </section>
    )
}
