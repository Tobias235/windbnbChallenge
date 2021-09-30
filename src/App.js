import { useState } from "react";

import Header from "./components/layout/Header";
import StaysHeader from "./components/stays/StaysHeader";
import CardWrapper from "./components/stays/CardWrapper";
import Modal from "./components/UI/Modal";
import stays from "./assets/stays.json";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedGuests, setSelectedGuests] = useState(null);
  const [filteredData, setFilteredData] = useState();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const placesData = stays;

  const searchHandler = (data) => {
    setShowModal(false);
    const dataSplitString = data.place.split(", ");
    const dataplace = dataSplitString[0];

    const dataJSON = placesData;
    let newData = dataJSON;
    console.log(newData);

    console.log(dataplace);
    if (dataplace === "Finland") {
      setSelectedCity(dataplace);
    }
    if (dataplace && dataplace !== "Finland") {
      newData = placesData.filter((placeData) => placeData.city === dataplace);
      setSelectedCity(dataplace);
    }
    if (data.people) {
      newData = newData.filter(
        (guest) => guest.maxGuests >= Number(data.people)
      );
      setSelectedGuests(data.people);
    }
    setFilteredData(newData);
  };

  const filter = filteredData ? filteredData : placesData;
  return (
    <div>
      <Header
        onShowModal={showModalHandler}
        city={selectedCity}
        guests={selectedGuests}
      />
      {showModal && (
        <Modal search={searchHandler} onCloseModal={hideModalHandler} />
      )}
      <StaysHeader places={filter} city={selectedCity} />
      <CardWrapper places={filter} />
    </div>
  );
}

export default App;
