import Search from "./components/Search/Search.component";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.component";

import "./App.css";

function App() {
  const onSearchChangeHandler = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={onSearchChangeHandler} />
      <CurrentWeather />
    </div>
  );
}

export default App;
