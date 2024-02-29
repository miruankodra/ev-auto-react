import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from '../style';
import {evauto, logo} from '../assets';
import { footerLinks, socialMedia } from '../constants';


const Footer = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`w-full flex justify-end mb-7 my-10`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.216821805871!2d19.70326896333708!3d41.39109743182916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13502d3b61d4cb1f%3A0xfada1177e42aec1e!2sEV%20Auto%20Albania!5e0!3m2!1sen!2s!4v1687465626669!5m2!1sen!2s"
                    width="100%" height="350" style={{border: 0, borderRadius: 20}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full my-20`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img src={evauto} alt="evauto" className="w-[266px] h-[72px] object-contain"/>
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Go Smart, Go Green, Go Electric.</p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px] ">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
                            <ul className="list-none mt-4">
                                {footerLink.links.map((link, index) => (
                                    <li key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                        {link.name}
                                        <br/>
                                        <span>{link.link}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] ">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">{new Date().getFullYear()} EV
                    Auto Albania. All Rights Reserved. Crafted By Tribal Dev</p>

                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <img key={social.id} src={social.icon} alt={social.id}
                             className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Footer;