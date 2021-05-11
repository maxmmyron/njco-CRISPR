import React from 'react'

export default function HistoryItem(props) {
    return (
        <div className="scroll-element history-section-container" data-scroll-section>
            <h1 className="history-date" data-scroll data-scroll-speed="1">{props.year}</h1>
            <div className="history-content" data-scroll data-scroll-speed="2">
                <div className="history-img-container history-content-item" data-scroll>
                    <img src={props.imgsrc} alt={props.imgalt}></img>
                </div>
                <h1 className="history-headline history-content-item" data-scroll>{props.headline}</h1>
                <div className="history-text history-content-item" data-scroll>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
