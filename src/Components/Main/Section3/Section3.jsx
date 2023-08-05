import React from 'react'
import "./Section3.scss"
import rasm from "../../../Assets/img/TeleFon.png"
import App from "../../../Assets/img/appstore.png"
import google from "../../../Assets/img/googleplay.png"

export const Section3 = () => {
    return (
        <section className='dks'>
            <div className='section section__Container'>
                <img src={rasm} alt="phone" width="236" height="177" />

                <div>
                    <h2 className='section__kurs'>
                        Всегда будьте в курсе последних новостей!
                    </h2>
                    <h3 className='section__mobile'>
                        Установите мобильное приложение NAMANGANLIKLAR24
                        и все новости в вашем кармане!
                    </h3>
                </div>

                <div>
                    <img className='app' src={App} alt="app" width="162" height="50" />

                    <img src={google} alt="app" width="162" height="50" />
                </div>


            </div>
        </section>
    )
}
