import styles from "./style";
import {
  Family,
  Vision,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  // Stats,
  Services,
  Hero,
  ElectroMotor, DiverseSolutions, BatterySection, HistoryCarousel
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden flex flex-row justify-center">
    <div className="">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/*<Stats />*/}
          <Vision />
          <Family />
          <HistoryCarousel />
          <Services />
          <ElectroMotor />
          <DiverseSolutions />
          <BatterySection />
          {/*<CardDeal />*/}
          {/*<Clients />*/}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
