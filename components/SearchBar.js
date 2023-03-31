import React from "react";
import { Stack, Box, Input, Icon, Center, ZStack, Text } from "native-base";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <Stack width={"100%"}>
      <Stack
        w={"100%"}
        bgColor={"blue.300"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text mt={"5%"}>Course</Text>
        <Input
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          w={"95%"}
          bgColor={"white"}
          my={"5%"}
          borderRadius={10}
        />
      </Stack>
    </Stack>
  );
};

export default SearchBar;
