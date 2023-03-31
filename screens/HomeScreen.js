import {} from "native-base";
import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import CategoryButton from "../components/CategoryButton";
import DataItem from "../components/DataItem";
import { categories, data } from "../data/data";
import { NativeBaseProvider, Center, Stack } from "native-base";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <NativeBaseProvider>
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      >
        <Center width={"100%"}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </Center>

        <Stack width={"100%"} my={2}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              borderWidth: 10,
            }}
          >
            <CategoryButton
              title="All"
              onPress={() => setSelectedCategory(null)}
              selected={!selectedCategory}
            />
            {categories.map((category, index) => (
              <CategoryButton
                key={index}
                title={category}
                onPress={() => setSelectedCategory(category)}
                selected={category === selectedCategory}
              />
            ))}
          </ScrollView>
        </Stack>

        <Stack w={"95%"} alignSelf={"center"}>
          <View>
            <ScrollView>
              <DataItem
                data={data}
                selectedCategory={selectedCategory}
                searchText={searchText}
              />
            </ScrollView>
          </View>
        </Stack>
      </View>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
