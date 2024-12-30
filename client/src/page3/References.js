import React from 'react'
import Design from './pg3.module.css'

const References = () => {
    return (
        <div className={Design.research}>
          <section>
            <h2>References</h2>
            <p> Following the punctuation marks, it must be numbered consecutively in the text's citation sequence and marked with a superscript enclosed in square brackets. ([XX])At the conclusion of the text, a list should be included on distinct pages that are 1.15 apart. To ensure appropriate journal title abbreviations, reference style and punctuation, refer to the following examples: </p>
          </section>
    
          <section>
            <h2>Journal references</h2>
            <p>1. Raghavi K, Manesh K, “Title of article”. Title of the Journal, 2011; 27(1): 73-8. ISSN: 3048-9695 (Online), DOI: 10.4018/978-1-6684-9823-1.ch004</p>
          </section>
    
          <section>
            <h2>Books</h2>
            <p>1.	Raghavi K, Manesh K. A Combined Survey on Machine Learning for Cognitive Radio Deployed on Secure WBAN Environments. Metaverse Applications for Intelligent Healthcare, IGI Global; publisher: 2002, pp. 93-113. DOI: 10.4018/978-1-6684-9823-1.ch004</p>
          </section>
    
          <section>
            <h2>Patents</h2>
            <p>1.	Raghavi K, Manesh K. IPVR Patent, IPVR  2154871, 2023.</p>
          </section>
        </div>
      );
}

export default References
