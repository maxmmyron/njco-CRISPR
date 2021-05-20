import React, { createRef, useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Page from '../Page'
import SubpageHeader from './page_components/SubpageHeader'
import '../css/SubPage.css'

export default function Process(props) {

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
                    <SubpageHeader text={["CRISPR ", "in ", "the ", "Lab"]} num="03"></SubpageHeader>
                    <div className="container">
                        <div className="text-container">
                            <p className="paragraph p-scroll-appear" data-scroll>While most of the CRISPR process transpires within the cell, scientists have plenty of responsibilities to fulfill in order to successfully complete the research. Most of which consists of the preparation and construction of the components being studied. A scientist’s first step begins with pinpointing a precise location on a DNA strand to investigate. No matter the intended outcome, an RNA strand must be constructed and has to be complementary with the target gene. After fabrication of the cargo, a method of cell insertion must be chosen.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Seeking a DNA Strand</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>Choosing a specific target location depends on several factors and how those factors affect cell function. When attempting to change a gene, the chosen codon is vital. The location should be heavily based on protein encoding and protein function. DNA snippets that specify in protein expression are ideal and most likely to leave heavier changes if altered.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Gene selection can be as precise as being within a twenty-three base pair collection sandwiched between two PAM motifs. A protein/RNA complex can be so specifically guided, but even the perfect location has a chance of failure. All phenotypes and unusual details about the gene should be well researched and known before the procedure. CRISPR systems attempting to knock-out genes may fail if another start codon is found downstream. Selecting amino acids too close to the ends of the DNA strand (N- or C- terminus) may also leave the system void.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Cas9 complexes should avoid any DNA snippet that expresses multiple transcripts. A single gene can create splice variants. Because of this, a target site may not be present in the splice variant. If the target site is missing, the experiment can not be completed. A cell’s ploidy level, or number of sets of chromosomes in a cell, should also be taken into consideration. A cell with a higher ploidy level will contain a higher amount of genetic information, and therefore contain more codons and nucleotides. In other words, as the complex is required to sift through a larger sum of DNA, its chance of failure increases.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Selecting a gRNA Sequence</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>After an ideal DNA sequence is located, the next step is to find a complementary RNA sequence that will match with the target DNA. A CRISPR complex will only perform insertion or deletion if the Cas9 protein can correctly detect a DNA snippet with the gRNA. In order to build such a specific sequence, every nucleotide and nucleic acid must be compared and analyzed to find the most efficient and reliable location. Scientists must predict where in the DNA that the target site will have the absolute minimum chance of failure or side effects.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Most of this processing is done by computers using CRISPR-related programs. In-the-field programs may include  “Desktop Genetics”, “Geneious”, “Benching”, and “CRISPR Design (MIT)”. The resultant gRNA sequence will then be saved and sent out for online ordering.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Building the Complex</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>There are two main components making the CRISPR system: the cargo and the vehicle. In simpler terms, the complex comprises the physical component in which is being conveyed and the mobile device or procedure conveying that component. The cargo will usually be dictated by the vehicle method best suited for the experiment. CRISPR cargo may contain different complexes due to the required method of injection or insertion. On the other hand, vehicles are grouped into three categories, incorporating physical, viral, or non viral methods of transportation; each has its strengths and flaws.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>Cargo</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>While this description will not go into detail regarding the specific processes of the cargo, more information on these topics can be found within the Science of CRISPR page. No matter the configuration of the cargo, a gRNA is required. This protein-guiding genetic code acts as a map to locate the target site. Without the map, cell DNA can not be edited. Most cargo systems carry three different variations of synthetic components. These variants will be discussed below.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>One possible cargo configuration consists of a DNA plasmid and gRNA. Plasmids are used to encode the Cas9 protein while the gRNA guides its movement across the DNA. But transcription and translation need to occur before any gene editing takes place. Transcription and translation are processes during cell synthesis which basically use DNA sequences to produce proteins.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR cargo can also include both a gRNA and mRNA strand. The mRNA is used for the translation of the Cas9 protein. In other words, the mRNA is used to build the Cas9 protein while the gRNA is used with that protein. Similar to the previous cargo, the gRNA is useless until both transcription and translation processes have been completed.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>The most effective and efficient methodology is to incorporate ribonucleoproteins as cargo. This type of genetic cargo consists of the gRNA and an RNA-binding Cas9 protein complex. This way, the cell can bypass all transcriptions and translations and instantly begin the DNA editing process. With the Cas9 protein already bound with the gRNA, there is no need to create another protein, and therefore, gene editing can take place instantaneously. Using ribonucleoproteins will cut the experiment duration in half, dramatically reduce its overall toxicity effects, increase its efficiency, and reduce its off-target effects. The Cas9/gRNA complex seems to be the most convenient option.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>Injection Vehicles</h2>
                            <p className="paragraph p-scroll-appear" data-scroll>When deciding how to insert the cargo into a cell, scientists usually chose a methodology out of three major groups including physical, viral vector, and nonviral vector methods. Several methods are discussed below.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Physical vehicles</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>Physical vehicles are generally based on the use of “physical” force and tools to inject the cargo. Some examples of this are microinjection, electroporation, and hydrodynamic injection.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Microinjection has become the “golden standard” for in vitro Cas9/gRNA systems and shows almost perfect efficiency. A needle with a diameter between 0.5 and 5 μm pierces the cell membrane and releases the CRISPR concentration into the nucleus. This method can both bypass all membrane and cytoplasmic barriers as well as escape any weight constrictions, all while being heavily controlled.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Electroporation demonstrates the use of electrical currents on a cellular level. When a current is run through a cell, its membrane permeability increases to allow previously impossible compounds inside. This in vitro method is usually used for larger cell populations, where the injected substance is filled with many complexes in order to reach most of the population. This method could also be paired with nucleofection, which can help open up membrane pores.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Hydrodynamic injection is currently in development, but involves rapidly pushing volumes into an animal's bloodstream to increase the blood pressure, and force the cargo into the cells that they normally could not enter.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Viral vector vehicles</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>Viral vectors allow scientists to use viruses to inject the cargo into the cell. Although viruses may show higher gene delivery, expression, and transduction efficiency, they are believed to be associated with mutagenesis, carcinogenesis, and immunogenicity. Some methods include the use of the adeno-associated virus (AAV) and adenovirus and lentivirus vehicles.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>AAV is a very small, single stranded DNA virus that is presumably harmless and versatile in any specific or nonspecific cells. Adenovirus and lentivirus vehicles are also widely used vehicles for CRISPR research.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Nonviral vector vehicles</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>Nonviral vectors use synthetic ribonucleoproteins, and therefore do not require transcription and translation. They have lower off-target effects, are less toxic, and, unlike viral vectors, do not require viruses. Several methods include the use of lipid- or polymer-based nanocarriers, cell-penetrating peptides, DNA nanoclews, and gold nanoparticles.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Analyzing Results</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
