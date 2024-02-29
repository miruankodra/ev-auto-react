import React from 'react';
import styles, {layout} from '../style';
import {card, centroModels} from '../assets';
import Button from './Button';

const DiverseSolutions = () => (
    <section className={`${layout.section} top-right-border`}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Comprehensive Solutions <br className="sm:block hidden"/> for Diverse Needs.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Unleashing the Power of Electric Mobility:
                Explore Comprehensive Solutions Tailored to Meet Varied Electric Vehicle Needs.
            </p>
        </div>

        <div className={layout.sectionImg}>
            <img src={centroModels} alt="Centro Models" className="w-[100%] h-[100%]" />
        </div>

    </section>
);

export default DiverseSolutions;