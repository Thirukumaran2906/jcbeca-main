import React from 'react'
import Design from './pg3.module.css'

const Websites = () => {
    return (
        <div className={Design.Keyword}>
          <h2>Websites</h2>
          <p>
          The MIT-BIH Arrhythmia Database contains 48 half-hour excerpts of two-channel ambulatory ECG recordings, from 47 subjects studied by the BIH Arrhythmia Laboratory between 1975 and 1979.
          <a href='https://physionet.org/content/mitdb/1.0.0/' target='blank'>click here</a></p>
          <p>	The authors are responsible for the accuracy of the bibliographic information</p>
          
        </div>
      );
}

export default Websites
