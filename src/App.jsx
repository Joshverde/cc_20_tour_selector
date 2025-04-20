import React, { useState } from 'react';
import Gallery from './components/Gallery.jsx'; // Importing the Gallery component
import './styles/styles.css'; // Importing the CSS styles

function App() {
    // State to manage the list of tours
    const [tours, setTours] = useState([]);

    // Function to remove a tour by its ID
    const removeTour = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };

    return (
        <main>
            {/* Main heading of the application */}
            <h1>Tour Gallery</h1>

            {/* Rendering the Gallery component and passing props */}
            <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
        </main>
    );
}

export default App; // Exporting the App component as the default export