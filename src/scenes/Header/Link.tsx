import { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedSection } from '@/shared/types';

type Props = {
  section: SelectedSection;
  sectionID: SelectedSection;
  selectedSection: SelectedSection;
  setSelectedSection: (value: SelectedSection) => void;
};

const Link: FC<Props> = ({ section, sectionID, selectedSection, setSelectedSection }) => {
 
  return (
    <AnchorLink
      className={`${selectedSection === sectionID ? 'text-orange' : ''} px-2 hover-orange`}
      href={`#${sectionID}`}
      onClick={() => setSelectedSection(sectionID)}
    >
      {section}
    </AnchorLink>
  );
};
export default Link;
