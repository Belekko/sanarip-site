import Prefooter from "./components/Prefooter";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainHeader from "./components/layout/MainHeader";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <MainHeader />
        <Main />
        <Prefooter />
        <Footer />
      </div>
    </>
  );
}

export default App;
