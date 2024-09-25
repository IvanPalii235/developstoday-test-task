const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/countries", async (req, res) => {
  try {
    const response = await axios.get(
      "${process.env.BASE_URL}/AvailableCountries"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching available countries" });
  }
});

app.get("/countries/:countryCode", async (req, res) => {
  const { countryCode } = req.params;
  const countryInfo = await axios.get(
    `${process.env.BASE_URL}/CountryInfo/${countryCode}`
  );

  try {
    const populationData = await axios.post(
      "${process.env.POPULATION_API_URL}",
      {
        country: countryInfo.data.commonName,
      }
    );

    const flagData = await axios.post(
      "${process.env.FLAG_API_URL}",
      {
        country: countryInfo.data.commonName,
      }
    );

    const responseData = {
      country: countryInfo.data.commonName,
      borders: countryInfo.data.borders,
      population: populationData.data.data.populationCounts,
      flagUrl: flagData.data.data.flag,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching country info:", error.message);
    res.status(500).json({ message: "Error fetching country info", error });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
