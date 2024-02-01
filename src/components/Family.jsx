import React from 'react';
import {apple, bill, evauto, google, kambiomatik, phome} from '../assets';
import styles, {layout} from '../style';

const Family = () => (
        <section id="product" className={layout.sectionReverse}>
            <div className={`${layout.sectionImgReverse} flex-col`}>
                <div className="flex flex-row justify-center flex-wrap sm:mt-10 mt-6">
                    <img src={evauto} alt="EV Auto Albania" className="w-[200px] object-contain mr-10 my-5 cursor-pointer"/>
                    <img src={kambiomatik} alt="Kambiomatik" className="w-[200px] object-contain mx-4 my-5 rounded-full cursor-pointer"/>
                    <img src={phome} alt="Prestige Home" className="w-[200px] object-contain mx-4 my-5 cursor-pointer"/>
                </div>

                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Our <br className="sm:block hidden"/>Family.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our family's businesses span technology, hospitality, and manufacturing, embodying our legacy of
                    entrepreneurial success and unity.
                </p>
            </div>
        </section>
    );

export default Family;