import { useState } from 'react';
import Header from './scenes/Header';
import { SelectedSection } from './shared/types';
import Home from './scenes/Home';

const App = () => {

  const [selectedSection, setSelectedSection] = useState<SelectedSection>(SelectedSection.HomeID)

  return (
    <div className="mx-auto max-w-[1296px] px-2">
      <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
      <Home setSelectedSection={setSelectedSection}/>
    </div>
  );
};

export default App;
