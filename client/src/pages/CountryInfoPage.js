import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import "../styles/CountryInfoPage.css"; 

const CountryInfoPage = () => {
  const { code } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPopulation, setSelectedPopulation] = useState(null);
  

  useEffect(() => {
    const fetchCountryInfo = async () => {
      if (!code) {
        console.error("Country code is undefined");
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:3000/countries/${code}`
        );
        if (response.status === 200) {
          setCountryInfo(response.data);

          // Automatically select the first available population year
          if (response.data.population && response.data.population.length > 0) {
            const firstYear = response.data.population[0].year;
            setSelectedYear(firstYear);
            setSelectedPopulation(
              response.data.population.find((data) => data.year === firstYear)
            );
          }
        } else {
          console.error("Error fetching country info:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching country info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [code]);

  // Handle dropdown selection
  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    const populationData = countryInfo.population.find(
      (data) => data.year === year
    );
    setSelectedPopulation(populationData);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );
  }

  if (!countryInfo) {
    return (
      <Container className="container">
        <Typography variant="h6" className="error-message">
          Country information not available.
        </Typography>
      </Container>
    );
  }

  return (
    <Container className="container">
      <Typography variant="h4" component="h1" className="heading">
        {countryInfo.commonName}
      </Typography>

      <Grid container spacing={2}>
        {/* Border Information */}
        <Grid item xs={12} md={6}>
          <div className="section">
            <Typography variant="h6" gutterBottom>
              Borders:
            </Typography>
            <List className="borders-list">
              {countryInfo.borders && countryInfo.borders.length > 0 ? (
                countryInfo.borders.map((border) => (
                  <ListItem key={border} className="list-item">
                    <ListItemText primary={border.commonName} />
                  </ListItem>
                ))
              ) : (
                <ListItem className="list-item">
                  <ListItemText primary="No borders" />
                </ListItem>
              )}
            </List>
          </div>
        </Grid>

        {/* Population Information */}
        <Grid item xs={12} md={6}>
          <div className="section">
            <Typography variant="h6" gutterBottom>
              Population Data:
            </Typography>

            {/* Dropdown for selecting year */}
            <FormControl className="select-container">
              <InputLabel id="year-select-label">Select Year</InputLabel>
              <Select
                labelId="year-select-label"
                value={selectedYear}
                onChange={handleYearChange}
                className="select"
              >
                {countryInfo.population &&
                  countryInfo.population.map((data) => (
                    <MenuItem key={data.year} value={data.year}>
                      {data.year}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* Display selected population */}
            {selectedPopulation && (
              <Typography className="selected-population">
                Population in {selectedPopulation.year}:{" "}
                {selectedPopulation.value.toLocaleString()}
              </Typography>
            )}
          </div>
        </Grid>
      </Grid>

      {/* Flag Display */}
      <Typography variant="h6" gutterBottom>
        Flag:
      </Typography>
      <div className="flag-container">
        <img
          src={countryInfo.flagUrl}
          alt={`${countryInfo.commonName} flag`}
          className="flag-image"
        />
      </div>
    </Container>
  );
};

export default CountryInfoPage;
