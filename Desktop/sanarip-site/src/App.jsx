import "./App.css";
import Section from "./components/Section";
import photo1 from "./assets/1.jpeg";
import photo2 from "./assets/2.jpeg";
import photo3 from "./assets/3.jpeg";
import photo4 from "./assets/4.jpeg";
import Prefooter from "./components/Prefooter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <header id="header">
          <div className="logo">Logo</div>
          <nav className="navbar">
            <ul className="lists">
              <li className="list">Product</li>
              <li className="list">Our story </li>
              <li className="list">
                <button className="btn">Sign in</button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <div className="main-div">
            <h1 className="main-h1">More time for the work you love</h1>
            <p className="main-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium fugit provident optio consequuntur placeat,
              repellendus, fugiat numquam incidunt possimus, nostrum officiis
              ducimus nihil. Nihil eius laudantium?
            </p>
            <button className="btn main-btn">Kurska kattaluu</button>
          </div>
        </main>
        <section className="container">
          <Section photo={photo1} title="Untangle your support channels" />
          <Section
            photo={photo2}
            title="Auto-respond to repetitive questions"
          />
          <Section photo={photo3} title="A clear point of contact" />
          <Section photo={photo4} title="Find employee info fast" />
          <div className="section-footer">
            <h1 className="section-h1">Works across multiple teams</h1>
            <div className="cards">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-h2">HR</h2>
                  <img
                    className="cart-icon"
                    src="https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44df5dacb16886f8618e02_line-circle.svg"
                    alt=""
                  />
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  accusamus quibusdam quaerat expedita dolore minus dolorum qui.
                </p>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-h2">IT</h2>
                  <img
                    className="cart-icon-2"
                    src="https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44df5dceda031f1ab94f5e_line-squiggle.svg"
                    alt=""
                  />
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  accusamus quibusdam quaerat expedita dolore minus dolorum qui.
                </p>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-h2">Finance</h2>
                  <img
                    className="cart-icon-3"
                    src="https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44df5d1f912204051f5c42_line-straight.svg"
                    alt=""
                  />
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  accusamus quibusdam quaerat expedita dolore minus dolorum qui.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Prefooter />
        <Footer />
      </div>
    </>
  );
}

export default App;
