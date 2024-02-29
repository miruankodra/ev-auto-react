import React from 'react';
import {apple, batteryStructure, bill, electricMotors, evauto, google, kambiomatik, phome} from '../assets';
import styles, {layout} from '../style';

const BatterySection = () => (
    <section id="product" className={`${layout.sectionReverse} pl-3 mb-7 justify-between top-left-border`}>
        <div className={`${layout.sectionImgReverse} flex-col md:mr-[200px] ml-0`}>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6 justify-start">
                <img src={batteryStructure} alt="Battery Structure" className="w-[100%] object-contain mr-10 my-5 cursor-pointer"/>
            </div>
        </div>

        <div className={`${layout.sectionInfo} md:ml-[200px] ml-0`}>
            <h2 className={styles.heading2}>Powering<br className="sm:block hidden"/>The Future.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Energizing Electric Mobility with Advanced Battery Technology.
            </p>
        </div>
    </section>
);

export default BatterySection;