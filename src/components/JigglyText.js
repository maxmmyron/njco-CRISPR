import React from 'react'
import { motion } from 'framer-motion'

export default function JigglyText(props) {

    const divideText = (text) => {
        let c = [...text];
        return c.map((char, i) => <motion.span className="letter" key={char + i} variants={letterVariant}>{char === ' ' ? '\u00A0' : char}</motion.span>);
    };

    const jigglyVariant = {
        animate: {
            transition: {
                staggerChildren: 0.04
            }
        }
    };

    const letterVariant = {
        initial: { 
            opacity: 0, 
            translateY:64,
            scale: 1.1
        },
        animate: { 
            opacity: 1, 
            translateY:0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.85
            }
        }
    };

    return (
        <motion.span id={props.id} data-scroll-speed="2" data-scroll-position="top" className={props.className} variants={jigglyVariant} data-scroll>
            {props.text.map(text => <span className="text-block">{divideText(text)}</span>)}
        </motion.span>
    )
}
