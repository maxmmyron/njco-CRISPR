/**
 * Page.js - a container Class for pages
 */

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./css/Page.css"
import JigglyText from './JigglyText';

export default function Page(props) {

    const eases = {
        easeOutQuart: [0.22, 1, 0.36, 1],
        easeInOutQuart: [0.83, 0, 0.17, 1]
    };

    const [transitionComplete, setTransitionComplete] = useState(false);
    const [menuToggled, setMenuToggle] = useState(false);
    const [isWorks, setIsWorks] = useState(false);
    const [menuToggleCount, setMenuToggleCount] = useState(0);

    const menuButtonVariant = {
        initial: {
            borderRadius: "50%",
            translateY: -128
        },
        closed: {
            borderRadius: "50%",
            translateY: 0,
            backgroundColor: "#222",
            transition: {
                duration: menuToggleCount > 0 ? 0.4 : 1.4,
                ease: eases.easeInOutQuart
            }
        },
        animate: {
            borderRadius: "0%",
            translateY: 0,
            backgroundColor: "#fff",
            transition: {
                duration: 0.4,
                ease: eases.easeInOutQuart
            }
        },

    };

    const menuVariant = {
        initial: {
            display: "none",
            transition: { when: "afterChildren" }
        },
        animate: {
            display: "flex",
            transition: { when: "beforeChildren" }
        }
    };

    const leftVariant = {
        initial: {
            translateX: "-100%",
            transition: {
                duration: 1.4,
                ease: eases.easeInOutQuart,
            }
        },
        animate: {
            translateX: "0%",
            transition: {
                duration: 1.4,
                ease: eases.easeInOutQuart,
                delayChildren: 0.8
            }
        }
    };

    const rightVariant = {
        initial: {
            translateX: "100%",
            transition: {
                duration: 1.4,
                ease: eases.easeInOutQuart,
            }
        },
        animate: {
            translateX: "0%",
            transition: {
                duration: 1.4,
                ease: eases.easeInOutQuart,
                delayChildren: 0.6
            }
        }
    };

    const listVariant = {
        initial: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        animate: {
            transition: { staggerChildren: 0.175 }
        }
    };

    const itemVariant = {
        initial: {
            transition: {
                staggerChildren: 0.01,
                staggerDirection: -1
            }
        },
        animate: {
            transition: { 
                delay: 1,
                staggerChildren: 0.01 
            }
        }
    };

    const dividerVariant = {
        initial: {
            height: window.innerWidth > 768 ? "0%" : 1,
            width: window.innerWidth > 768 ? 1 : "0%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuart
            }
        },
        animate: {
            height: window.innerWidth > 768 ? "100%" : 1,
            width: window.innerWidth > 768 ? 1 : "100%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuart
            }
        }
    };

    const dividerTopVariant = {
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
                delay: 0.6,
                duration: 0.8,
                ease: eases.easeInOutQuart
            }
        }
    };

    const dividerRightVariant = {
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

    const creditVariant = {
        initial: {
            translateX: 16,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: eases.easeOutQuart
            }
        },
        animate: {
            translateX: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: eases.easeOutQuart
            }
        }
    };

    //initial is shown on page load, animate is unshowing on page load, exit is reshowing on page unmount

    const transVariant = {
        initial: {
            display: "flex"
        },
        animate: {
            display: "none",
            transition: {
                when: "afterChildren",
                staggerChildren: 0.2
            }
        },
        exit: {
            display: isWorks ? "inline-block" : "flex",
            clipPath: isWorks ? ["circle(0px at 50% 50%)", "circle(2000px at 50% 50%)"] : "none",
            backgroundColor: isWorks ? "#222" : "transparent",
            transition: {
                when: isWorks ? "afterChildren" : "beforeChildren",
                staggerChildren: 0.2
            }
        },
    };
    
    const transitionPieceVariant = {
        initial: {
            translateY: "0%"
        },
        animate: {
            translateY: "-100%",
            transition: {
                duration: 1.2,
                when: "beforeChildren"
            }
        },
        exit: {
            display: isWorks ? "none" : "inline-block",
            translateY: ["100%", "0%"],
            transition: {
                duration: isWorks ? 0 : 0.6
            }
        },
    };

    useEffect(() => {
        const menuList = document.getElementById("menu-list");

        menuList.addEventListener("mousemove", e => {
            const pos = {
                x: (e.clientX - menuList.getBoundingClientRect().x - menuList.clientWidth/2) * 0.05, 
                y: (e.clientY - menuList.getBoundingClientRect().y - menuList.clientHeight/2) * 0.05
            };

            document.getElementById("menu-img-container").style.transform = `translateX(${pos.x}px) translateY(${pos.y}px)`;
        });

        menuList.addEventListener("mouseenter", e => {
            document.getElementById("menu-img-container").classList.add("do-show");
        });

        menuList.addEventListener("mouseleave", e => {
            document.getElementById("menu-img-container").classList.remove("do-show");
        });
    });


    
    return (
        <div className="page">
            <header id="page-header">
                <motion.div id="menu" variants={menuVariant} initial="initial" animate={menuToggled ? "animate" : "initial"}>
                    <motion.div className="menu-piece" id="menu-piece-left" variants={leftVariant}>
                        <motion.ul id="menu-list" variants={listVariant}>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/history">
                                    <JigglyText text={["CRISPR's ", "History"]}/>
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant} onClick={()=>setIsWorks(true)}>
                                <Link to="/pages/science">
                                    <JigglyText text={["How ","CRISPR ","Works"]}/>
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/process">
                                    <JigglyText text={["CRISPR ", "in ", "the ", "Lab"]}/>
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/applications">
                                    <JigglyText text={["Applications"]}/>
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/pros-and-cons">    
                                    <JigglyText text={["Pros ","and ","Cons"]}/>
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/ethics">
                                    <JigglyText text={["Ethics"]}/>
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/citations">
                                    <JigglyText text={["Works ", "Cited"]}/>
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                        </motion.ul>
                        <div className="top-divider-container divider-container">
                            <motion.div className="divider divider-horz" variants={dividerTopVariant}></motion.div>
                        </div>
                        <div className="right-divider-container divider-container">
                            <motion.div className="divider divider-vert divider-right" variants={dividerRightVariant}></motion.div>
                        </div>
                    </motion.div>
                    <motion.div className="menu-piece" id="menu-piece-right" variants={rightVariant}>
                        <motion.div id="menu-img-container">
                            <div></div>
                        </motion.div>
                        <motion.div id="menu-divider" className="divider" variants={dividerVariant}></motion.div>
                        <div className="top-divider-container divider-container">
                            <motion.div className="divider divider-horz" variants={dividerTopVariant}></motion.div>
                        </div>
                        <div className="right-divider-container divider-container">
                            <motion.div className="divider divider-vert divider-right" variants={dividerRightVariant}></motion.div>
                        </div>
                        <motion.p id="credits" variants={creditVariant}>Made with ❤️ By Max Myron, Michael Peluso, and Jeremy Peluso</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div id="menu-button" variants={menuButtonVariant} initial="initial" animate={menuToggled ? "animate" : "closed"} onClick={()=> {setMenuToggle(!menuToggled); setMenuToggleCount(menuToggleCount + 1);}}></motion.div>
            </header>
            <motion.div variants={{initial:{}, animate:{}, exit:{}}}  initial="initial" animate={transitionComplete ? "animate" : "initial"} exit="exit">
                {props.children}
            </motion.div>
            
            <motion.div id="page-transition" variants={transVariant} initial="initial" animate="animate" exit="exit" onAnimationComplete={definition => setTransitionComplete(true)}>
                <motion.div className="transition-piece" variants={transitionPieceVariant}></motion.div>
                <motion.div className="transition-piece" variants={transitionPieceVariant}></motion.div>
            </motion.div>
        </div>
    )
}
