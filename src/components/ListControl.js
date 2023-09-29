import React, { useState } from "react";
import { Box, Flex, Button, Select, Text } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchProperties = (props) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setSelectedPropertyType(event.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      city: selectedCity,
      date: selectedDate,
      price: parseInt(sliderValue),
      propertyType: selectedPropertyType,
    };

    const fieldMappings = {
      city: "area",
      date: "date",
      price: "rent",
      propertyType: "propertyName",
    };

    const formDataObject = {};

    Object.keys(formData).forEach((fieldName) => {
      const label = fieldMappings[fieldName] || fieldName;
      formDataObject[label] = formData[fieldName];
    });

    props.datahandler(formDataObject);
  };

  return (
    <Box
      p={4}
      marginLeft={{ base: "10px", lg: "120px" }}
      marginRight={{ base: "10px", lg: "120px" }}
    >
      <Flex
        align="center"
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
      >
        <Box fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold">
          Search Properties for Rent
        </Box>
      </Flex>
      <Box mt={4} bgColor="#D9D9D9" p={2} borderRadius="xl">
        <Flex
          mt={4}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          alignItems="center"
        >
          <Select
            placeholder="Select City"
            size="lg"
            ml={2}
            mr={2}
            borderRadius="none"
            mb={{ base: "2", sm: "0" }}
            onChange={handleCityChange}
            value={selectedCity}
          >
            <option value="Allahabad">Allahabad</option>
            <option value="Kanpur">Kanpur</option>
            <option value="Lucknow">Lucknow</option>
          </Select>
          <DatePicker
            ml={2}
            mr={2}
            mt={{ base: "2", sm: "2" }}
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Select a date"
          />
          <Text
            fontSize="sm"
            fontWeight="bold"
            mb={{ base: "2", sm: "0" }}
            ml={2}
            mr={2}
          >
            Price
          </Text>
          <Slider
            ml={2}
            mr={2}
            mb={{ base: "2", sm: "0" }}
            aria-label="slider-ex-1"
            value={sliderValue}
            onChange={handleSliderChange}
            max={10000}
            step={1000}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Select
            placeholder="Property Type"
            size="lg"
            ml={2}
            borderRadius="none"
            mb={{ base: "2", sm: "2", lg: "0" }}
            onChange={handlePropertyTypeChange}
            value={selectedPropertyType}
          >
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="3BHK">3 BHK</option>
          </Select>
          <Button
            ml={2}
            color="white"
            size="lg"
            borderRadius="7px"
            backgroundColor="#7A7EEE"
            variant="solid"
            onClick={handleSubmit}
          >
            Apply
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SearchProperties;
