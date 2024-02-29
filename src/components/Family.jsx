import React from 'react';
import {apple, bill, evauto, google, kambiomatik, phome} from '../assets';
import styles, {layout} from '../style';

const Family = () => (
        <section id="about" className={`${layout.sectionReverse} justify-around mb-8`}>
            <div className={`${layout.sectionImgReverse} flex-col md:mr-[200px] ml-0`}>
                <div className="flex flex-wrap justify-center sm:mt-10 mt-6">
                    <a href="#home" className={`flex justify-center items-center md:my-2 my-5`}>
                        <img src={evauto} alt="EV Auto Albania" className="w-[200px] object-contain mx-5 my-7 cursor-pointer"/>
                    </a>
                    <a href="https://kambiomatik.com/about-kambiomatik/" target="_blank" className={`flex justify-center items-center md:my-2 my-5`}>
                        <img src={kambiomatik} alt="Kambiomatik" className="w-[200px] object-fill mx-5 my-7 rounded-full cursor-pointer"/>
                    </a>
                    <a href="https://prestigehome.al/en/about-us/" target="_blank" className={`flex justify-center items-center md:my-2 my-5`}>
                        <img src={phome} alt="Prestige Home" className="w-[200px] object-contain mx-5 my-7 cursor-pointer"/>
                    </a>
                </div>

                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
            </div>

            <div className={`${layout.sectionInfo} md:ml-[200px] ml-0`}>
                <h2 className={styles.heading2}>Our <br className="sm:block hidden"/>Family.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our family's businesses span technology, hospitality, and manufacturing, embodying our legacy of
                    entrepreneurial success and unity.
                </p>
            </div>
        </section>
    );

export default Family;