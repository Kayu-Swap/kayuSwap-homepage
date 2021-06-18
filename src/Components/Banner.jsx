import React from 'react';
import TwSvg from '../images/twSvg.svg'
import TeSvg from '../images/teSvg.svg'
import GtSvg from '../images/gtSvg.svg'
import KChef from '../images/kChef.png'

export default function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className={["col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"].join(" ")}>
                            <div className="textsection">
                                <div className="pricebutton">
                                    <ul className="visitbutton">
                                        <li> <a href="https://swap.kayuswap.com" target="_blank" rel="noreferrer">1 KAYU = $0.1 </a> </li>
                                        <li> <a href="https://app.kayuswap.com/farm" target="_blank" rel="noreferrer">Earn More KAYU</a> </li>
                                    </ul>
                                    <h1>First ` Complete DeFi ` Ecosystem on KCC</h1>
                                    <p style={{ color: "#000000", }}> Swap, Farm, Lend, Launch, Earn, NFT on KayuSwap</p>
                                    <ul className="enterbutton">
                                        <li><a href="https://app.kayuswap.com" target="_blank" rel="noreferrer">Launch App </a></li>
                                        <li><a href="https://docs.kayuswap.com" target="_blank" rel="noreferrer">Learn More </a></li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="enterbutton2">
                                        <li><a href="https://t.me/kayuswap" target="_blank" rel="noreferrer"><img src={TwSvg} alt="Telegram" /></a></li>
                                        <li><a href="https://twitter.com/KayuSwap" target="_blank" rel="noreferrer"><img src={TeSvg} alt="Twitter" /></a></li>
                                        <li><a href="https://github.com/Kayu-Swap" target="_blank" rel="noreferrer"><img src={GtSvg} alt="GitHub" /></a></li>
                                        <div>
                                            <p style={{ color: "#000000", marginRight: "200px" }}> <b>connect@kayuswap.com </b></p>
                                        </div>
                                    </ul>

                                </div>

                            </div>

                        </div>
                        <div className={["col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"].join(" ")}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shafimg">
                <img src={KChef} alt="KayuSwap Chef" />
            </div>
        </>
    )
}
