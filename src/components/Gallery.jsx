import React, { useEffect, useState } from "react";
import TourCard from "./TourCard.jsx";
import DestinationSelector from "./DestinationSelector.jsx";

const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All Destinations");

  const fetchTours = async () => {
    try {
      const res = await fetch("https://www.course-api.com/react-tours-project");
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const destinations = [
    "All Destinations",
    ...new Set(tours.map((tour) => tour.name)),
  ];
  const filteredTours =
    filter === "All Destinations"
      ? tours
      : tours.filter((tour) => tour.name === filter);

  if (error) {
    return <h2>Uh Oh, something went wrong</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (tours.length === 0) {
    return (
      <div className="length-zero">
        <h2>No tours left. Refresh to reload.</h2>
        <div className="refresh-button">
          <button onClick={fetchTours}>Refresh</button>
        </div>
      </div>
    );
  }

  return (
    <section className="tour-gallery">
      {/* Use DestinationSelector for filtering */}
      <DestinationSelector
        destinations={destinations}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Render filtered tours */}
      <div className="tour-list">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} {...tour} onRemove={onRemove} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
