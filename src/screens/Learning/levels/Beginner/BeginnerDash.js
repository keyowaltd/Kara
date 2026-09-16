import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

// Images
import heartImage from '../../../../assets/Begheart.png';
import Point from '../../../../assets/BackIcon.png';
import Organs from '../../../../assets/Organs.png';
import Illness from '../../../../assets/Illness.png';
import Body from '../../../../assets/body.png';
import Setting from '../../../../assets/Setting.png';
import progress from '../../../../assets/progress.png';
import learn from '../../../../assets/learn.png';
import topics from '../../../../assets/topics.png';
import home from '../../../../assets/home.png';
import ChooseLevel from '../../ChooseLevel';
import Points from '../../../../assets/point.png';
import Organ from './OrganScreen';

const BeginnerDashboard = () => {
  const [showChooseLevel, setShowChooseLevel] = useState(false);
  const [showOrgan, setShowOrgan] = useState(false);

  if (showChooseLevel) {
    return <ChooseLevel />;
  }

  if (showOrgan) {
    return <Organ />;
  }

  return (
    <View className="flex-1 bg-[#F8F7FF]">
      {/* Main Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 34,
          paddingBottom: 110,
        }}
      >
        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <View className="flex-row items-center justify-between">
          {/* Welcome */}
          <View>
            <Text className="text-[14px] text-[#9189B0]">Welcome back,</Text>

            <Text className="mt-1 text-[24px] font-bold text-[#24203F]">
              Tommy! 🫀
            </Text>
          </View>

          {/* Level + Notification */}
          <View className="flex-row items-center">
            {/* Beginner Badge */}
            <View className="mr-3 h-[36px] rounded-full bg-[#00A878] px-4 items-center justify-center">
              <Text className="text-[13px] font-semibold text-white">
                🌱 Beginner
              </Text>
            </View>

            {/* Notification */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowChooseLevel(true)}
              className="h-[40px] w-[40px] items-center justify-center rounded-full"
            >
              <Image source={Point} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ===================================================== */}
        {/* CONTINUE LEARNING */}
        {/* ===================================================== */}

        <Text className="mt-7 text-[17px] font-bold text-[#292544]">
          Continue Learning
        </Text>

        {/* Heart Learning Card */}
        <TouchableOpacity
          activeOpacity={0.85}
          className="mt-3 min-h-[110px] w-full flex-row items-center rounded-[24px] border border-[#DCEAF3] bg-white px-5"
        >
          {/* Heart Image */}
          <View className="h-[75px] w-[75px] items-center justify-center">
            <Image
              source={heartImage}
              resizeMode="contain"
              className="h-[72px] w-[72px]"
            />
          </View>

          {/* Course Information */}
          <View className="ml-4 flex-1">
            <Text className="text-[17px] font-bold text-[#292544]">
              Heart
            </Text>

            <Text className="mt-0.5 text-[13px] text-[#81799F]">
              The circulatory system
            </Text>

            {/* Progress Bar */}
            <View className="mt-2 h-[8px] w-full overflow-hidden rounded-full bg-[#EDEAF7]">
              <View
                className="h-full rounded-full bg-[#E56A00]"
                style={{ width: '70%' }}
              />
            </View>

            <Text className="mt-1 text-[11px] text-[#81799F]">
              70% complete
            </Text>
          </View>
        </TouchableOpacity>

        {/* ===================================================== */}
        {/* EXPLORE TOPICS */}
        {/* ===================================================== */}

        <Text className="mt-7 text-[17px] font-bold text-[#292544]">
          Explore Topics
        </Text>

        <View className="mt-3 flex-row justify-between">
          {/* Organs */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setShowOrgan(true)}
            className="h-[108px] w-[31.5%] items-center justify-center rounded-[18px] border border-[#DCEAF3] bg-white px-2"
          >
            <Image source={Organs} resizeMode="contain" />

            <Text className="mt-3 text-center text-[12px] text-[#292544]">
              Organs
            </Text>
          </TouchableOpacity>

          {/* Body Systems */}
          <TouchableOpacity
            activeOpacity={0.85}
            className="h-[108px] w-[31.5%] items-center justify-center rounded-[18px] border border-[#DCEAF3] bg-white px-2"
          >
            <Image source={Body} resizeMode="contain" />

            <Text className="mt-3 text-center text-[12px] text-[#292544]">
              Body Systems
            </Text>
          </TouchableOpacity>

          {/* Illnesses & Diseases */}
          <TouchableOpacity
            activeOpacity={0.85}
            className="h-[108px] w-[31.5%] items-center justify-center rounded-[18px] border border-[#DCEAF3] bg-white px-2"
          >
            <Image source={Illness} resizeMode="contain" />

            <Text className="mt-2 text-center text-[11px] leading-4 text-[#292544]">
              Illnesses &
            </Text>

            <Text className="text-center text-[11px] leading-4 text-[#292544]">
              Diseases
            </Text>
          </TouchableOpacity>
        </View>

        {/* ===================================================== */}
        {/* TODAY'S QUIZ */}
        {/* ===================================================== */}

        <View className="mt-6 h-[151px] overflow-hidden rounded-[25px] bg-[#397BB5]">
          {/* Gradient-like background blocks */}
          <View className="absolute right-[-30px] top-[-20px] h-[190px] w-[180px] rounded-full bg-[#B06D9C] opacity-80" />

          <View className="px-5 pt-5">
            <Text className="text-[18px] font-bold text-white">
              Today's Quiz 🧠
            </Text>

            <Text className="mt-1 text-[13px] text-[#E7E9F6]">
              Test your knowledge and earn XP!
            </Text>

            {/* Start Quiz */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="mt-4 h-[45px] w-[116px] items-center justify-center rounded-full bg-white"
            >
              <Text className="text-[15px] font-bold text-[#007DB8]">
                Start Quiz
              </Text>
            </TouchableOpacity>
          </View>

          {/* Target */}
          <View className="absolute bottom-[-6px] right-3">
            <Image
              source={Points}
              resizeMode="contain"
            
            />
          </View>
        </View>

        {/* ===================================================== */}
        {/* KARA AI */}
        {/* ===================================================== */}

        <TouchableOpacity
          disabled={true}
          activeOpacity={0.8}
          className="mt-10 h-[47px] w-[173px] self-center items-center justify-center rounded-xl bg-[#D9F4EF]"
        >
          <Text className="text-[15px] font-bold text-white">
            Ask Kara AI
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* ===================================================== */}
      {/* BOTTOM NAVIGATION */}
      {/* ===================================================== */}

      <View className="absolute bottom-10 left-0 right-0 h-[72px] border-t border-[#DCEAF3] bg-white">
        <View className="flex-1 flex-row items-center justify-around">
          {/* Home */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="items-center justify-center"
          >
            <Image
              source={home}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text className="mt-1 text-[11px] font-semibold text-[#008FD3]">
              Home
            </Text>
          </TouchableOpacity>

          {/* Topics */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="items-center justify-center"
          >
            <Image
              source={topics}
              resizeMode="contain"
              className="h-[22px] w-[22px]"
            />

            <Text className="mt-1 text-[11px] text-[#8B80B0]">
              Topics
            </Text>
          </TouchableOpacity>

          {/* Learn */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="items-center justify-center"
          >
            <Image
              source={learn}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text className="mt-1 text-[11px] text-[#8B80B0]">
              Learn
            </Text>
          </TouchableOpacity>

          {/* Progress */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="items-center justify-center"
          >
            <Image
              source={progress}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text className="mt-1 text-[11px] text-[#8B80B0]">
              Progress
            </Text>
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="items-center justify-center"
          >
            <Image
              source={Setting}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text className="mt-1 text-[11px] text-[#8B80B0]">
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BeginnerDashboard;