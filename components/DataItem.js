import React from "react";
import { Stack, NativeBaseProvider, Image, HStack, Text } from "native-base";

const DataItem = ({ data, selectedCategory, searchText }) => {
  return data
    .filter((item) =>
      selectedCategory ? item.category === selectedCategory : true
    )
    .filter((item) =>
      searchText
        ? item.name.toLowerCase().includes(searchText.toLowerCase())
        : true
    )
    .map((item, index, array) => (
      <NativeBaseProvider>
        <Stack
          borderWidth={1}
          borderRadius={10}
          my={2}
          style={index === array.length - 1 ? { marginBottom: "70%" } : null}
        >
          <HStack maxW={"100%"} p={2}>
            <Image
              source={{ uri: item.image }}
              w={"30%"}
              h={"full"}
              alt={"image"}
              borderRadius={10}
            />
            <Stack w={"70%"} p={2}>
              <Text key={item.id} fontSize={"12"} bold>
                {item.name}
              </Text>
              <Text textAlign={"justify"} fontSize={"10"}>
                {item.description}
              </Text>
              <Text textAlign={"right"} fontSize={"12"} bold>
                {item.price}
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </NativeBaseProvider>
    ));
};

export default DataItem;
