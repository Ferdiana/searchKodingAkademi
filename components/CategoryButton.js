import React from "react";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Text, Stack, Spacer } from "native-base";

const CategoryButton = ({ title, onPress, selected }) => {
  return (
    <NativeBaseProvider>
      <Spacer mx={1}>
        <TouchableOpacity onPress={onPress}>
          <Box
            bg={selected ? "#00bfff" : "#f2f2f2"}
            borderRadius={10}
            px={4}
            py={2}
          >
            <Text
              fontSize={12}
              fontWeight="semibold"
              color={selected ? "#fff" : "#000"}
              textAlign="center"
            >
              {title}
            </Text>
          </Box>
        </TouchableOpacity>
      </Spacer>
    </NativeBaseProvider>
  );
};

export default CategoryButton;
