import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Products from './Components/Products';
import Footer from './Components/Footer'
import NewsLetterReviews from './Components/NewsLetterReviews'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Products />
      <NewsLetterReviews />
      <Footer />
    </div>
  );
}

export default App;
