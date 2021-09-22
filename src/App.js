import './App.css';
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row"
import requests from "./request"
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row 
      title="TRANDING"
      fetchUrl={requests.fetchPopularity}
      isLargeRow>
      </Row>
      <Row title="Tranding Today" fetchUrl={requests.fetchTop20Today}/>
      <Row title="Tranding This Week" fetchUrl={requests.fetchTop20Week}/>
      <Row title="UP COMING" fetchUrl={requests.fetchUpComing}/>
    </div>
  );
}

export default App;
