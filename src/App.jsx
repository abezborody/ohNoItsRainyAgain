import Search from "./components/Search/Search.component";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.component";

import "./App.css";

function App() {
  const onSearchChangeHandler = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
  };
  return (
    <div className="container">
      <Search onSearchChange={onSearchChangeHandler} />
      <CurrentWeather />
    </div>
  );
}

export default App;
