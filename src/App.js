import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: 300,
          height: 95,
          borderRadius: 10
        }}
      >
        <LinearGradient
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            borderRadius: 10
          }}
          colors={["#159", "#789"]}
        >
          <Text
            style={{
              fontSize: 46,
              fontFamily: "Vazir Black FD",
              color: "white"
            }}
          >
            تاپ فن
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default App;
