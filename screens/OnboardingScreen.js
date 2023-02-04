import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { images, images2, images3 } from "../assets";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const dotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-red-400" : ""
        } p-2`}
      >
        <View
          className={`w-2 h-2 ${
            selected ? "bg-red-400" : "bg-red-200"
          } rounded-full`}
        ></View>
      </View>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={dotComponent}
      skip
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={images} className="w-72 h-72 object-contain" />,
          title: "Start",
          subtitle: "yea u started",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image source={images2} className="w-72 h-72 object-contain" />
          ),
          title: "on-going",
          subtitle: "hell ye u are going",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image source={images3} className="w-68 h-68 object-contain" />
          ),
          title: "old-new",
          subtitle: "old-new to you",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
