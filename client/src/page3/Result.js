import React from 'react';
import Design from './pg3.module.css'

function Result() {
  return (
    <div className={Design.research}>
      <section>
        <h2>Result and Discussion</h2>
        <p>The results should include detailed descriptions of the key findings, highlighting significant data points and trends. Use of tables, graphs, and figures is essential to visually represent the data, making it easier for readers to understand complex information. Each figure and table should be accompanied by descriptive captions and referenced appropriately in the text.</p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>This should clearly outline the research's key findings and provide an explanation of their significance and applicability. There may be images used as summaries.</p>
      </section>

      <section>
        <h2>Undertaking/Funding</h2>
        <p>An undertaking is a formal pledge or promise to perform a specific act or adhere to certain conditions. It is often used in legal, business, and contractual contexts.</p>
      </section>

      <section>
        <h2>Acknowledgements</h2>
        <p>An acknowledgment in a research paper is where the authors express gratitude to those who contributed to the research but do not meet the criteria for authorship. Acknowledging organizations, institutions, or grants that provided financial support for the research.</p>
      </section>
    </div>
  );
}

export default Result;
