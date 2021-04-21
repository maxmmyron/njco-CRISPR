import React from 'react'
import SubPage from '../SubPage'
import '../css/History.css'

export default function History() {

    return (
        <SubPage text={["History ", "of ", "CRISPR"]} num="01">
            <div className="container part-height">
                <div className="text-container fc">
                    <p className="paragraph lg-text" data-scroll data-scroll-speed="1.5" data-scroll-position> Deutsches Ipsum Dolor deserunt Turnbeutel has Guten Tag Tollit Schadenfreude ius Anwendungsprogrammierschnittstelle Saepe Lebensabschnittsgefährte elaboraret Knappwurst ne, Schnaps eu Die Toten Hosen pertinax, Riesling eripuit Prost no Danke Diam Prost no Zauberer eos zu spät suscipit Michael Schuhmacher Eam Milka offendit Goethe ad Welt voluptatibus Umsatzanalyse ad Autobahn consul Donaudampfschiffahrtsgesellschaftskapitän vix. Milka quas Autobahn veritus Kirschkerne</p>  
                </div>
            </div>
            <div id="timeline-container" className="container full-height bg-blue">
                <div id="timeline">
                    <div id="tl-container">
                        <div id="tl-line" />
                    </div>
                    <div className="tl-items">
                        <div className="tl-item" onMouseMove={()=>{}}>
                            <div className="tl-dot-selector">
                                <div className="tl-dot"/>
                                <div className="tl-selected"/>
                            </div>
                            <p className="tl-caption">1994</p>
                        </div>
                    </div>
                </div>
                <div id="timeline-decrement"></div>
                <div id="timeline-content"></div>
                <div id="timeline-increment"></div>
            </div>
        </SubPage>
    )
}
