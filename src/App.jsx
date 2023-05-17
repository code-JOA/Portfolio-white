import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import People from './components/People/People';
import css from "./styles/app.module.scss";
// import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experience />
      <Work />
      <Portfolio />
      <People />
    </div>
  );
};

export default App;
