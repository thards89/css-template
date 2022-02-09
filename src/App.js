import './App.css';
import { Navigation, Hero, LatestNews, WorldNews, LocalNews, Footer } from "./components"

function App() {
  return (
    // Add a className to each div
    // Go the App.css and write the styles there
    <div>
      <div className="containerOne">
      <Navigation/>
      <Hero/>
      </div>
      <div className="containerTwo">
        <LatestNews/>
        <WorldNews/>
        <LocalNews/>
      </div>
      <div className="containerOne">
      <Footer/>
      </div>
  </div>

  )
}

export default App;
