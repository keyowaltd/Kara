import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import karaLogo from '../../assets/kara-logo.png';
import ColorBlind from '../../assets/ColorBlind_logo.png';
import Login from './Login';

const ColorblindRequest = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleYes = () => {
    setShowLogin(true);
  };

  const handleNo = () => {
    setShowLogin(true);
  };

  // Go to Login page
  if (showLogin) {
    return <Login />;
  }

  return (
    <View className="flex-1 bg-[#F7F6FD] px-6">

      {/* Main Content */}
      <View className="flex-1 items-center justify-center">

        {/* KARA Logo */}
        <Image
          source={karaLogo}
          className="mb-1 h-16 w-40"
          resizeMode="contain"
        />

        {/* Colour Blind Logo */}
        <Image
          source={ColorBlind}
          className="mb-1 h-16 w-40"
          resizeMode="contain"
        />

        {/* Question */}
        <Text className="mb-4 text-center text-[28px] font-bold tracking-[-0.5px] text-[#1E1B3A]">
          Do you have colour blindness?
        </Text>

        {/* Supporting Text */}
        <Text className="mb-10 max-w-[330px] text-center text-[17px] leading-6 text-[#6B6B80]">
          We can adjust the colours in KARA to make learning easier for you.
        </Text>

        {/* Buttons */}
        <View className="w-full max-w-[330px] flex-row justify-between">

          {/* Yes Button */}
          <TouchableOpacity
            onPress={handleYes}
            activeOpacity={0.8}
            className="mr-2 flex-1 items-center rounded-2xl bg-[#0072B2] py-4"
          >
            <Text className="text-[18px] font-bold text-white">
              Yes, optimize
            </Text>
          </TouchableOpacity>

          {/* No Button */}
          <TouchableOpacity
            onPress={handleNo}
            activeOpacity={0.8}
            className="ml-2 flex-1 items-center rounded-2xl border-2 border-[#7C3AED] bg-transparent py-4"
          >
            <Text className="text-[18px] font-bold text-[#7C3AED]">
              No, thanks
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

export default ColorblindRequest;