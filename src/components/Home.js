import React, { createRef, useEffect, useState } from 'react'
import Page from './Page'
import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import scrollIcon from '../assets/img/scroll.svg'
import './css/Home.css'
import JigglyText from './JigglyText'
import './css/Page.css'

import Cas9IMG from '../assets/img/Cas9_molecule_rendering.jpg'

export default function Home() {

    const [update, setUpdate] = useState(false);

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

        return () => {
            console.log("destroy");
            scroll.destroy();
        };
    }, [locomotiveScrollRef]);

    return (
        <Page>
            <div id="page-home" class="page-inner" ref={locomotiveScrollRef}>
                <div className="page-contents">
                    <motion.div id="landing" variants={{initial:{}, animate:{}, exit:{}}} initial="initial" animate="animate">
                        <div className="divider-container">
                            <motion.div variants={dividerHorzVariant} className="divider-dark divider-horz"></motion.div>    
                        </div>
                        <div className="divider-container">
                            <motion.div variants={dividerHorzVariant} className="divider-dark divider-horz"></motion.div>    
                        </div>
                        <div className="divider-container">
                            <motion.div variants={dividerVertVariant} className="divider-dark divider-vert"></motion.div>    
                        </div>
                        <JigglyText id="landing-header" text={["CRISPR/", "Cas9"]} />
                        <div id="landing-paragraph" data-scroll data-scroll-speed="2" data-scroll-position="top">
                            <motion.p variants={pVariant}>CRISPR/Cas9 has come into public interest in recent years. As a new emerging technology, the potential for growth and positive use is nearly boundless. It offers unrivaled gene editing capabilities, nearly impeccable precision, and the ability to completely change the world around us. However, the public perception of CRISPR gene editing is limited, and this website serves to expand the knowledge of CRISPR gene editing.</motion.p>
                        </div>                        
                        <motion.div variants={scrollIndicatorVariant} id="scroll-indicator" data-scroll data-scroll-speed="1.5" data-scroll-position="top">
                            <motion.span variants={scrollItemVariant}>scroll</motion.span>
                            <motion.div id="scroll-icon" variants={scrollItemVariant}>
                                <img src={scrollIcon} alt="computer mouse svg"></img>
                            </motion.div>
                            <motion.span variants={scrollItemVariant}>down</motion.span>
                        </motion.div>
                    </motion.div>
                    <div id="crispr-definition" className="container">
                        <div className="text-container">
                        <h1 className="heading" data-scroll>WHAT IS CRISPR?</h1>
                        <p className="paragraph" data-scroll>CRISPR, short for Clustered Regularly Interspaced Short Palindromic Repeats, are a family of DNA sequences found inside of prokaryotic organisms. These sequences are derived from DNA fragments of previous invading bacteriophages and make up an acquired immunity system. They are kept inside of the prokaryote in order to fend off from future attacks of the same bacteriophage.</p>
                        <div className="image-container">
                            <img src={Cas9IMG} alt="a" className="container-img" onLoad={()=>setUpdate(true)}/>
                            <div className="image-caption-container">
                                <p className="image-caption">A rendering of a Cas9/gRNA complex linked to a strand of DNA. the Orange molecule is Cas9, the red molecule is the guideRNA, and the blue molecule is the DNA.</p>
                            </div>
                        </div>
                        <p className="paragraph" data-scroll>CRISPR/Cas9 is a technique and technology that allows for the rapid and precise modification of the DNA of a genome in an organism. It is derived from the CRISPR system present in prokaryotes, and uses CRISPR-associated gene 9 (Cas9) to create double strand breaks to DNA at a particular target site.</p>
                        </div>
                    </div>
                    <div id="explore" className="container">
                        
                    </div>
                    <div id="footer" className="text-container">
                        <p className="">Made with ❤️ by Max Myron and Michael Peluso</p>
                    </div>
                </div>
            </div>
        </Page>
    )
}
