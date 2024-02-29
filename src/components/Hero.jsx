import React from 'react';
import styles from '../style';
import {discount, heroBanner, robot} from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col pb-16`}>
        <img src={heroBanner} className={`h-full absolute left-0 hero-banner object-cover`} alt=""/>
        <div className={`absolute w-full h-full left-0 z-[4] bg-black opacity-[0.5] backdrop-blur-[10px]`}></div>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[5] md:mt-0 mt-12`}>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    The Future
                    <br className="sm:block hidden"/> {" "}
                    <span className="text-gradient">of Mobility</span> {" "}
                </h1>
            </div>
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">is
                Here.</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Go Smart | Go Green | Go Electric
            </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <div className="w-[100%] md:h-[800px] h-[500px] relative z-[5]"></div>

            {/*<div className="absolute z-[0] w-[40%] h-[30%] top-0 pink__gradient"/>*/}
            {/*<div className="absolute z-[1] w-[80%] h-[80%] rounded-full  bottom-40 white__gradient"/>*/}
            {/*<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>*/}

        </div>

        {/*<div className={`ss:hidden ${styles.flexCenter}`}>*/}
        {/*    <GetStarted/>*/}
        {/*</div>*/}

    </section>
);

export default Hero;