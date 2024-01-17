import { FC } from 'react';
import { motion } from 'framer-motion';
import { SelectedSection } from '@/shared/types';
import Button from '@/shared/Button';
import heroText from '@/assets/images/hero-text.png';
import homeImage from '@/assets/images/home-image.png';
import facebookIcon from '@/assets/images/icons/facebook.svg';
import instagramIcon from '@/assets/images/icons//instagram.svg';
import twitterIcon from '@/assets/images/icons/twitter.svg';

type Props = {
  setSelectedSection: (value: SelectedSection) => void;
};

const Home: FC<Props> = ({ setSelectedSection }) => {
  return (
    <section id={SelectedSection.HomeID} className="">
      <motion.div
        onViewportEnter={() => setSelectedSection(SelectedSection.HomeID)}
      >
        <div className="flex">
          <div className="basis-1/2">
            <h3 className="mb-4 text-2xl text-orange">_Restaurant</h3>
            <img src={heroText} alt="home-section-text" />
            <p className="mb-11 mt-4 w-10/12 text-xl text-secondary">
              The food palace is an neighborhood restaurent serving seasonal
              global cuisine driven by the faire.
            </p>
            <Button onClick={() => {}}>Explore Food Menu</Button>
            <ul className="mt-20 flex items-center gap-7">
              <li className="shadow-3xl flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-gradient-radial from-transparent to-transparent hover:from-orange transition-colors duration-200">
                <a href="#">
                  <img src={facebookIcon} alt="facebook" />
                </a>
              </li>
              <li className="shadow-3xl flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-gradient-radial from-transparent to-transparent hover:from-orange transition-colors duration-200">
                <img src={instagramIcon} alt="instagram" />
              </li>
              <li className="shadow-3xl flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-gradient-radial from-transparent to-transparent hover:from-orange transition-colors duration-200">
                <img src={twitterIcon} alt="twitter" />
              </li>
            </ul>
          </div>
          <div className="basis-1/2">
            <img src={homeImage} alt="home-section-image" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Home;
