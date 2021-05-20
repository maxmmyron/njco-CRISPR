import React, { createRef, useEffect } from 'react'
import locomotiveScroll from 'locomotive-scroll';
import JigglyText from '../JigglyText'
import '../css/History.css'
import '../css/locomotive-scroll.min.css'
import Page from '../Page';
import HistoryItem from './page_components/HistoryItem';

export default function History() {

    const locomotiveScrollRef = createRef();

    useEffect(() => {

        const scroll = new locomotiveScroll({
            el: locomotiveScrollRef.current,
            smooth: true,
            direction: 'horizontal',
            //gestureDirection: 'both',
            tablet: {
                smooth: true,
                direction: 'horizontal',
                horizontalGesture: true
            },
            smartphone: {
                smooth: true,
                direction: 'horizontal',
                horizontalGesture: true
            },
            reloadOnContextChange: true
        });

    }, [locomotiveScrollRef]);

    return (
        <Page>
            <div id="history-scroll-container" data-scroll-container data-direction="horizontal" ref={locomotiveScrollRef}>
                <div id="history-landing" className="scroll-element" data-scroll-section>
                    <JigglyText className="section-header" text={["History ", "of ", "CRISPR"]}/>
                </div>
                <HistoryItem year="1987" headline="1987 - CRISPR first found" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">During a gene analysis of Escherichia coli, Yoshizumi Ishino and fellow researchers from Osaka University uncovered an odd repeating pattern of DNA. Ishino was attempting to analyze purely the genomic contents of the iap gene in E. coli, which is responsible for the conversion of alkaline phosphatase. However, in this pursuit, the replication of the DNA sequence containing the iap gene also included the flanking snippets of DNA immediately surrounding the gene in question.</p>
                    <p className="history-paragraph">In the initial paper, Ishino described an odd pattern in the DNA preceding the iap gene: “An unusual structure was found in the 3'-end flanking region of iap. Five highly homologous sequences 29 nucleotides were arranged as direct repeats with 32 nucleotides as spacing.The first sequence was included in the putative transcriptional termination site and had less homology than the others.”</p>
                    <p className="history-paragraph">While repeated sequences of DNA are nothing new, the ones discovered by the researchers at Osaka University were notable because of the equal spacing separations between them, which was no doubt novel.</p>
                    <p className="history-paragraph">In this paper, Ishino correctly described CRISPRs: short, repeating sequences of DNA separated by spacers of a roughly constant length. While initially only noteworthy as a minor point of lesser intrigue than the original subject matter of the paper, the initial discovery of CRISPR proved to be not the last time it would crop up in academic and scientific curiosity. </p>
                </HistoryItem>
                <HistoryItem year="1991" headline="1991 - CRISPR first utilized" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">Researchers from The Netherlands first utilized CRISPR as a sort of forensic identification method of tuberculosis, in a process they developed called spoligotyping. This process is still used today.</p>
                    <p className="history-paragraph">The researchers were able to recognize the diversity of the DNA repeat sequences that intervened the repeats, and realized it could serve as an important recognition system for identifying tuberculosis.</p>
                </HistoryItem>
                <HistoryItem year="1993" headline="Aug 1993 - CRISPR characterized" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">While the paper published by Yoshizumi Ishino and others was no doubt intriguing and a fascinating look into a previously unexplored avenue of bacterium genome, it was spanish molecular biologist Francisco Mojica that fully explored and reported on the full genomic sequence of CRISPR, and subsequently defined its defining characteristics in what is now described as a CRISPR locus.</p>
                    <p className="history-paragraph">Mojica was exploring the DNA sequences of salt-loving archaea as an investigation into how such microorganisms adapted to changes in salt concentration around them. While sequencing, they came across an interesting sequence of regularly spaced DNA repeats, and searched through older research papers in an attempt to find if their findings were novel. Sure enough, they found the paper published by Osaka University, and knew it was worth investigating.</p>
                    <p className="history-paragraph">Mojica and researchers knew that the size of the genome in prokaryotes is very limited, meaning that the size alone of the repeats they found must have a large significance. Why would such repeats be found if they have no meaning? Likewise, the number of archaea and bacteria these repeats were discovered in were growing. The researchers knew this genomic sequence was not only important due to its size, but its age and prevalence. Archaea and bacteria split long ago, and the fact that the two share the same clustered, palindromic repeats was far too intriguing to not study further.</p>
                </HistoryItem>
                <HistoryItem year="2001" headline="2001 - “CRISPR” term coined" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">Following a joint discussion between Francisco Mojica, Ruud Jansen, and the researchers of the 1991 CRISPR forensic spoligotyping paper, the acronym “CRISPR” was first proposed. Mojica had been referring to the DNA repeats as “SRSRs” or short regularly spaced repeats, and the Netherlands researchers had labeled them as “DRs” or direct repeats. They both were longing for a term that would adequately describe what they uncovered, while also being universal among future research. “CRISPR”, which had elements of both of these initial terms, became the standard nomenclature.</p>
                    <p className="history-paragraph">In April of 2002, Jansen first used the acronym CRISPR in a research paper regarding an analysis of several CRISPR loci present in both bacteria and archaea. This paper further solidified the potential for CRISPR, as well as the characteristics of CRISPR.</p>
                    <p className="history-paragraph">As described in the paper, CRISPR consisted of “direct repeats, varying in size from 21 to 37 bp, interspaced by similarly sized non-repetitive sequences”, and were “flanked on one side by a common leader sequence of 300-500 b.” Jansen also analyzed that such CRISPR loci were similar in specimens of the same species, but dissimilar when compared to other species that also had a CRISPR locus.</p>
                </HistoryItem>
                <HistoryItem year="2005" headline="2005 - Bacteriophage linked to CRISPR" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">In 2005, Francisco Mojica and researchers from The Divisón de Microbiología at the University of Alicante found a link between the CRISPR space sequences and the chromosomal genetic material of bacteriophages.</p>
                    <p className="history-paragraph">This link, as Mojica postulated, implied “a relationship between CRISPR and immunity against targeted DNA,” and was the first such identification of CRISPR as a primitive immune system for bacteria and archaea.</p>
                </HistoryItem>
                <HistoryItem year="2007" headline="2007 - CRISPR functionality showcased" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">In 2007, Philippe Horvath and other researchers were able to demonstrate and prove experimentally that the CRISPR system was indeed an adaptive immune system. </p>
                    <p className="history-paragraph">The researchers were able to simulate a bacteriophage attack against a colony of S. thermophilus, a bacteria common in yogurt and other milk products. During this attack the researchers were able to observe bacteriophage genetic material enter a bacterium. However, instead of killing the bacterium, the genetic material was intercepted, neutralized, and then integrated into the bacterium’s own genetic material within the CRISPR locus.</p>
                    <p className="history-paragraph">Such a discovery was revolutionary, as it proved experimentally that bacteria, despite their simple makeup and limited genetic space, were capable of adaptive immunity to outside attackers, and were even able to fend off from such attackers in the future much like our own immune system.</p>
                </HistoryItem>
                <HistoryItem year="2008" headline="2008 - RNA transcription observed" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph"></p>
                </HistoryItem>
                <HistoryItem year="2011" headline="2011 - Heterologous functionality proven" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">In 2011, Virginijus Šikšnys and other researchers from Vilnius University in Lithuania proved that the CRISPR/Cas systems were robust enough to be taken out of one species of bacteria and placed into another.</p>
                    <p className="history-paragraph">In the paper, Siksnys successfully removed the CRISPR loci from Streptococcus thermophilus, and placed it into the genome of Escherichia coli. The paper then demonstrated that the CRISPR/Cas system placed into E. coli still performed against bacteriophage attacks.</p>
                    <p className="history-paragraph">Such a discovery was significant, as it showed that CRISPR could be utilized throughout species, further paving the way for future use in eukaryotic, and eventually human, cells.</p>
                </HistoryItem>
                <HistoryItem year="2012" headline="2012 - Proposal for gene editing" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">In 2012, Jennifer Doudna and Emanuelle Charpentier introduced a proposal that, for the first time ever, formally described how CRISPR/Cas9 could be programmed with guide RNA to cut and edit different parts of a genome.</p>
                    <p className="history-paragraph">In the paper, published in Science in 2012, Doudna and Charpentier were able to isolate the components of CRISPR, adapt them to function in vitro, and subsequently reported the possibility of reprogramming the system to work with synthesized guideRNA to cut isolated DNA.</p>
                    <p className="history-paragraph">By using a chimera of both crRNA and tracrRNA, a single, synthetic guideRNA could be created with absolute ease that fully worked with CRISPR/Cas9. This guideRNA, as shown by Doudna and Charpentier, could guice the CRISPR/Cas9 system to any DNA, and cut it out.</p>
                    <p className="history-paragraph">Jennifer Doudna and Emanuelle Charpentier were able to successfully isolate and adapt the CRISPR/Cas9 system to work in vitro, simplified the process by which it works by first demonstrating that both a crRNA and tracrRNA were required then combining the two into a single guide RNA, and proved that the CRISPR/Cas9 system could be reprogrammed to cut out any DNA they desired. Even before the demonstration of this technology on eukaryotic cells was experimentally proven, the outcome of this discovery was beyond significant.</p>
                </HistoryItem>
                <HistoryItem year="2013" headline="2013 - Eukaryotic edits proven" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">In 2013, eukaryotic genome editing using CRISPR/Cas9 was successfully proven.</p>
                </HistoryItem>
                <HistoryItem year="2015" headline="2015 - Human embryos & CRISPR" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">In 2015, Puping Liang and other researchers from China reported the first ever use of CRISPR/Cas9 gene editing on human embryos. The editing took place on non-viable human embryos that had been fertilized by two sperm cells instead of only one, and the team demonstrated that embryos could be edited in the first place.</p>
                    <p className="history-paragraph">The researchers were able to successfully edit the genome of the embryos to combat an often fatal blood disease known as beta-thalassemia.</p>
                    <p className="history-paragraph">While no doubt a landmark paper, it was met with much criticism and condemnation by other scientific organizations. Such editing of human embryos has long been a point of scientific controversy, as the potential for “designer babies” too great considering the current day lack of overall regulations.</p>
                </HistoryItem>
                <HistoryItem year="2016" headline="2016 - Governmental approval" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">In 2016, The UK Human Fertilization and Embryology Authority authorized a study by Kathy Niakan of the Francis Crick Institute to edit viable human embryos. As part of the approval process, Niakan and the researchers agreed to destroy the viable human embryos within a week of the study being conducted.</p>
                    <p className="history-paragraph">Niakan planned to study the reasons behind successful pregnancies by studying the clump of cells, around 20-100 in size, immediately after fertilization and before the embryo attaches itself to the wall of the womb.</p>
                </HistoryItem>
                <HistoryItem year="2020" headline="2020 - CRISPR Nobel Prize awarded" imgsrc="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgalt="abc">
                    <p className="history-paragraph">In 2020, following the culmination of decades of research by hundreds of researchers and scientists, Jennifer Doudna and Emanuelle Charpentier were jointly awarded the Nobel Prize in Chemistry for their work regarding CRISPR/Cas9 gene editing.</p>
                </HistoryItem>
                <div data-scroll-section className="scroll-element" id="end-spacer"/>
            </div>
        </Page>
    )
}
