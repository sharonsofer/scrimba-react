import "./App.css";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  // return (
  //   <div className="App">
  //     <Header />
  //     <MainContent />
  //     <Footer />
  //   </div>
  // );
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
