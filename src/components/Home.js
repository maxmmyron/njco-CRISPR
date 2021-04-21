import React, { createRef, useEffect } from 'react'
import Page from './Page'
import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import scrollIcon from '../assets/img/scroll.svg'
import './css/Home.css'
import JigglyText from './JigglyText'

export default function Home() {

    const eases = {
        easeOutQuart: [0.22, 1, 0.36, 1],
        easeInOutQuart: [0.83, 0, 0.17, 1]
    };

    const locomotiveScrollRef = createRef();

    const scrollIndicatorVariant = {
        animate: {
            transition: {
                delayChildren: 0.25,
                staggerChildren: 0.15
            }
        }
    };

    const scrollItemVariant = {
        initial: {
            opacity: 0,
            translateY: 24
        },
        animate: {
            opacity: 1,
            translateY: 0,
            transition: {
                duration: 0.8,
                ease: eases.easeOutQuart
            }
        }
    };

    const pVariant = {
        initial: {
            opacity: 0, 
            translateY: 32
        },
        animate: {
            opacity: 1, 
            translateY: 0, 
            transition: {
                duration: 1.4, 
                ease: eases.easeOutQuart
            }
        }
    };

    const dividerHorzVariant = {
        initial: {
            width: "0%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuart
            }
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuart
            }
        }
    };

    const dividerVertVariant = {
        initial: {
            height: "0%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuart
            }
        },
        animate: {
            height: "100%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuart
            }
        }
    };
    
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: locomotiveScrollRef.current,
            smooth: true
        });
    }, [locomotiveScrollRef]);

    return (
        <Page>
            <div id="page-home" class="page-inner" ref={locomotiveScrollRef}>
                <div className="page-contents">
                    <div id="landing">
                        <div className="divider-container">
                            <motion.div variants={dividerHorzVariant} className="divider-dark divider-horz"></motion.div>    
                        </div>
                        <div className="divider-container">
                            <motion.div variants={dividerHorzVariant} className="divider-dark divider-horz"></motion.div>    
                        </div>
                        <div className="divider-container">
                            <motion.div variants={dividerVertVariant} className="divider-dark divider-vert"></motion.div>    
                        </div>
                        <JigglyText id="landing-header" text={["CRISPR/", "Cas9"]}/>
                        <div id="landing-paragraph" data-scroll data-scroll-speed="2" data-scroll-position="top">
                            <motion.p variants={pVariant}>Deutsches Ipsum Dolor quo Schwarzwälder Kirschtorte posidonium Glühwein adhuc schnell sadipscing Currywurst at, Mettwurst mei Weihnachten gloriatur. Eichhörnchen inermis HugoClub Mate accommodare Schnaps Id Audi assum Umsatzanalyse te Die unendliche Geschichte erroribus Reinheitsgebot Nec Deutsche Mark amet Spezi iriure, Weltanschauung gloriatur Michael Schuhmacher ut. Hackfleisch virtute Entschuldigung per Bier At Knappwurst scaevola Weihnachten An Mesut Özil malorum Döner ius</motion.p>
                        </div>                        
                        <motion.div variants={scrollIndicatorVariant} id="scroll-indicator" data-scroll data-scroll-speed="1.5" data-scroll-position="top">
                            <motion.span variants={scrollItemVariant}>scroll</motion.span>
                            <motion.div id="scroll-icon" variants={scrollItemVariant}>
                                <img src={scrollIcon} alt="computer mouse svg"></img>
                            </motion.div>
                            <motion.span variants={scrollItemVariant}>down</motion.span>
                        </motion.div>
                    </div>
                    <div id="crispr-definition">
                        <div data-scroll>
                            <h1 id="def-h1" data-scroll data-scroll-speed="1.25">WHAT IS CRISPR?</h1>
                            <p id="def-p" data-scroll data-scroll-speed="1.25">Deutsches Ipsum Dolor meliore Mozart et HugoClub Mate Te Bildung utamur Lebensabschnittsgefährte Exerci Guten Tag eu Bretzel Principes Deutsche Mark eos Schadenfreude His Apfelstrudel moderatius Frau Professor at Die Ärzte omnis Die unendliche Geschichte epicurei, Deutschland feugait Grimms Märchen ei. Freude schöner Götterfunken purto Sauerkraut te.  Deutsches Ipsum Dolor id Brezel indoctum danke pri, Guten Tag meliore schnell nominavi Die Toten Hosen Elitr Stuttgart nam Eichhörnchen his Juttensack reque Audi assentior. Die unendliche Geschichte principes Handtasche ex Welt Ut Reinheitsgebot solum Spezi quas Glühwein adversarium Hamburg ius, Ampelmännchen minim Riesling eum Doppelscheren-Hubtischwagen</p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
