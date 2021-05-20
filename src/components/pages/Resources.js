import React, { createRef, useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Page from '../Page'
import SubpageHeader from './page_components/SubpageHeader'
import '../css/SubPage.css'

import img from '../../assets/img/pexels_orange.jpeg'

export default function SubPage(props) {

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
                    <SubpageHeader text={["Resources"]} num="06"></SubpageHeader>
                    <div className="container">
                        <div className="text-container">
                            <h1 className="heading p-scroll-appear" data-scroll>Text Resources</h1>
                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“Addgene: CRISPR Guide.” CRISPR Guide, www.addgene.org/guides/crispr. Accessed 30 Mar. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Barrangou, R., et al. “CRISPR Provides Acquired Resistance Against Viruses in Prokaryotes.” Science, vol. 315, no. 5819, 2007, pp. 1709–12. Crossref, doi:10.1126/science.1138140.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Brokowski, Carolyn, and Mazhar Adli. “CRISPR Ethics: Moral Considerations for Applications of a Powerful Tool.” Journal of Molecular Biology, vol. 431, no. 1, 2019, pp. 88–101. Crossref, doi:10.1016/j.jmb.2018.05.044.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Callaway, Ewen. “Doubts Raised about CRISPR Gene-Editing Study in Human Embryos.” Nature News & Comment, 31 Aug. 2017, www.nature.com/news/doubts-raised-about-crispr-gene-editing-study-in-human-embryos-1.22547?utm_medium=affiliate&utm_source=commission_junction&utm_campaign=3_nsn6445_deeplink_PID100044684&utm_content=deeplink.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“CRISPR 101: Non-Homologous End Joining.” Addgene Blog, blog.addgene.org/crispr-101-non-homologous-end-joining. Accessed 30 Mar. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“CRISPR Timeline.” Broad Institute, 7 Dec. 2018, www.broadinstitute.org/what-broad/areas-focus/project-spotlight/crispr-timeline.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Crossley, Merlin. “What Is CRISPR Gene Editing, and How Does It Work?” The Conversation, 31 Jan. 2018, theconversation.com/what-is-crispr-gene-editing-and-how-does-it-work-84591.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Dotzert, Michelle. “A Timeline of the CRISPR/Cas System.” Lab Manager, 26 Nov. 2020, www.labmanager.com/technology/a-timeline-of-the-crispr-cas-system-24342. Accessed 22 Mar. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Fajrial, Apresio K., et al. “A Review of Emerging Physical Transfection Methods for CRISPR/Cas9-Mediated Gene Editing.” Theranostics, vol. 10, no. 12, 2020, pp. 5532–49. Crossref, doi:10.7150/thno.43465.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“Future of CRISPR - Benefits of Gene Editing.” Futurism, 30 Jan. 2018, futurism.com/crispr-genetic-engineering-change-world.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Galeon, Dom. “First U.S. Human Embryo Gene Editing Experiment Successfully ‘Corrects’ a Heart Condition.” Futurism, 2 Aug. 2017, futurism.com/first-u-s-human-embryo-gene-editing-experiment-successfully-corrects-a-heart-condition.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Garrity, Anthony, and Cavanagh. “CRISPR Mechanism.” CRISPR/Cas9, Tufts University, 2014, sites.tufts.edu/crispr/crispr-mechanism.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Han, Gloria, and Xuanzhu (Claire) Zhou. “Viral or Nonviral: Which Is Better for CRISPR-Based Therapies?” GEN - Genetic Engineering and Biotechnology News, Genetic Engineering & Biotechnology News, 13 Oct. 2020, www.genengnews.com/insights/viral-or-nonviral-which-is-better-for-crispr-based-therapies.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Hempstead, Andrew. “CRISPR 101: Ribonucleoprotein (RNP) Delivery.” Addgene Blog, Addgene, 6 Sept. 2018, blog.addgene.org/crispr-101-ribonucleoprotein-rnp-delivery.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Holdren, John. “A Note on Genome Editing.” Whitehouse.Gov, 12 Aug. 2015, obamawhitehouse.archives.gov/blog/2015/05/26/note-genome-editing.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“How To Design Guide RNA for CRISPR.” Full Stack Genome Engineering, Synthego, 2021, www.synthego.com/guide/how-to-use-crispr.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“How to Design SgRNA Sequences.” How to Design SgRNA Sequences, www.takarabio.com/learning-centers/gene-function/gene-editing/gene-editing-tools-and-information/how-to-design-sgrna-sequences. Accessed 29 Mar. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“How to Perform Successful CRISPR Experiments.” Biolegio, Synthego, 15 Dec. 2016, www.biolegio.com/media/4148/how-to-perform-successful-crispr-experiments.pdf. </p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Ishino, Y, et al. “Nucleotide Sequence of the Iap Gene, Responsible for Alkaline Phosphatase Isozyme Conversion in Escherichia Coli, and Identification of the Gene Product.” Journal of Bacteriology, vol. 169, no. 12, 1987, pp. 5429–33. Crossref, doi:10.1128/jb.169.12.5429-5433.1987.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Ishino, Yoshizumi, et al. “History of CRISPR-Cas from Encounter with a Mysterious Repeated Sequence to Genome Editing Technology.” Journal of Bacteriology, edited by William Margolin, vol. 200, no. 7, 2018. Crossref, doi:10.1128/jb.00580-17.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Jansen, Ruud., et al. “Identification of Genes That Are Associated with DNA Repeats in Prokaryotes.” Molecular Microbiology, vol. 43, no. 6, 2002, pp. 1565–75. Crossref, doi:10.1046/j.1365-2958.2002.02839.x.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Jiang, Fuguo, and Jennifer A. Doudna. “CRISPR–Cas9 Structures and Mechanisms.” Annual Review of Biophysics, vol. 46, no. 1, 2017, pp. 505–29. Crossref, doi:10.1146/annurev-biophys-062215-010822.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Jinek, M., et al. “A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity.” Science, vol. 337, no. 6096, 2012, pp. 816–21. Crossref, doi:10.1126/science.1225829.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Karginov, Fedor V., and Gregory J. Hannon. “The CRISPR System: Small RNA-Guided Defense in Bacteria and Archaea.” Molecular Cell, vol. 37, no. 1, 2010, pp. 7–19. Crossref, doi:10.1016/j.molcel.2009.12.033.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Lander, Eric S. “The Heroes of CRISPR.” Cell, vol. 164, no. 1–2, 2016, pp. 18–28. Crossref, doi:10.1016/j.cell.2015.12.041.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Liang, Puping, et al. “CRISPR/Cas9-Mediated Gene Editing in Human Tripronuclear Zygotes.” Protein & Cell, vol. 6, no. 5, 2015, pp. 363–72. Crossref, doi:10.1007/s13238-015-0153-5.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Lino, Christopher A., et al. “Delivering CRISPR: A Review of the Challenges and Approaches.” Taylor & Francis Online, Drug Delivery, 12 Feb. 2018, www.tandfonline.com/doi/full/10.1080/10717544.2018.1474964. </p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Mah, Amanda. “Full Stack Genome Engineering.” Synthego, www.synthego.com/blog/crispr-agriculture-foods. Accessed 18 May 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>McDade, Joel. “The PAM Requirement and Expanding CRISPR Beyond SpCas9.” Addgene Blog, 20 Aug. 2020, blog.addgene.org/the-pam-requirement-and-expanding-crispr-beyond-spcas9.</p>
                            
                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Mojica, Francisco J. M., et al. “Intervening Sequences of Regularly Spaced Prokaryotic Repeats Derive from Foreign Genetic Elements.” Journal of Molecular Evolution, vol. 60, no. 2, 2005, pp. 174–82. Crossref, doi:10.1007/s00239-004-0046-3.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>National Academies of Sciences, Engineering, and Medicine, et al. Human Genome Editing: Science, Ethics, and Governance. Illustrated, National Academies Press, 2017.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Nature Editorial. “Pioneers of Revolutionary CRISPR Gene Editing Win Chemistry Nobel.” Nature, 7 Oct. 2020, www.nature.com/articles/d41586-020-02765-9?error=cookies_not_supported&code=aea6feba-fb71-4b12-846a-9bcadbaf07c7.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>NHGRI. “The Cost of Sequencing a Human Genome.” Genome.Gov, 13 Mar. 2019, www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“Nobel Prizes 2020.” NobelPrize.Org, www.nobelprize.org/prizes/chemistry/2020/press-release. Accessed 22 Mar. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Page, Michael Le. “Three People with Inherited Diseases Successfully Treated with CRISPR.” New Scientist, 12 June 2020, www.newscientist.com/article/2246020-three-people-with-inherited-diseases-successfully-treated-with-crispr.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Palmer, Chris. “Antiretroviral Therapy Combined With CRISPR Gene Editing Can Eliminate HIV Infection in Mice.” National Institute on Drug Abuse, 14 Feb. 2020, www.drugabuse.gov/news-events/nida-notes/2020/02/antiretroviral-therapy-combined-crispr-gene-editing-can-eliminate-hiv-infection-in-mice.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Ran, F. Ann, et al. “Genome Engineering Using the CRISPR-Cas9 System.” Nature Protocols, vol. 8, no. 11, 2013, pp. 2281–308. Crossref, doi:10.1038/nprot.2013.143.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Ryan, Jackson. “Using CRISPR to Resurrect the Dead.” CNET, 19 June 2019, www.cnet.com/features/using-crispr-to-resurrect-the-dead.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Shwartz, Mark. “CRISPR Is a Gene-Editing Tool That’s Revolutionary, Though Not without Risk.” Stanford Medicine, stanmed.stanford.edu/2018winter/CRISPR-for-gene-editing-is-revolutionary-but-it-comes-with-risks.html. Accessed 7 Apr. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Speicher, Nolan. “CRISPR Genome Editing: 5 Considerations for Target Site Selection.” Integrated DNA Technologies, 18 Aug. 2016, www.idtdna.com/pages/education/decoded/article/crispr-genome-editing-5-considerations-for-target-site-selection. </p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“Synthego | Full Stack Genome Engineering.” Importance of the PAM Sequence in CRISPR Experiments, www.synthego.com/guide/how-to-use-crispr/pam-sequence. Accessed 29 Mar. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“The Sciences, Places and People That Have Created Biotechnology.” WhatisBiotechnology.Org, www.whatisbiotechnology.org/index.php/timeline/science/CRISPR-Cas9. Accessed 22 Mar. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>“What Are Genome Editing and CRISPR-Cas9?: MedlinePlus Genetics.” What Are Genome Editing and CRISPR-Cas9?, medlineplus.gov/genetics/understanding/genomicresearch/genomeediting. Accessed 23 Mar. 2021.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Yang, Kai, et al. “Non-Homologous End Joining: Advances and Frontiers.” Acta Biochimica et Biophysica Sinica, vol. 48, no. 7, 2016, pp. 632–40. Crossref, doi:10.1093/abbs/gmw046.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Zhang, F., et al. “CRISPR/Cas9 for Genome Editing: Progress, Implications and Challenges.” Human Molecular Genetics, vol. 23, no. R1, 2014, pp. R40–46. Crossref, doi:10.1093/hmg/ddu125.</p>

                            <p className="paragraph p-citation p-scroll-appear" data-scroll>Zhu, Haocheng, et al. “Applications of CRISPR–Cas in Agriculture and Plant Biotechnology.” Nature Reviews Molecular Cell Biology, vol. 21, no. 11, 2020, pp. 661–77. Crossref, doi:10.1038/s41580-020-00288-9.</p>
                                                        
                            <h1 className="heading p-scroll-appear" data-scroll>Image Credits</h1>
                            <div className="image-container" data-scroll data-scroll-speed="1.5">
                                <img src={img} alt="a" className="container-img" onLoad={()=>setUpdate(true)}/>
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
