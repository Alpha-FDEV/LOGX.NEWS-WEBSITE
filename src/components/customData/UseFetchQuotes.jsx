import { useEffect, useState } from "react";

function UseFetchQuotes() {
  const [quote, setQuote] = useState("Life for the living so live it👍");
  
    useEffect(() => {
      
        async function fetchQuote() {
             const res = await fetch("https://api.quotable.io/random");
            const data = await res.json()
            setQuote(data.content)
        }
        fetchQuote()
  
     
  }, []);

    return quote
}

export default UseFetchQuotes;
