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
        easeOutQuint: [0.22, 1, 0.36, 1],
        easeInOutQuint: [0.83, 0, 0.17, 1],
        easeInQuint: [0.64, 0, 0.78, 0]
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
                ease: eases.easeInOutQuint
            }
        },
        animate: {
            borderRadius: "0%",
            translateY: 0,
            backgroundColor: "#fff",
            transition: {
                duration: 0.4,
                ease: eases.easeInOutQuint
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
                ease: eases.easeInOutQuint,
            }
        },
        animate: {
            translateX: "0%",
            transition: {
                duration: 1.4,
                ease: eases.easeInOutQuint,
                delayChildren: 0.8
            }
        }
    };

    const rightVariant = {
        initial: {
            translateX: "100%",
            transition: {
                duration: 1.4,
                ease: eases.easeInOutQuint,
            }
        },
        animate: {
            translateX: "0%",
            transition: {
                duration: 1.4,
                ease: eases.easeInOutQuint,
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
                ease: eases.easeInOutQuint
            }
        },
        animate: {
            height: window.innerWidth > 768 ? "100%" : 1,
            width: window.innerWidth > 768 ? 1 : "100%",
            transition: {
                duration: 0.8,
                ease: eases.easeInOutQuint
            }
        }
    };

    const dividerTopVariant = {
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
                delay: 0.6,
                duration: 0.8,
                ease: eases.easeInOutQuint
            }
        }
    };

    const dividerRightVariant = {
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

    const creditVariant = {
        initial: {
            translateX: 16,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: eases.easeOutQuint
            }
        },
        animate: {
            translateX: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: eases.easeOutQuint
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
                duration: 0.8,
                when: "beforeChildren",
                ease: eases.easeOutQuint
            }
        },
        exit: {
            display: isWorks ? "none" : "inline-block",
            translateY: ["100%", "0%"],
            transition: {
                duration: isWorks ? 0 : 0.8,
                ease: isWorks ? eases.easeOutQuint : eases.easeInQuint
            }
        },
    };

    let lastMouse = {
        x: 0,
        y: 0
    };

    let mouseTravel = {
        x: 0,
        y: 0
    };

    let timestamp = Date.now();
    let now;


    useEffect(() => {
        const menuList = document.getElementById("menu-list");

        menuList.addEventListener("mousemove", e => {
            
            now = Date.now();

            let dt = now - timestamp;

            let mouse = {
                x: e.pageX,
                y: e.pageY
            };

            mouseTravel.x = -(mouse.x - lastMouse.x) / dt / 4;
            mouseTravel.y = -(mouse.y - lastMouse.y) / dt / 4;

            timestamp = now;

            lastMouse.x = mouse.x;
            lastMouse.y = mouse.y;

            const pos = {
                x: (e.clientX - menuList.getBoundingClientRect().x - menuList.clientWidth/2) * 0.05, 
                y: (e.clientY - menuList.getBoundingClientRect().y - menuList.clientHeight/2) * 0.05
            };

            document.getElementById("menu-img-container").style.transform = `translate(${pos.x}px, ${pos.y}px) skew(${mouseTravel.x}deg, ${mouseTravel.y}deg)`;
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
                        <Link to="/" id="menu-home-link">
                            <JigglyText text={["Home"]}/>
                        </Link>
                        <svg className="menu-blob-container" id="menu-blob-left-container" viewBox="0 0 960 960" width="960" height="100%">
                            <g>
                                <path className="menu-blob" d="M455.3 -794.8C590.2 -710.7 700 -589.1 782.6 -450.4C865.2 -311.7 920.6 -155.8 910.8 -5.7C900.9 144.5 825.9 289 734.8 413C643.7 537 536.6 640.4 411.5 717C286.3 793.6 143.2 843.3 -0.5 844.2C-144.2 845 -288.3 797.1 -407 716.7C-525.6 636.4 -618.7 523.7 -686.7 398.9C-754.6 274 -797.3 137 -795.6 1C-793.8 -135 -747.7 -270 -697.7 -425.9C-647.7 -581.8 -593.8 -758.5 -476.9 -853C-360 -947.5 -180 -959.8 -9.9 -942.6C160.2 -925.4 320.3 -878.8 455.3 -794.8" fill={isWorks ? "#444444" : "#34a0de"} />
                            </g>
                        </svg>
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
                        <svg className="menu-blob-container" id="menu-blob-right-container" viewBox="0 0 960 960" width="960" height="100%">
                            <g transform="translate(1080 720)">
                                <path className="menu-blob" d="M242.4 -469.8C316 -377.3 378.8 -316.1 461.1 -243.1C543.4 -170 645.2 -85 671.3 15.1C697.5 115.2 647.9 230.3 574.9 319.5C501.9 408.7 405.5 472 305.7 527.1C206 582.1 103 629.1 1.6 626.3C-99.8 623.6 -199.7 571.2 -280.8 505.3C-361.9 439.5 -424.3 360.2 -464.4 273.8C-504.5 187.3 -522.2 93.7 -530 -4.5C-537.8 -102.7 -535.6 -205.3 -512.6 -321.4C-489.6 -437.4 -445.8 -566.9 -356.9 -650.5C-268 -734.2 -134 -772.1 -24.8 -729.1C84.4 -686.1 168.8 -562.3 242.4 -469.8" fill={isWorks ? "#444444" : "#34a0de"} />
                            </g>
                        </svg>
                        <motion.div id="menu-img-container">
                            <div id="menu-img"/>
                        </motion.div>
                        <motion.div id="menu-divider" className="divider" variants={dividerVariant}></motion.div>
                        <div className="top-divider-container divider-container">
                            <motion.div className="divider divider-horz" variants={dividerTopVariant}></motion.div>
                        </div>
                        <div className="right-divider-container divider-container">
                            <motion.div className="divider divider-vert divider-right" variants={dividerRightVariant}></motion.div>
                        </div>
                        <motion.p id="credits" variants={creditVariant}>Made with ❤️ By Max Myron and Michael Peluso</motion.p>
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
