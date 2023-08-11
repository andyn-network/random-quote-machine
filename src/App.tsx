// Import necessary dependencies and styles
import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';

// Define the structure of a quote using TypeScript interface
interface Quote {
  quote: string;
  author: string;
}

// Function to get a random quote from the quotes array
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to generate a random RGB color
const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

// Define the CSS transition animation
const transition = "all 1s";

function App() {
  // State variables using useState hook
  const [quote, setQuote] = useState<Quote>(getRandomQuote()); // Holds the current quote
  const [randomColor, setRandomColor] = useState<string>(getRandomColor()); // Holds the background color

  // Function to change the displayed quote and background color
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return (
    <div className="background" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor }}>
          <h2 id="text">
            {/* FontAwesome icons for quotation marks */}
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }}/>
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }}/>
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          {/* Tweet button */}
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
              transition,
            }}
          >
            <FaTwitter color="white" />
          </a>
          {/* Change Quote button */}
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
