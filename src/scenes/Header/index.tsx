import { FC } from 'react';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import logo from '@/assets/images/logo/logo.png';
import Link from './Link';
import { SelectedSection } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  selectedSection: SelectedSection;
  setSelectedSection: (value: SelectedSection) => void;
};

const Header: FC<Props> = ({ selectedSection, setSelectedSection }) => {
  const isMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <header className="flex-between w-full py-[46px]">
      <div className="flex-between">
        <div className="-mt-1 pr-12">
          <img src={logo} alt="logo" />
        </div>
        <nav className="flex-between gap-5">
          <Link
            section={SelectedSection.Home}
            sectionID={SelectedSection.HomeID}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <Link
            section={SelectedSection.AboutUs}
            sectionID={SelectedSection.AboutUsID}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <Link
            section={SelectedSection.Features}
            sectionID={SelectedSection.FeaturesID}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <Link
            section={SelectedSection.Recipes}
            sectionID={SelectedSection.RecipesID}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <Link
            section={SelectedSection.TakeAway}
            sectionID={SelectedSection.TakeAwayID}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <Link
            section={SelectedSection.Testimonial}
            sectionID={SelectedSection.TestimonialID}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </nav>
      </div>

      <div className="flex-between gap-5">
        <MagnifyingGlassIcon className="h-6 w-6 hover-orange cursor-pointer"/>
        {!isMediumScreen && <Bars3Icon className="h6 w-6 hover-orange cursor-pointer" />}
        
      </div>
    </header>
  );
};
export default Header;
