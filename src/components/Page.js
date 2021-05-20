/**
 * Page.js - a container Class for pages
 */

import { motion } from 'framer-motion'
import React, { Suspense, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./css/Page.css"
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import bModelRight from "../assets/glb/blob_a.glb"

export default function Page(props) {

    const rightRef = useRef(null);
    const menuRef = useRef(null);
    const menuParentRef = useRef(null);
    const menuButtonRef = useRef(null);

    const eases = {
        easeOutQuint: [0.22, 1, 0.36, 1],
        easeInOutQuint: [0.83, 0, 0.17, 1],
        easeInQuint: [0.64, 0, 0.78, 0]
    };

    const [transitionComplete, setTransitionComplete] = useState(false);
    const [menuToggled, setMenuToggle] = useState(false);
    const [menuToggleCount, setMenuToggleCount] = useState(0);

    const menuButtonVariant = {
        initial: {
            borderRadius: "50%",
            translateY: -128
        },
        closed: {
            borderRadius: "50%",
            translateY: 0,
            backgroundColor: "rgba(0, 0, 0, 0.50)",
            transition: {
                duration: menuToggleCount > 0 ? 0.4 : 1.4,
                ease: eases.easeInOutQuint
            }
        },
        animate: {
            borderRadius: "0%",
            translateY: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
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
            display: "flex",
            clipPath: "none",
            backgroundColor: "transparent",
            transition: {
                when: "beforeChildren",
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
            display: "inline-block",
            translateY: ["100%", "0%"],
            transition: {
                duration: 0.8,
                ease: eases.easeInQuint
            }
        },
    };
    
    const BlobModel = ( {model} ) => {
        const gltf = useLoader(GLTFLoader, model);
        const primRef = useRef();

        const obj = gltf.scene;

        obj.traverse((node) => {
            if (!node.isMesh) return;
            node.material.wireframe = true;
          });

        const speed = 0.1;

        useFrame(({ clock }) => {
            primRef.current.rotation.x = clock.getElapsedTime() * speed;
            primRef.current.rotation.y = clock.getElapsedTime() * speed;
            primRef.current.rotation.z = clock.getElapsedTime() * speed;
        });

        return(
            <>
                <primitive ref={primRef} scale={3.5} position={[2, -2, 0]} object={obj} />
            </>
        );
    };

    return (
        <div className="page">
            <header id="page-header">
                <motion.div id="menu" variants={menuVariant} ref={menuParentRef} initial="initial" animate={menuToggled ? "animate" : "initial"}>
                    <motion.div className="menu-piece" id="menu-piece-left" variants={leftVariant}>
                        <Link to="/" id="menu-home-link">
                            {/*<JigglyText text={["Home"]}/>*/}
                            Home
                        </Link>
                        <motion.ul id="menu-list" ref={menuRef} variants={listVariant}>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/history">
                                    {/*<JigglyText text={["CRISPR's ", "History"]}/>*/}
                                    CRISPR's History
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/science">
                                    {/*<JigglyText text={["How ","CRISPR ","Works"]}/>*/}
                                    How CRISPR Works
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/process">
                                    {/*<JigglyText text={["CRISPR ", "in ", "the ", "Lab"]}/>*/}
                                    CRISPR in the Lab
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/applications">
                                    {/*<JigglyText text={["Applications"]}/>*/}
                                    Applications
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/pros-and-cons">    
                                    {/*<JigglyText text={["Pros ","and ","Cons"]}/>*/}
                                    Pros and Cons
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/ethics">
                                    {/*<JigglyText text={["Ethics"]}/>*/}
                                    Ethics
                                </Link>
                                <div className="menu-item-border"/>
                            </motion.li>
                            <motion.li className="menu-item" variants={itemVariant}>
                                <Link to="/pages/citations">
                                    {/*<JigglyText text={["Works ", "Cited"]}/>*/}
                                    Works Cited
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
                    <motion.div className="menu-piece" id="menu-piece-right" variants={rightVariant} ref={rightRef}>
                        <motion.div id="menu-divider" className="divider" variants={dividerVariant}></motion.div>
                        <div className="top-divider-container divider-container">
                            <motion.div className="divider divider-horz" variants={dividerTopVariant}></motion.div>
                        </div>
                        <div className="right-divider-container divider-container">
                            <motion.div className="divider divider-vert divider-right" variants={dividerRightVariant}></motion.div>
                        </div>
                        <motion.p id="credits" variants={creditVariant}>Made with ❤️ By Max Myron and Michael Peluso</motion.p>
                        <div id="canvas-container-right">
                            <Canvas className="canvas">
                                <Suspense fallback={null}>
                                    <BlobModel model={bModelRight}/>
                                    <ambientLight intensity={0.5} />
                                    <directionalLight position={[5,5,5]} intensity={4} color="blue"/>
                                </Suspense>
                            </Canvas>
                        </div>
                    </motion.div>
                </motion.div>
                <button id="menu-button" onClick={()=> {
                    setMenuToggle(!menuToggled); 
                    setMenuToggleCount(menuToggleCount + 1);
                    menuButtonRef.current.classList.toggle("menu-button-opened");
                    menuButtonRef.current.setAttribute('aria-expanded', menuButtonRef.current.classList.contains('opened'))
                }} aria-label="Main Menu" ref={menuButtonRef}>
                    <svg viewBox="0 0 100 100">
                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        
                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
                {/*<motion.div id="menu-button" variants={menuButtonVariant} initial="initial" animate={menuToggled ? "animate" : "closed"}></motion.div>*/}
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
