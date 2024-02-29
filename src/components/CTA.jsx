import styles from "../style";
import Button from "./Button";

const CTA = () => (
    <section id="industrySection" className={`flex flex-row justify-start items-center ${styles.paddingX} mt-7 rounded-[20px]`}>
        <div className={`h-[90%]  md:w-[35%] w-full p-5 flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className="flex-1 flex flex-col border-l-2 border-dimWhite pl-5">
                <p className={`${styles.paragraph} max-w-[470px] mt-5 md:ml-5 text-[20px] md:w-2/3`}>
                    Electric vehicles are manufactured using state-of-the-art mechanical and information technology.
                    These cutting-edge technologies include advanced systems for managing and controlling the electric motor,
                    battery pack, and power electronics,
                    as well as sophisticated computer systems for optimizing the performance and efficiency of the vehicle providing a highly efficient,
                    reliable, and sustainable mode of transportation.
                </p>
            </div>
        </div>
    </section>
);

export default CTA;