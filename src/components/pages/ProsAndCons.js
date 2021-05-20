import React, { createRef, useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Page from '../Page'
import SubpageHeader from './page_components/SubpageHeader'
import '../css/SubPage.css'

export default function ProsAndCons(props) {

    const locomotiveScrollRef = createRef();
    
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        let scroll = new LocomotiveScroll({
            el: locomotiveScrollRef.current,
            smooth: true,
            direction: props.horz ? 'horizontal' : 'vertical'
        });

        if(update) {
            scroll.destroy();
            scroll = new LocomotiveScroll({
                el: locomotiveScrollRef.current,
                smooth: true,
                direction: props.horz ? 'horizontal' : 'vertical'
            });
            setUpdate(false);
        }

        return () => {
            scroll.destroy();
        };
    }, [locomotiveScrollRef]);

    return (
        <Page>
            <div id="page" className="page-inner" data-horizontal={props.horz ? "true" : "false"} data-scroll-container ref={locomotiveScrollRef}>
                <div className="page-contents">
                    <SubpageHeader text={["Pros ", "and ", "Cons"]} num="04"></SubpageHeader>
                    <div className="container">
                        <div className="text-container">
                            <p className="paragraph p-scroll-appear" data-scroll>While there is no doubt a great deal of hype around CRISPR and its potentials, it is important to weigh the benefits and caveats against one another. Doing so may introduce important discussion about whether we are prepared to release such an altering technology into everyday use, and whether we can really reap the benefits described on paper.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Benefits</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>The primary benefit is the overall potential to save countless lives through the knock-out of defective genes. CRISPR gene editing is a permanent change in a person, plant, or animal’s genome, possibly even being an edit that propagates across generations, which means that inheritable diseases, as well as diseases that express themself in the womb, could be a thing of the past.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Another benefit is the effective eradication of infectious agents, saving countless more lives, as well as billions of dollars in research, development, manufacturing, and transportation logistics for companies. For example, CRISPR has the ability to wipe out HIV not by targeting the virus itself, but instead by targeting the host. 2018 saw the first children born with a natural resistance to HIV because of CRISPR, in a move that was seen by many as appalling and immoral.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Likewise, CRISPR gene editing could help us to shape the environment to adapt better to a changing world, and to adapt in our favor. Being able to engineer crops and animals for our ever-changing environment is likely to become an unfortunate necessity in a hotter global climate with fewer diverse ecosystems due to our reckless behaviors. Holstein cows can become more tolerant of hotter climates, allowing for milk production around the world. Bees can be given resistance to more numerous pests that plague existing hives.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Cost is a huge benefit to CRISPR when compared to other gene editing methods. CRISPR is far less expensive than other gene editing methods, like zinc-fingers (ZFNs). By 2015, CRISPR was 150 times cheaper than ZFNs, and were more accurate and precise. The adoption of CRISPR has led to the overall continuing trend of decreasing costs of gene editing. The National Human Genome Research Institute found that the cost to sequence the human genome fell from 100 million dollars in 2001 to just one thousand dollars in 2020. The fall in gene editing has fallen just as sharply, and CRISPRs costs continue to get cheaper as CRISPR becomes more widely available and understood.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Caveats</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR gene editing, while immensely helpful in altering undesirable traits, is unproven in the wild. Performing a gene knock-in or knock-out could create desirable results in a controlled environment like a lab, but in the non-controlled environment the process could easily go out of control through unintended side effects. While our understanding of genes is quite impressive, it is still a far cry from complete, and many of the genomes we want to edit are not fully understood. A DNA snippet that supposedly controls one expression could very well control many more, meaning an edit to that snippet could cause many unintended consequences.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Likewise, CRISPR can occasionally introduce what is known as an “off-target” edit. This occurs when CRISPR accidentally targets the wrong target section of DNA, which can introduce unintended genomic edits, or even cancer. Currently, off-target effects, as they are called, severely limit the widespread potential of CRISPR gene editing, especially in human trials.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Delivery methods, while numerous, are not easy to engineer with every specific in mind. Delivery methods for CRISPR/Cas9 must be non-toxic, high-precision, efficient, cheap, and biodegradable to be considered ideal for longer-term commercial trials. The best delivery options available consist of attaching a CRISPR system to a non-viral agent— like a liposome or nanoparticle— and letting the agent degrade in the cell as CRISPR works. Non-viral delivery methods, however, are not perfect, and better agents will be needed to further prove CRISPR/Cas9’s reliability in commercial applications.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR also has the potential to increase the risk of cancer. CRISPR double-strand breaks have the potential to trigger the p53 signaling pathway, which is a network of genes that responds to stress. This means the potential stress on a cell can turn it cancerous, meaning the inherent cancer-causing risk of CRISPR is an issue.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Closing</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>While the various benefits and caveats of CRISPR/Cas9 are not 100% confirmed or noted, they are still an indication that the current understanding of CRISPR we have is limited and ever growing. It is especially important that researchers focusing on CRISPR weigh the benefits and caveats as they are currently, and use the available insight in order to discover new pros and cons.</p>
                            <div className="paragraph-spacer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
