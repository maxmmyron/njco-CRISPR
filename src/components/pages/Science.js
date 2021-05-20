import React, { createRef, useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Page from '../Page'
import SubpageHeader from './page_components/SubpageHeader'
import '../css/SubPage.css'

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

    return (
        <Page>
            <div id="page" className="page-inner" data-horizontal={props.horz ? "true" : "false"} data-scroll-container ref={locomotiveScrollRef}>
                <div className="page-contents">
                    <SubpageHeader text={["Science ", "of ", "CRISPR"]} num="01" />
                    <div className="container">
                        <div className="text-container">
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR/Cas9 gene editing in eukaryotic organisms consists of two parts: the Cas9 enzyme, and a guideRNA (gRNA) that guides Cas9 to a target patch of DNA.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Components</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>There are several important components involved throughout the course of altering genomic DNA. To begin, there is the genomic DNA inside of the eukaryotic cell. The focus is on a region of the genomic DNA that has the gene to be targeted and cut, and a protospacer adjacent motif, or PAM.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>There is also a gRNA that interlocks with and helps guide Cas9 to the designated target site. This consists of a nuclease-recruiting sequence, or tracrRNA, which binds with Cas9, and a targeting sequence, or crRNA, which eventually binds to the genomic DNA that is analogous.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>The gRNA’s tracrRNA portion seems to connect back to itself in a series of “stem-loops”. The tracerRNA has one tetraloop, and two or three stem-loops. These loops help to act as stabilizers for the RNA, as well as “guides” for interactions between the tracerRNA and Cas9.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Cas9, or CRISPR-associated gene 9, is what binds to the DNA and gRNA, and is what performs the double-strand break, or DSB, in the DNA. Cas 9 comprises multiple distinct domains that each have a different function over the course of the gene editing process.</p>
                            <table>

                            </table>
                            <h1 className="heading p-scroll-appear" data-scroll>Steps</h1>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>gRNA</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>The guide RNA, or gRNA, is the main RNA sequence that Cas9 interacts with. The gRNA is composed of a nuclease-recruiting sequence (tracrRNA), and a targeting sequence (crRNA).</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>Cas9/gRNA complex</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>When Cas9 finds a guide RNA, the two bind together via Cas9’s REC I domain. After this Cas9 activates and undergoes a major protein restructuring in order to accommodate the target DNA to be found. Once this happens, the gRNA and Cas9 protein create a complex that is able to target and interact with DNA sites.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>DNA Binding</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>The Cas9/gRNA complex is able to bind to a section of DNA using the PAM Interlacing nuclease once it finds a suitable proto-spacer adjacent motif, or PAM. In prokaryotic cells, a PAM is a 2-6 bp-long sequence of DNA from the invading virus that is not found anywhere in the bacteria’s own DNA or CRISPR locus. This prevents Cas9 from destroying the bacteria’s own genome or CRISPR locus.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>The Cas9/gRNA complex will only bind to adjacent targeted DNA sequences if a PAM is present directly after it.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>DSB</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>When the Cas9/gRNA complex spots a suitable PAM, it binds to it using the PAM Interlacing domain, and is then able to unwind the DNA. One the DNA adjacent to the PAM is unwound, Cas9 is able to connect one strand of the double-helix with the crRNA sequence of the gRNA. If the DNA sequence of the genome is correctly and precisely matched with the RNA sequence, then Cas9 will create a double strand break using HNH and RuvC, two nucleases that cut single-stranded DNA, 3-4 bp up from the PAM sequence, directly in the middle of the gene.</p>
                            <h1 className="heading p-scroll-appear" data-scroll>Repair Pathway</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>Once the DNA is cut, our cells have two natural repair pathways in order to repair the DNA, either of which can be used to remove, add, or change gene function.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Non-homologous end joining (NHEJ)</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>Through non-homologous end joining, DNA is simply joined together at the cut location. When a double strand break occurs, NHEJ is the default pathway by which the cell repairs the DNA.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>A DNA DSB is first recognised by Ku70 and Ku80 (commonly referred to as Ku), two proteins that bind to DNA DSB ends. Ku then recruits DNA-dependent protein kinase, catalytic subunit, also known as DNA-PKcs, which are enzymes that help in the NJEH process.</p>
                            <div className="image-container">
                                <img src={img} alt="a" className="container-img" onLoad={()=>setUpdate(true)}/>
                                <div className="image-caption-container">
                                    <p className="image-caption">A diagram of CRISPR/Cas9. Note the difference between an inactive Cas9 protein and an active gRNA-Cas9 complex.</p>
                                </div>
                            </div>
                            <p className="paragraph p-scroll-appear" data-scroll>After this complex is formed, a nuclease called ARTEMIS is recruited by DNA-PKcs, and plays a role in trimming the ends of DNA DSBs. ARTEMIS is phosphorized by DNA-PKcs, after which it may begin trimming off single-stranded DNA tails. If the ends of DNA are clean and compatible with one another, then this process is unnecessary.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Finally, after the ends are compatible and recognized, a complex known as DNA ligase IV is able to repair the two strands together in a process known as ligation.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Homology directed repair (HDR)</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>Through HDR, a DNA snippet with homologous ends and a desired gene trait may be inserted and modeled by the cell in repairing the DNA, allowing researchers to precisely edit and change the functionality of genes through the use of CRISPR/Cas9 and HDR. Unfortunately, this process and its involved proteins, nucleases, and enzymes is not understood extremely well.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>First, The double strand break site as well as regions on either side are degraded by nucleases, to create DNA single-strand tails that are three prime (3’). Then, through a process with recombination proteins, one of the 3’ DNA tails is able to interact and join with a homologous DNA strand inserted previously. As the DNA tail “invades” the homologous DNA, the homologous DNA strand breaks apart, and then rejoins down the strand, forming what is known as a displacement loop (d-loop). After this, The 3’ end of the original DNA tail is able to act as a primer for synthesis based on the homologous DNA.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>This continues down the length of the DNA, until it terminates and is then able to rejoin with the other 3’ DNA tail on the other side of the break. After this, the reconnected DNA strand can synthesize DNA pairs to fully complete the DNA. </p>

                            <div className="container-break" data-scroll data-scroll-speed="1">
                                <img src={img} alt="a" className="container-break-img" onLoad={()=>setUpdate(true)}/>
                                <div className="image-caption-container">
                                    <p className="image-caption">A diagram of CRISPR/Cas9. Note the difference between an inactive Cas9 protein and an active gRNA-Cas9 complex.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
