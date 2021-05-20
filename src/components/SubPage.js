import React, { createRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import Page from './Page'
import { Link } from 'react-router-dom'
import JigglyText from './JigglyText'
import './css/SubPage.css'

export default function SubPage(props) {

    const locomotiveScrollRef = createRef();

    const eases = {
        easeOutQuint: [0.22, 1, 0.36, 1],
        easeInOutQuint: [0.83, 0, 0.17, 1]
    };

    const exitBlockVariant = {
        initial: {
            bottom: 32,
            opacity: 0
        },
        animate: {
            bottom: 0,
            opacity: 1,
            transition: {
                duration: 1.4,
                ease: eases.easeOutQuint
            }
        }
    };

    const dividerHorzVariant = {
        initial: {
            width: "0%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuint
            }
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuint
            }
        }
    };

    const dividerVertVariant = {
        initial: {
            height: "0%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuint
            }
        },
        animate: {
            height: "100%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuint
            }
        }
    };

    const numVariant = {
        initial: {
            opacity: 0,
            bottom: window.innerWidth < 768 ? -256 : -512,
            right: window.innerWidth < 768 ? -256 : -512
        },
        animate: {
            opacity: 0.1,
            bottom: window.innerWidth < 768 ? -64 : -128,
            right: window.innerWidth < 768 ? -64 : -96,
            transition: {
                duration: 1.6,
                ease: eases.easeInOutQuint
            }
        }
    };

    useEffect(() => {
        if(!props.overrideLocomotive) {
            let scroll = new LocomotiveScroll({
                el: locomotiveScrollRef.current,
                smooth: true,
                direction: props.horz ? 'horizontal' : 'vertical'
            });

            return () => {
                scroll.destroy();
            };
        }
    }, [locomotiveScrollRef]);

    return (
        <Page>
            <div id="page" className="page-inner" data-horizontal={props.horz ? "true" : "false"} data-scroll-container ref={locomotiveScrollRef}>
                <div className="page-contents">
                    <div className="page-landing-container">
                        <div className="page-landing">
                            <div className="divider-container">
                                <motion.div variants={dividerVertVariant} className="divider-dark divider-vert"></motion.div>    
                            </div>
                            <div className="divider-container">
                                <motion.div variants={dividerVertVariant} className="divider-dark divider-vert"></motion.div>    
                            </div>
                            <div className="divider-container">
                                <motion.div variants={dividerHorzVariant} className="divider-dark divider-horz"></motion.div>    
                            </div>
                            <div className="divider-container">
                                <motion.div variants={dividerHorzVariant} className="divider-dark divider-horz"></motion.div>    
                            </div>
                            <motion.div variants={exitBlockVariant} className="exit-block">
                                <Link to="/">Home</Link>
                            </motion.div>
                            <JigglyText className="section-header" text={props.text}/>
                            <div className="section-num-container">
                                <motion.span variants={numVariant} data-scroll data-scroll-speed="-1" data-scroll-position="top" className="section-num">{props.num}</motion.span>
                            </div>
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>
        </Page>
    )
}
