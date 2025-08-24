import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, businesses, errorMessage] = useBusinesses();

  const filterResultsByPrice = (price) => {
    return businesses.filter((businesses) => {
      return businesses.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} results</Text>
      <ScrollView>
        <ResultList
          businesses={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          businesses={filterResultsByPrice("$$")}
          title="Big Pricier"
        />
        <ResultList
          businesses={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
