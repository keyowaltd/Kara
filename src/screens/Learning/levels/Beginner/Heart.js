import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import heartImage from '../../../../assets/Begheart.png';
import LearnHeart from './DetailedHeart';
import SelectOrgan from './OrganScreen';

const Heart = () => {
  const [showLearnHeart, setShowLearnHeart] = useState(false);
  const [showOrganScreen, setShowOrganScreen] = useState(false);

  if (showLearnHeart) {
    return <LearnHeart />;
  }

  if (showOrganScreen) {
    return <SelectOrgan />;
  }

  return (
    <View className="flex-1 bg-[#F8F7FF]">
      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 12,
          paddingBottom: 100,
        }}
      >
        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

       <View className="relative mt-5 h-[60px] flex-row items-center ">
  {/* Back Button */}
  <TouchableOpacity
    onPress={() => setShowOrganScreen(true)}
    activeOpacity={0.8}
    className="h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
  >
    <Text className="text-[27px] font-light leading-7 text-[#292544]">
      ‹
    </Text>
  </TouchableOpacity>

  {/* Centered Title */}
  <View className="absolute left-0 right-0 items-center">
    <Text className="text-[20px] font-bold text-[#292544]">
      Heart
    </Text>
  </View>
</View>

        {/* ===================================================== */}
        {/* HEART IMAGE */}
        {/* ===================================================== */}

        <View className="mt-5 h-[220px] w-full items-center justify-center rounded-[25px] bg-white">
          <Image
            source={heartImage}
            resizeMode="contain"
            className="h-[205px] w-[205px]"
          />
        </View>

        {/* ===================================================== */}
        {/* HEART INFORMATION */}
        {/* ===================================================== */}

        <View className="mt-6">
          <Text className="text-[22px] font-bold text-[#292544]">Heart</Text>

          <Text className="mt-2 text-[16px] leading-6 text-[#8983AA]">
            The heart is a muscular organ about the size of your fist. It pumps
            blood to all parts of your body, delivering oxygen and nutrients to
            every cell.
          </Text>
        </View>

        {/* ===================================================== */}
        {/* PROGRESS */}
        {/* ===================================================== */}

        <View className="mt-5 rounded-[18px] border border-[#DCEAF3] bg-white px-4 py-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-[13px] font-medium text-[#292544]">
              You've learned
            </Text>

            <Text className="text-[13px] font-semibold text-[#E56500]">
              70%
            </Text>
          </View>

          {/* Progress Bar */}
          <View className="mt-3 h-[10px] w-full overflow-hidden rounded-full bg-[#EDEAF7]">
            <View
              className="h-full rounded-full bg-[#E56500]"
              style={{ width: '70%' }}
            />
          </View>
        </View>

        {/* ===================================================== */}
        {/* ACTION BUTTONS */}
        {/* ===================================================== */}

        <View className="mt-6 flex-row justify-between">
          {/* Learn */}
          <TouchableOpacity
            onPress={() => setShowLearnHeart(true)}
            activeOpacity={0.8}
            className="h-[68px] w-[31.5%] items-center justify-center rounded-[17px] bg-[#00A878]"
          >
            <Text className="text-[21px] text-white">♧</Text>

            <Text className="mt-1 text-[13px] font-bold text-white">
              Learn
            </Text>
          </TouchableOpacity>

          {/* Quiz */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-[68px] w-[31.5%] items-center justify-center rounded-[17px] bg-[#007DB8]"
          >
            <Text className="text-[21px] text-white">?</Text>

            <Text className="mt-1 text-[13px] font-bold text-white">
              Quiz
            </Text>
          </TouchableOpacity>

          {/* Dissect */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-[68px] w-[31.5%] items-center justify-center rounded-[17px] bg-[#007DB8]"
          >
            <Text className="text-[21px] text-white">✂</Text>

            <Text className="mt-1 text-[13px] font-bold text-white">
              Dissect
            </Text>
          </TouchableOpacity>
        </View>

        {/* ===================================================== */}
        {/* KARA AI */}
        {/* ===================================================== */}

        <TouchableOpacity
          disabled={true}
          activeOpacity={0.8}
          className="mt-20 h-[47px] w-[173px] self-center items-center justify-center rounded-xl bg-[#D9F4EF]"
        >
          <Text className="text-[15px] font-bold text-white">
            Ask Kara AI
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Heart;