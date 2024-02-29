import React from 'react';
import { feedback } from '../constants';
import styles, {layout} from '../style';
import FeedbackCard from './FeedbackCard';
import {card, electricCars, evauto, greenBulb, kambiomatik, phome, smartCar} from "../assets/index.js";
import Button from "./Button.jsx";
 

const Services = () => (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1 className={styles.heading2}>Our <br className="sm:block hidden" /> Services</h1>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left max-w-p[450px]`}>We Supply Exceptional Green Mobility Products and Services.</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full feedback-containe z-[1]">
                {/*{feedback.map((card) => (*/}
                {/*    <FeedbackCard key={card.id} {...card} />*/}
                {/*) )}*/}

                <section className={`${layout.section} md:w-[85%] w-full md:mb-1 mb-4`}>
                    <div className={`${layout.sectionInfo}`}>
                        <h2 className={styles.heading2}>
                            Go <br className="sm:block hidden"/> Smart.
                        </h2>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Refers to the intelligence and efficiency of electric vehicles.
                            Electric cars are equipped with advanced technology that makes them highly efficient and reliable,
                            such as regenerative braking, energy-efficient components, and smart charging systems.
                            By using electric cars, you are making a smart choice for both your wallet and the environment.
                        </p>
                    </div>

                    <div className={layout.sectionImg}>
                        <img src={smartCar} alt="Smart Car" className="w-[100%] h-[100%] object-contain"/>
                    </div>

                </section>

                <section id="product" className={`${layout.sectionReverse} w-full  md:mb-1 mb-4`}>
                    <div className={`${layout.sectionImgReverse} flex-col`}>

                        <img src={greenBulb} alt="Green Bulb" className={`md:w-[60%] md:h-[60%] w-[80%] h-[80%] object-contain`}/>
                        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
                        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
                    </div>

                    <div className={`${layout.sectionInfo}`}>
                        <h2 className={styles.heading2}>Go <br className="sm:block hidden"/>Green.</h2>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Refers to the environmental benefits of electric cars.
                            Electric vehicles emit no tailpipe emissions,
                            which means they produce no harmful pollutants that contribute to air pollution and global
                            warming.
                            Additionally, electric cars can be powered by renewable energy sources like wind and solar
                            power,
                            making them an even more sustainable and environmentally-friendly transportation option.
                        </p>
                    </div>
                </section>

                <section className={`${layout.section} md:mb-1 mb-4`}>
                    <div className={`${layout.sectionInfo}`}>
                        <h2 className={styles.heading2}>
                            Go <br className="sm:block hidden"/> Electric.
                        </h2>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Simply means choosing an electric vehicle over a traditional gasoline-powered car.
                            Electric cars offer many benefits over gas-powered vehicles, including lower fuel costs,
                            reduced maintenance requirements, and a smoother, quieter driving experience.
                            Additionally, as more and more people switch to electric cars,
                            we can reduce our dependence on fossil fuels and help create a more sustainable future for
                            our planet.
                        </p>
                    </div>

                    <div className={layout.sectionImg}>
                        <img src={electricCars} alt="Electric Car" className="w-[100%] h-[100%] object-contain"/>
                    </div>

                </section>
            </div>

        </section>
);

export default Services;