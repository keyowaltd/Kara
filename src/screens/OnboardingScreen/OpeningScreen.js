import React from 'react';
import {View, Text} from 'react-native';

const OpeningScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#F8F7FF] px-6 pt-20">

      {/* Main content */}
      <View className="-mt-20 items-center">

        {/* KARA Logo */}
        <View className="mb-1 flex-row">
          <Text className="text-[43px] font-black tracking-[-5px] text-[#7C3AED]">
            K
          </Text>

          <Text className="text-[43px] font-black tracking-[-5px] text-[#7C3AED]">
            A
          </Text>

          <Text className="text-[43px] font-black tracking-[-5px] text-[#7C3AED]">
            R
          </Text>

          <Text className="text-[43px] font-black tracking-[-5px] text-[#7C3AED]">
            A
          </Text>
        </View>

        {/* Tagline */}
        <Text className="text-center text-[23px] font-bold tracking-[-0.5px] text-[#20203A]">
          Learn the human body,{' '}
          <Text className="text-[#008FD3]">
            your way.
          </Text>
        </Text>

      </View>
    </View>
  );
};

export default OpeningScreen;