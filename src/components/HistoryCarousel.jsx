import React, {useEffect, useState} from 'react';
import styles, {layout} from '../style';
import {card, chevron} from '../assets';
import Button from './Button';
import {animated, useSpring} from "@react-spring/web";

const HistoryCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [springs, api] = useSpring( () => ({
        from: { opacity: 0.1 },
        // to: { opacity: 1 }
    }));

    useEffect(() => {
        api.start({
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            config: {
                duration: 2000, // duration for the whole animation form start to end
            },
        })
    }, [ currentSlide ]);

    return (
        <section className={styles.paddingY}>
            <h1 className={styles.heading2}>Our History</h1>
            <section className={`flex flex-row w-full justify-between items-center ${styles.paddingY}`}>
                <div className={`h-full flex items-center justify-center min-h-[600px]`}>
                    <button className={`text-white`}
                            onClick={() => setCurrentSlide(prev => (currentSlide === 0) ? 0 : prev - 1)}>
                        <img src={chevron} alt="Previous" className={`scale-x-[-1] min-w-[64px]`}/>
                    </button>
                </div>
                {currentSlide === 0 ?

                    <animated.div style={springs}>
                        <div className={`text-white w-full flex flex-col items-center justify-center historySlide`}>
                            <div
                                className={`md:w-1/2 w-auto min-h-[200px] my-5 float-right border border-white rounded-[15px] p-3 flex flex-col justify-around md:mr-32 mr-0`}>
                                <h1 className={styles.heading2}>1927</h1>
                                <h3 className={`font-medium my-2`}>Foundation</h3>
                                <p>The origins of our family business can be traced as far back as 1925, when our
                                    grandfathers
                                    established the Picari Brothers, a highly prosperous Albanian private enterprise
                                    engaged
                                    in
                                    importing and exporting goods to neighboring European nations.</p>
                            </div>
                            <div
                                className={`md:w-1/2 w-auto min-h-[200px] my-5 float-right border border-white rounded-[15px] p-3 flex flex-col justify-start md:ml-32 ml-0`}>
                                <h1 className={styles.heading2}>1990's</h1>
                                {/*<h3 className={`font-medium my-2`}>Foundation</h3>*/}
                                <p>TDuring the early 1990s, our fathers diversified their business portfolio by
                                    venturing
                                    into the
                                    real estate market in Albania.</p>
                            </div>
                        </div>
                    </animated.div>
                    : null}

                {currentSlide === 1 ?
                    <animated.div style={springs}>
                        <div className={`text-white w-full flex flex-col items-center justify-center historySlide`}>
                            <div
                                className={`md:w-1/2 w-auto min-h-[200px] my-5 float-right border border-white rounded-[15px] p-3 flex flex-col justify-around md:ml-32 ml-0`}>
                                <h1 className={styles.heading2}>2000</h1>
                                <p>From the year 2000 onwards, we have followed in our fathers' footsteps and expanded
                                    our
                                    business
                                    ventures to encompass the sale of home furniture and fashion brands, in addition to
                                    wholesale
                                    and retail of automobiles and parts in Albania and Kosovo.</p>
                            </div>
                            <div
                                className={`md:w-1/2 w-auto min-h-[200px] my-5 float-right border border-white rounded-[15px] p-3 flex flex-col justify-start md:mr-32 mr-0`}>
                                <h1 className={styles.heading2}>2003</h1>
                                {/*<h3 className={`font-medium my-2`}>Foundation</h3>*/}
                                <p>In January 2003, we entered into the automotive industry, providing a wide range of
                                    services
                                    including the sale of passenger cars, original parts, lubricants, as well as
                                    automatic
                                    transmission parts and services primarily to European brands.</p>
                            </div>
                        </div>
                    </animated.div>
                    : null}

                {currentSlide === 2 ?
                    <animated.div style={springs}>
                        <div className={`text-white w-full flex flex-col items-center justify-center historySlide`}>
                            <div
                                className={`md:w-1/2 w-auto min-h-[200px] my-5 float-right border border-white rounded-[15px] p-3 flex flex-col justify-around md:mr-32 mr-0`}>
                                <h1 className={styles.heading2}>2017</h1>
                                <h3 className={`font-medium my-2`}>Foundation</h3>
                                <p>In 2017, we established a new company with the sole purpose of expanding our services
                                    to
                                    include
                                    automatic transmission parts and services, transfer cases, and differentials for
                                    both
                                    passenger
                                    and heavy-duty vehicles, covering all global manufacturers under the brand name
                                    Kambiomatik.</p>
                            </div>
                            <div
                                className={`md:w-1/2 w-auto min-h-[200px] my-5 float-right border border-white rounded-[15px] p-3 flex flex-col justify-start md:ml-32 ml-0`}>
                                <h1 className={styles.heading2}>2020</h1>
                                {/*<h3 className={`font-medium my-2`}>Foundation</h3>*/}
                                <p>In August 2020, Kambiomatik extended its business operations by inaugurating a new
                                    branch
                                    dedicated to the sale of parts and provision of services in Kosovo, thereby
                                    expanding
                                    its sales
                                    coverage geographically with two locations in Tirana, Albania and Pristina,
                                    Kosovo.</p>
                            </div>
                        </div>
                    </animated.div>
                    : null}

                {currentSlide === 3 ?
                    <animated.div style={springs}>
                        <div className={`text-white w-full flex flex-col items-center justify-center historySlide`}>
                            <div
                                className={`md:w-1/2 w-auto min-h-[200px] my-5 float-right border border-white rounded-[15px] p-3 flex flex-col justify-around md:ml-32 ml-0`}>
                                <h1 className={styles.heading2}>2022</h1>
                                <p>We have further expanded our presence in the automotive industry by launching a new
                                    green
                                    mobility brand named EV Auto Albania.</p>
                            </div>
                            <div
                                className={`md:w-1/2 w-auto min-h-[200px] my-5 float-right border border-white rounded-[15px] p-3 flex flex-col justify-start md:ml-32 ml-0 opacity-0`}>
                                <h1 className={styles.heading2}>2020</h1>
                                {/*<h3 className={`font-medium my-2`}>Foundation</h3>*/}
                                <p>In August 2020, Kambiomatik extended its business operations by inaugurating a new
                                    branch
                                    dedicated to the sale of parts and provision of services in Kosovo, thereby
                                    expanding
                                    its sales
                                    coverage geographically with two locations in Tirana, Albania and Pristina,
                                    Kosovo.</p>
                            </div>
                        </div>
                    </animated.div>
                    : null}
                <div className={`h-full flex items-center justify-center min-h-[600px]`}>
                    <button className={`text-white`}
                            onClick={() => setCurrentSlide(prev => (currentSlide === 3) ? 3 : prev + 1)}>
                        <img src={chevron} alt="Next" className={`min-w-[64px]`}/>
                    </button>
                </div>


            </section>
        </section>
    );
};

export default HistoryCarousel;