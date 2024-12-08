import React, { useEffect, useState } from "react";

const QuoteSection = () => {
  const [quote, setQuote] = useState("Fetching a quote...");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setQuote("The best way to predict the future is to create it.");
      setAuthor("Peter Drucker");
    }, 1000);
  }, []);

  return (
    <section id="quote">
      <h2>Inspirational Quote</h2>
      <p id="quote-text">{quote}</p>
      <p id="quote-author">{author}</p>
    </section>
  );
};

export default QuoteSection;
