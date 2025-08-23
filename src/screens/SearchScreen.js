import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, businesses, errorMessage] = useBusinesses();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
