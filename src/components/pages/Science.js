import React from 'react'
import "../css/Science.css";
import JigglyText from '../JigglyText';
import Page from '../Page';

export default function Science() {
    return (
        <div id="is-science">
            <Page>
                <div id="science-landing">
                    <JigglyText id="science-title" text={["How ","CRISPR ","Works"]}></JigglyText>
                </div>
            </Page>
         </div>
    )
}
