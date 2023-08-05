import React from 'react'
import "./Section1.scss"
import covid from "../../../Assets/img/icon-covid.png"
import mask from "../../../Assets/img/Mask.svg"
import smile from "../../../Assets/img/Smile.svg"
import die from "../../../Assets/img/icon-dead.png"
import prizidend from "../../../Assets/img/prezident.jpg"
import karantin from "../../../Assets/img/stop-karantin.jpg"
import kar from "../../../Assets/img/karantin.jpg"
import sardoba from "../../../Assets/img/sardoba.jpg"
import prokuror from "../../../Assets/img/prokuror.jpg"
import tez from "../../../Assets/img/tez-yordam.jpg"
import bell from "../../../Assets/img/bell-icon.png"


export const Section1 = () => {
    return (
        <section className='section'>
            <div className='section__div'>
                <div className='section__flex'>
                    <div className='section__sec'>
                        <img className='img' src={covid} alt="covid" width="43" height="45" />
                        <h2 className='section__title1'>
                            Коронавирус COVID-19
                            в Узбекистане
                        </h2>
                    </div>
                    <div className='section__sec red'>
                        <img className='img' src={mask} alt="mask" width="38" height="40" />
                        <h3 className='section__title2'><span className='section__span1'>Инфицированы</span> 2753</h3>
                    </div>
                    <div className='section__sec org'>
                        <img className='img' src={smile} alt="smile" width="38" height="40" />
                        <h3 className='section__title3'><span className='section__span2'>Выздоровели</span> 2245</h3>
                    </div>
                    <div className='section__sec org'>
                        <img className='img' src={die} alt="smile" width="38" height="38" />
                        <h3 className='section__title4'><span className='section__span3'>Умерли</span> 12</h3>
                    </div>
                </div>

                <div className='section__cards'>
                    <div className='section__card'>
                        <img src={prizidend} alt="prizident" width="386" height="190" />
                        <h4 className='section__card--title1'>Мирзиёев рассказал, зачем было построено
                            Сардобинское водохранилище</h4>
                        <p className='section__card--text'>05:28 / 16.05.2020</p>
                    </div>
                    <div className='section__card'>
                        <img src={kar} alt="prizident" width="388" height="190" />
                        <h4 className='section__card--title2'>Карантин в Узбекистане продлен до 1 июня</h4>
                        <p className='section__card--text'>05:28 / 16.05.2020</p>
                    </div>
                    <div className='section__card'>
                        <img src={sardoba} alt="prizident" width="386" height="190" />
                        <h4 className='section__card--title3'>Обмелевшая Сардоба: стихия или
                            человеческий фактор?</h4>
                        <p className='section__card--text'>05:28 / 16.05.2020</p>
                    </div>
                    <div className='section__card'>
                        <img src={prokuror} alt="prizident" width="386" height="190" />
                        <h4 className='section__card--title4'>Следствие проверяет четыре версии
                            прорыва Сардобинской плотины</h4>
                        <p className='section__card--text'>05:28 / 16.05.2020</p>
                    </div>
                    <div className='section__card'>
                        <img src={tez} alt="prizident" width="386" height="190" />
                        <h4 className='section__card--title5'>Выявлено еще 7 случаев коронавируса</h4>
                        <p className='section__card--text'>05:28 / 16.05.2020</p>
                    </div>
                    <div className='section__card'>
                        <img src={karantin} alt="prizident" width="386" height="190" />
                        <h4 className='section__card--title6'>Итоги второго месяца карантина</h4>
                        <p className='section__card--text'>05:28 / 16.05.2020</p>
                    </div>
                </div>

                <div className='section__flex2'>
                    <div className='section__fl'>
                    <img className='section__fl--img' src={bell} alt="bell" width={31} height={35}/>
                    <h3 className='section__tit'>Хотите узнать новости первыми? подключите уведомления!
                    </h3>
                    </div>
                    <a className='section__link' href="#">Включит  уведомления!
                    </a>
                </div>

            </div>
        </section>
    )
}
