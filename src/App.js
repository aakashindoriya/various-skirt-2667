import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const options = {
    method: "GET",
    url: "https://amazon-products1.p.rapidapi.com/most-wished",
    params: { country: "US", categoryId: "165793011" },
    headers: {
      "X-RapidAPI-Key": "0567afe1bemsh7245822fd6f40a8p14c4d6jsna09a90df2f28",
      "X-RapidAPI-Host": "amazon-products1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
