import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';

import heartImage from '../../assets/Begheart.png';
import stomach from '../../assets/Stomach.png';
import lungs from '../../assets/Lung.png';
import circulatory from '../../assets/Begheart.png';

import Setting from '../../assets/Setting.png';
import progress from '../../assets/progress.png';
import learn from '../../assets/learn.png';
import topics from '../../assets/topics.png';
import home from '../../assets/home.png';

import Topics from '../Topics/Topic';
import Home from '../Dashboard/Dashboard';
import OrganScreen from '../Learning/levels/Beginner/OrganScreen';
import Settings from '../Progress/Settings';
import ProgressPage from './MyProgress';

const LearningHistory = () => {
  // Bottom navigation states
  const [showHome, setShowHome] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Bottom navigation page connections
  if (showHome) {
    return <Home />;
  }

  if (showTopics) {
    return <Topics />;
  }

  if (showLearn) {
    return <OrganScreen />;
  }

  if (showProgress) {
    return <ProgressPage />;
  }

  if (showSettings) {
    return <Settings />;
  }

  return (
    <View className="flex-1 bg-[#F8F7FF]">
      <StatusBar barStyle="dark-content" backgroundColor="#F8F7FF" />

      {/* Header */}
      <View className="relative mt-8 h-[60px] flex-row items-center px-4">
        {/* Back Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowProgress(true)}
          className="h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
        >
          <Text className="text-[27px] font-light leading-7 text-[#292544]">
            ‹
          </Text>
        </TouchableOpacity>

        {/* Centered Title */}
        <View className="absolute left-0 right-0 items-center">
          <Text className="text-[20px] font-bold text-[#292544]">
            Learning History
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 110,
        }}
      >
        {/* TODAY */}
        <Text className="mb-2 mt-1 text-[13px] font-medium text-[#7770A2]">
          Today
        </Text>

        {/* Heart */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="mb-2.5 h-[70px] w-full flex-row items-center rounded-2xl border border-[#DCEAF3] bg-white px-5"
        >
          <View className="w-[48px] items-center justify-center">
            <Image
              source={heartImage}
              resizeMode="contain"
              className="h-[40px] w-[40px]"
            />
          </View>

          <View className="flex-1">
            <Text className="text-[16px] font-bold text-[#292544]">Heart</Text>

            <Text className="mt-0.5 text-[12px] text-[#7770A2]">
              Quiz Score: 80%
            </Text>
          </View>

          <Text className="mr-4 text-[14px] font-bold text-[#E56B00]">80%</Text>

          <Text className="text-[25px] font-light text-[#8C86B2]">›</Text>
        </TouchableOpacity>

        {/* Lungs */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="mb-6 h-[70px] w-full flex-row items-center rounded-2xl border border-[#DCEAF3] bg-white px-5"
        >
          <View className="w-[48px] items-center justify-center">
            <Image
              source={lungs}
              resizeMode="contain"
              className="h-[40px] w-[40px]"
            />
          </View>

          <View className="flex-1">
            <Text className="text-[16px] font-bold text-[#292544]">Lungs</Text>

            <Text className="mt-0.5 text-[12px] text-[#7770A2]">Viewed</Text>
          </View>

          <Text className="mr-4 text-[14px] font-bold text-[#007DB8]">60%</Text>

          <Text className="text-[25px] font-light text-[#8C86B2]">›</Text>
        </TouchableOpacity>

        {/* YESTERDAY */}
        <Text className="mb-2 mt-0 text-[13px] font-medium text-[#7770A2]">
          Yesterday
        </Text>

        {/* Stomach */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="mb-2.5 h-[70px] w-full flex-row items-center rounded-2xl border border-[#DCEAF3] bg-white px-5"
        >
          <View className="w-[48px] items-center justify-center">
            <Image
              source={stomach}
              resizeMode="contain"
              className="h-[40px] w-[40px]"
            />
          </View>

          <View className="flex-1">
            <Text className="text-[16px] font-bold text-[#292544]">
              Stomach
            </Text>

            <Text className="mt-0.5 text-[12px] text-[#7770A2]">
              Quiz Score: 70%
            </Text>
          </View>

          <Text className="mr-4 text-[14px] font-bold text-[#E6A000]">70%</Text>

          <Text className="text-[25px] font-light text-[#8C86B2]">›</Text>
        </TouchableOpacity>

        {/* Circulatory System */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="h-[70px] w-full flex-row items-center rounded-2xl border border-[#DCEAF3] bg-white px-5"
        >
          <View className="w-[48px] items-center justify-center">
            <Image
              source={circulatory}
              resizeMode="contain"
              className="h-[40px] w-[40px]"
            />
          </View>

          <View className="flex-1">
            <Text className="text-[16px] font-bold text-[#292544]">
              Circulatory System
            </Text>

            <Text className="mt-0.5 text-[12px] text-[#7770A2]">Completed</Text>
          </View>

          <Text className="mr-4 text-[14px] font-bold text-[#E56B00]">
            100%
          </Text>

          <Text className="text-[25px] font-light text-[#8C86B2]">›</Text>
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
            onPressIn={() => setShowHome(true)}
            className="items-center justify-center"
          >
            <Image
              source={home}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text className="mt-1 text-[11px] text-[#8A82AE]">Home</Text>
          </TouchableOpacity>

          {/* Topics */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => setShowTopics(true)}
            className="items-center justify-center"
          >
            <Image
              source={topics}
              resizeMode="contain"
              className="h-[22px] w-[22px]"
            />

            <Text className="mt-1 text-[11px] text-[#8A82AE]">Topics</Text>
          </TouchableOpacity>

          {/* Learn */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => setShowLearn(true)}
            className="items-center justify-center"
          >
            <Image
              source={learn}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text className="mt-1 text-[11px] text-[#8A82AE]">Learn</Text>
          </TouchableOpacity>

          {/* Progress */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => setShowProgress(true)}
            className="items-center justify-center"
          >
            <Image
              source={progress}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text className="mt-1 text-[11px] text-[#8A82AE]">Progress</Text>
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => setShowSettings(true)}
            className="items-center justify-center"
          >
            <Image
              source={Setting}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text className="mt-1 text-[11px] text-[#8A82AE]">Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LearningHistory;
