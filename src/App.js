import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchProperties from "./components/ListControl";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  const [cardData, setCardData] = useState([]);
  const [error, seterror] = useState(null);
  function convertToISOString(inputDate) {
    const date = new Date(inputDate);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

    const isoString = date.toISOString();
    const formattedDate = isoString.replace(/T.*$/, "T00:00:00.000Z");

    return formattedDate;
  }

  const filterhanlder = (props) => {
    const filteredData = cardData.filter((item) => {
      const incomingAddress = props.area;
      const incomingPropertyName = props.propertyName;
      const incomingRent = props.rent;
      const incomingDate = convertToISOString(props.date);
      console.log(item.availableFrom == incomingDate);
      return (
        item.address == incomingAddress &&
        item.propertyName == incomingPropertyName &&
        item.rent <= incomingRent &&
        item.availableFrom <= incomingDate
      );
    });
    console.log(filteredData);
    if (filteredData.length == 0) {
      seterror("no data found");
    } else {
      setCardData(filteredData);
      seterror(null);
    }
  };

  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://reunion-backend-bjiy.onrender.com/list-properties"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setCardData(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchProperties datahandler={filterhanlder} />
      {error ? <p>{error}</p> : <CardList data={cardData} />}
    </div>
  );
}

export default App;
