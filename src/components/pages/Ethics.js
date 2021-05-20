import React, { createRef, useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Page from '../Page'
import SubpageHeader from './page_components/SubpageHeader'
import '../css/SubPage.css'
import { Canvas, useFrame } from '@react-three/fiber'

import img from '../../assets/img/pexels_orange.jpeg'


export default function Ethics(props) {

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

    const Box = () => {
        
        const meshRef = useRef();

        useFrame(({ clock }) => {
            meshRef.current.rotation.x = clock.getElapsedTime();
        });

        return (
            <mesh ref={meshRef}>
                <boxGeometry />
                <meshPhongMaterial />
            </mesh>
        );
    }

    return (
        <Page>
            <div id="page" className="page-inner" data-horizontal={props.horz ? "true" : "false"} data-scroll-container ref={locomotiveScrollRef}>
                <div className="page-contents">
                    <SubpageHeader text={["Ethics"]} num="05"></SubpageHeader>
                    <div className="container">
                        <div className="text-container">
                            <p className="paragraph p-scroll-appear" data-scroll>The primary ethical dilemma at hand is the potential to irreversibly alter the genome of the human race in potentially disastrous ways. Some scientists and ethicists believe that CRISPR should not be used at all, because it could possibly create a genetic rift in the human genome. “Super babies” could become a reality— babies engineered by CRISPR/Cas9 to be faster, stronger, and better than a naturally born, unedited human ever could be.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Humans</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>The primary ethical dilemma at hand is the potential to irreversibly alter the genome of the human race in potentially disastrous ways. Some scientists and ethicists believe that CRISPR should not be used at all, because it could possibly create a genetic rift in the human genome. “Super babies” could become a reality— babies engineered by CRISPR/Cas9 to be faster, stronger, and better than a naturally born, unedited human ever could be.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>2015 Zygote Engineering</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>In 2015, following a voluntary global moratorium of CRISPR gene editing on human embryos, scientists from the Guangdong Province Key Laboratory of Reproductive Medicine published a paper announcing the first demonstration of gene editing on Tripronuclear zygotes.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>This research was met with condemnation from the scientific community, and the researchers had some difficulty publishing their manuscript in the first place. Top journals like Nature and Science outright refused to publish the paper, due to the ethical concerns in editing human embryos. While the researchers performed the study on non-viable human embryos, they were still human, and such research was already prohibited by the moratorium earlier that year.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>2018 CRISPR Babies</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>In 2018 Chinese babies with edited-genomes were first born in China. Part of a study to determine the viability of human genome CRISPR/Cas9 editing, the three infants were reported healthy. Their genome was modified to remove a series of genes responsible for our susceptibility to HIV. While it was no doubt relieving to know the children were healthy, the overall news of live humans being born with heritable genetic engineering done to them as embryos was detested by nearly all of academia.</p>
                            <div className="container-break" data-scroll data-scroll-speed="1">
                                <img src={img} alt="a" className="container-break-img" onLoad={()=>setUpdate(true)}/>
                                <div className="image-caption-container">
                                    <p className="image-caption">A diagram of CRISPR/Cas9. Note the difference between an inactive Cas9 protein and an active gRNA-Cas9 complex.</p>
                                </div>
                            </div>
                            <p className="paragraph p-scroll-appear" data-scroll>The primary researcher behind the experiment, He Jiankui, broke several health and safety standards while conducting the experiment. He coerced participants, and was subsequently censured by the health ministry in Guangdong, China, and fired from his place of work at Southern University of Science and Technology in Shenzhen.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>He contacted several scientists throughout the duration of the experiment, who had all expressed great stress and condemnation of the endeavour. Likewise, after the experiment, virtually all of the reaction was negative.</p>
                            <div className="paragraph-spacer"></div>
                            <p className="paragraph p-scroll-appear" data-scroll>A growing ethical concern among the public, lawmakers, and scientists is the use of CRISPR/Cas9 for genetic modification of germline cells and human embryos. Such modifications to these cells would induce modifications to offspring, and would be passed onto future generations. In fact, Some governments have already addressed the matter, and current stances among governments is that human embryonic CRISPR gene editing is a big no-no. The Obama administration, for example, released a press statement in 2015 detailing the potential for abuse and misuse in embryonic gene editing, and firmly pushed that such practices should remain off limits. Some top Obama administration officials even labeled CRISPR as a “bioterror threat.”</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>NASEM Report</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>Likewise, The National Academies of Sciences, Engineering, and Medicine report on CRISPR and gene editing, also known simply as the NASEM report, was a comprehensive report on the use of human CRISPR genome editing. The report, written by many researchers and scientists involved in the CRISPR field, takes an overall favorable view on the usage of CRISPR/Cas9 gene editing. However, the NASEM report is distinct in its wording on exactly what it finds acceptable:</p>
                            <div className="blockquote-container p-scroll-appear" data-scroll>
                                <p className="blockquote">The NASEM report… favored somatic genome editing, but did not permit genomic modification for any kind of enhancement… heritable genome-editing trials might be permitted, but only following much more research… and even then, only for compelling reasons and under strict oversight…</p>
                                <p className="blockquote-credit">- National Academies of Sciences, Engineering, and Medicine</p>
                            </div>
                            <p className="paragraph p-scroll-appear" data-scroll>The NASEM report ultimately decided that, for the time being, heritable genetic engineering of any kind— including CRISPR— was unacceptable.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Plants and Animals</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>The existing public backlash against genetically modified (GMO) plants has been strong, with “non-GMO” being a preferred labeling to many consumers. Public knowledge of genetically modified organisms is low, and it is understandable that such apprehensiveness comes around when it comes to the produce we eat. The current sentiment surrounding the use of CRISPR-edited fruits and animals is much the same as the opinions regarding both human CRISPR gene editing and current GMOs.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>Regulatory Issues</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>The regulatory issues surrounding the regulation and enforcement of genetic engineering are quite expansive, and with the rise of cheap and efficient CRISPR modifications the potential for regulatory problems become more noticeable. The FDA, EPA, and NIH all have regulatory control over the use of CRISPR/Cas9, however some organizations lack the regulatory authority over some research and trials. The United Nations also has a division pertaining towards CRISPR/Cas9 and other genetic engineering experiments, however some countries are not affected by such protocols— like the U.S.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Closing</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>What is most important is public engagement and education about the use of CRISPR gene editing, as well as gene editing as a whole. The ethical concerns of CRISPR/Cas9 are expansive. Never before has such a powerful technology graced the biology field. CRISPR gene editing technology offers unparalleled gene editing that can be passed down through generations for a fraction of the cost of rivaling technologies, all while being more precise, more efficient, and less resource intensive.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>The need for more research into CRISPR cannot be emphasized enough. CRISPR/Cas9 is a technology that will only get more precise, more efficient, and more inexpensive, and the potential for misuse and abuse is too great. CRISPR gene editing is no doubt the future we as a species are heading down; the potential to cure life-long debilitating diseases are incredible. However, it is a future we must tread with caution, for a single misstep could alter our world more than we could ever imagine.</p>
                            <div className="paragraph-spacer"></div>
                            <Canvas>
                                <ambientLight intensity={0.5}></ambientLight>
                                <directionalLight color="red" position={[0, 0, 5]} />
                                <Box/>
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
