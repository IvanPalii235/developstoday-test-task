import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import '../styles/CountryListPage.css'; 

const CountryListPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("http://localhost:3000/countries");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Container className="country-list-container">
      <Typography variant="h4" component="h1" className="country-list-heading">
        Country List
      </Typography>
      <List className="country-list">
        {countries.map((country) => (
          <ListItem
            key={country.countryCode}
            button
            component={Link}
            to={`/country/${country.countryCode}`}
            className="country-list-item"
          >
            <ListItemText
              primary={country.name}
              className="country-list-item-text"
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CountryListPage;
