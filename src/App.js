import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './tailwind.css';
import Home from './Component/Main/Home';
import Contactus from './Component/Main/Contactus';
import LocationSelect from './Component/Main/Location/LocationSelect';
import Assitance from './Component/Main/Location/Assitance';
import Expert from './Component/Main/Location/Expert';
import Appointment from './Component/Main/Location/Appointment';
import Details from './Component/Main/Location/Details';
import Summary from './Component/Main/Location/Summary';
import Confirmation from './Component/Main/Location/Confirmation';
import Tms from './Component/Main/Tms';
import SelfAssement from './Component/Main/Assesment/SelfAssement';
import Test from './Component/Main/Assesment/Test';
import AssesmentPage from './Component/Main/Assesment/AssesmentPage';
import Result from './Component/Main/Assesment/Result';
import Sample1 from './Component/Main/Service/Sample1';
import Sample2 from './Component/Main/Service/Sample2';
import Dummycontact from './Component/Main/Dummycontact';
import SelfAssesment2 from './Component/Main/New Assesment/SelfAssesment2';
import Services from './Component/Main/Service/Services';
import Layout from './Layout/Layout';



function App() {
  return (
    <div className=" ">
      <Router>

        <div className="flex-grow select-none">
          <Routes>
            {/* with layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/newHome" element={<Home />} />
              <Route path="/contact-us" element={<Contactus />} />
             

              <Route path="/assesment-page/:id" element={<AssesmentPage />} />
              <Route path="/service/:title" element={<Services />} />
              <Route path="/result" element={<Result />} />
              <Route path="/sample-1" element={<Sample1 />} />
              <Route path="/sample-2" element={<Sample2 />} />
              <Route path="/contact" element={<Dummycontact />} />
            <Route path="/tms" element={<Tms />} />
            </Route>
            {/* without layout */}
            <Route path="/location" element={<LocationSelect />} />
              <Route path="/assistance" element={<Assitance />} />
              <Route path="/expert" element={<Expert />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/details" element={<Details />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/assesment" element={<SelfAssement />} />
            <Route path="/selfAssesment" element={<SelfAssesment2 />} />
            <Route path="/test/:id" element={<Test />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
