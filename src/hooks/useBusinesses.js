import { useState, useEffect } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "sao paulo",
        },
      });
      setBusinesses(response.data.businesses);
      setErrorMessage(null);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    searchAPI("pasta");
  }, []);
  return [searchAPI, businesses, errorMessage];
};
