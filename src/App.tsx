import AlertsSection from "./sections/AlertsSection";
import BadgesSection from "./sections/BadgesSection";
import ButtonsSection from "./sections/ButtonsSection";
import IconsAvatarsSection from "./sections/IconsAvatarsSection";
import FormInputsSection from "./sections/FormInputsSection";
import SelectionControlsSection from "./sections/SelectionControlsSection";
import AccordionSection from "./sections/AccordionSection";
import ModalSection from "./sections/ModalSection";
import TableSection from "./sections/TableSection";
import PaginationSection from "./sections/PaginationSection";
import StepperSection from "./sections/StepperSection";
import "./App.css";


import {
  NysSkipnav,
  NysUnavHeader,
  NysGlobalHeader,
  NysGlobalFooter,
  NysUnavFooter,
  NysBacktotop,
} from "@nysds/components/react";


function App() {
  return (
    <>
      <NysSkipnav />
      <NysUnavHeader />
      <NysGlobalHeader
        appName="NYSDS React 19 Showcase"
        agencyName="New York State"
      >
        <ul>
          <li><a href="#alerts">Alerts</a></li>
          <li><a href="#buttons">Buttons</a></li>
          <li><a href="#forms">Forms</a></li>
          <li><a href="#data-display">Data Display</a></li>
        </ul>
      </NysGlobalHeader>

      <main id="main-content" className="nys-flex-1">
        <div className="main-content">
          <h1>NYSDS Component Showcase</h1>
          <p>
            React 19
           <br/>
            Ready to go React wrapped components provided by NYSDS 😉
          </p>

          <AlertsSection />
          <BadgesSection />
          <ButtonsSection />
          <IconsAvatarsSection />
          <FormInputsSection />
          <SelectionControlsSection />
          <AccordionSection />
          <ModalSection />
          <TableSection />
          <PaginationSection />
          <StepperSection />
        </div>
      </main>

      <NysGlobalFooter agencyName="New York State">
        <ul>
          <li>
            <a href="https://ny.gov">NY.gov</a>
          </li>
          <li>
            <a href="https://designsystem.ny.gov">NYSDS</a>
          </li>
        </ul>
      </NysGlobalFooter>
      <NysUnavFooter />
      <NysBacktotop />
    </>
  );
}

export default App;
