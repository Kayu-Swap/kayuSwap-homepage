import React from 'react';
import KCC from '../images/KCC.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="copyright">
                <div className="containner">
                    <div className="row">
                        <p><span
                            style={{
                                position: "relative",
                                top: "5px"
                            }}>
                            Powered by : </span> <a className="navbar-brand" href="https://kcc.io/" target="_blank" rel="noreferrer"><img src={KCC} alt="KUCOIN COMMUNNITY CHAIN" style={{ marginLeft: "20px", }} /></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
