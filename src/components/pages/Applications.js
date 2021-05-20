import React, { createRef, useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Page from '../Page'
import SubpageHeader from './page_components/SubpageHeader'
import '../css/SubPage.css'

export default function Applications(props) {

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
                    <SubpageHeader text={["Applications"]} num="03"></SubpageHeader>
                    <div className="container">
                        <div className="text-container">
                            <p className="paragraph p-scroll-appear" data-scroll>Since the inception of its use, CRISPR/Cas9 has proven itself useful in many different applications and is proving itself to be equally useful in future endeavours. The ability to make widespread and precise genomic edits is a huge leap forward in the realm of genetic engineering and has many applications ranging from small-scale edits to individual bacterium to the wide-spread engineering of nearly everything and anything with a cell nucleus organelle.</p>
                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Current Applications</h1>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>Humans</h2>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Inherited diseases</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR is also shaping up to be a game changer in considerably improving the lives of people with inherited diseases. In 2020, CRISPR was used to successfully treat three people with inherited  diseases— two with beta thalassaemia and one with sickle cell disease. Beta thalassaemia and sickle cell disease are diseases that affect red blood cells, and individuals with such diseases require regular blood transfusions in order to survive.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>In the trial, CRISPR was used to modify the stem cells inside of the patients’ bone marrow, which produces red blood cells. CRISPR was able to modify a gene in the stem cells that disabled the production of fetal hemoglobin, which is a known treatment for blood diseases like sickle cell disease. Following this, researchers were able to kill off the original stem cells using chemotherapy, leaving only the CRISPR-modified stem cells that produced fetal hemoglobin. Following this procedure, the patients were no longer required to have blood transfusions within 15 months.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>CRISPR target detection</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR has been used recently in order to detect viral DNA inside of a host body, which allows for more accurate diagnosis of infections. Similar to how CRISPR naturally works in prokaryotic cells, CRISPR/Cas9 is able to detect the viral DNA. This has been used to help detect viral agents that could cause cancer.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>COVID rapid diagnostic test</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>The use of CRISPR-based diagnostic tests have been approved by the FDA for rapid diagnosis of COVID-19. Such a test system is immensely helpful due to the previously existing gap in required reagents for PCR-based tests, meaning CRISPR-based RDTs can play a large role in helping save many lives by diagnosing COVID-19 in people faster than the slower, more traditional tests.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Experimental somatic engineering</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>In 2015, following a voluntary global moratorium of CRISPR gene editing on human embryos, scientists from the Guangdong Province Key Laboratory of Reproductive Medicine published a paper announcing the first demonstration of gene editing on Tripronuclear zygotes. Tripronuclear zygotes are egg cells fertilized with two sperm cells, which are almost always nonviable and do not develop into fetuses.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>The researchers were able to cleave the the 𝛃-globin gene (HBB), a gene located in chromosome 11. This gene is responsible for the production of hemoglobin. The team found that, while the cells did take up the gRNA and Cas9 protein RNA and began to function properly, the overall success throughout the entire colony was mixed. Some cells edited the HBB gene and others did not, meaning that the embryos were mosaic. The team also found that off-target cleavage occurred often enough to be of significance, and noted that the efficiency of HDR was quite low.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>Plants</h2>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Produce improvements</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>There have been several new developments in the way of produce-based CRISPR genetic engineering, many of which help to improve the growth rates, yields, and overall appeal of fruits, vegetables, and other produce.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Tomatoes have been the focus of two primary CRISPR research projects. Both of these help to increase the overall size of the fruit, as well as other factors, like the size of the plant, fruit production, plant structure, and plant survivability rate. CRISPR has also been used to improve the taste of tomatoes, as their flavor has been pushed to the wayside in favor of evenly-ripening tomatoes.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Likewise, current CRISPR efforts on mushrooms have been primarily focused on the button mushroom, in order to prevent browning, and elongating the shelf life. CRISPR targets and deactivates a small family of genes that creates polyphenol oxidase, which is an enzyme involved in the browning of plants, vegetables, and fungi. Currently, this edited button mushroom has been approved by the USDA to be sold without regulations. It is only awaiting approval from the FDA before being sold in stores.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR/Cas9 gene editing has also been used recently to improve rice crop yields. Rice is a staple food group for billions of people, and has many other produce and manufacturing purposes. Being able to increase production within the same area is important as humans expand and urbanize the world. CRISPR has been used to edit a family of genes involved in sensing amounts of abscisic acid, which is produced during plant growth and stress.</p>

                            <div className="paragraph-spacer"></div>
                            <h1 className="heading p-scroll-appear" data-scroll>Future Applications</h1>
                            <p className="paragraph p-scroll-appear" data-scroll>As with many emerging technologies, the future possibilities are infinite. However, where CRISPR/Cas9 differs from other emerging and trial technologies is that CRISPR/Cas9 capabilities and limitations are well understood. Unlike technology like artificial intelligence, the limitations and capabilities are nearly pure speculation; we don’t know how far AI can go, and how much longer it will take to grow. However, CRISPR/Cas9 is a biological agent that has slowly, yet surely, evolved over millions of years. It isn’t going to (and doesn’t need to) change much more in order to better meet the needs of researchers. Future applications of CRISPR/Cas9 are only on the horizon due to commercialization and ethics issues, rather than proof-of-concept issues.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>Humans</h2>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Preventing inheritable diseases</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>A primary potential use of CRISPR in the near future is genetically modifying the genomes of human embryos in order to prevent wipe out genetic disorders like Down syndrome, Amyotrophic Lateral Sclerosis (ALS), and Cystic Fibrosis, to name a few. Likewise, CRISPR, with its surgical precision, may one day help to disable and replace erroneous genes inside of a living organism, preventing untold amounts of pain, suffering, and early deaths.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Viral and infectious diseases</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR has the ability to edit cells such that they become incompatible to viral and infectious agents, like HIV. In the case of viral agents, which inject their own DNA into our cell’s genome, CRISPR has the ability to cut out the viral DNA. After this, standard DNA DSB repair can take place via the NHEJ pathway.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Likewise, CRISPR could also entirely remove the ability for HIV to even infect humans in the first place. CRISPR targets and deactivates the CCR5 gene, a gene that encodes the protein instructions for a co-receptor on white blood cells. Consequently, HIV becomes unable to infect T cells (a special kind of white blood cell), because of the lack of a CCR5 co-receptor.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Cancer</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>As the second leading cause of death in the world, cancer is a large focus of current immunology research. Cancer cells are able to turn off tumor suppressors, produce drug resistance, and activate proto-oncogenes (a gene that actively aids a cancer cell like rapid cell division), all of which further a cancer’s chances at dominating the host body.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR/Cas9 has the ability to stop this, by fixing the cancerous genomes and hurting the cancer’s chances at survival. CRISPR can also create special T cells tailored to individual patients that are designed to seek out the expressed antigens on a patient’s cancer cells. This leads to much more effective treatment of cancer, allowing fast, efficient, and safe treatment and recovery.</p>
                            <h2 className="sub-heading p-scroll-appear" data-scroll>Plants & Animals</h2>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Plant resistance</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR has valuable applications in the agricultural sector in modifying plants to be able to resist diseases, fungi, and natural pests, without needing to use expensive pesticides and herbicides. Such gene editing could allow for more biodiversity in under-diverse ecosystems.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Plant perfection</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>The use of CRISPR systems to modify the genome of plants can allow for greater relative crop yield, heat and cold resistance, and better quality, among others, is a real possibility on the brink of commercialization. In 2018, the USDA deregulated genetically edited crops, and confirmed that they were just as safe as any other non-edited crops.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Resurrection of extinct species</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>Because of the similarities between species within many different taxonomic genuses and families, The possibility of resurrecting species using CRISPR is a real thing that could be done. Using DNA snippets from the extinct species, researchers can create gene knock-ins and knock-outs to turn on and of the precise genes in order to most closely match an extant species’ DNA with the extinct species’ DNA.</p>
                            <h3 className="sub-sub-heading p-scroll-appear" data-scroll>Neutralization of invasive and parasitic species</h3>
                            <p className="paragraph p-scroll-appear" data-scroll>CRISPR could be used to neutralize parasitic species that affect humans, like ringworm and malaria. Such could be done not by directly editing the parasite’s genome, but that of the carrier, like in the case of malaria. CRISPR gene editing could be used to make mosquitoes an incompatible carrier of malaria, meaning that mosquitoes would no longer be able to carry malaria.</p>
                            <p className="paragraph p-scroll-appear" data-scroll>Malaria and other mosquito-vectored diseases are among the deadliest known, and mosquitoes alone are the deadliest animals known to man, killing nearly a million per year. This more than doubles the second-deadliest: humans.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
