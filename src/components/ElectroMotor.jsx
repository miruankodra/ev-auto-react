import React from 'react';
import {apple, bill, electricMotors, evauto, google, kambiomatik, phome} from '../assets';
import styles, {layout} from '../style';

const ElectroMotor = () => (
    <section id="product" className={`${layout.sectionReverse} pl-3 justify-between top-left-border`}>
        <div className={`${layout.sectionImgReverse} flex-col md:mr-[200px] ml-0`}>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6 justify-start">
                <img src={electricMotors} alt="Electric Motor" className="w-[100%] object-contain mr-10 my-5 cursor-pointer"/>
            </div>
        </div>

        <div className={`${layout.sectionInfo} md:ml-[200px] ml-0`}>
            <h2 className={styles.heading2}>Electrify Your<br className="sm:block hidden"/>Drive.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Unleashing the Power of Electric Mobility
            </p>
        </div>
    </section>
);

export default ElectroMotor;