import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

// =====================================================
// TOPIC IMAGES
// =====================================================

import Organs from '../../assets/Organs.png';
import Illness from '../../assets/Illness.png';
import Body from '../../assets/body.png';

// =====================================================
// BOTTOM NAVIGATION IMAGES
// =====================================================

import Setting from '../../assets/Setting.png';
import progress from '../../assets/progress.png';
import learn from '../../assets/learn.png';
import topics from '../../assets/topics.png';
import home from '../../assets/home.png';

// =====================================================
// LINKED PAGES
// =====================================================

import Home from '../../screens/Dashboard/Dashboard';
import OrganScreen from '../Learning/levels/Beginner/OrganScreen';
import Settings from '../Progress/Settings';
import Progress from '../Learning/MyProgress';

const Topics = () => {
  const [activeTab, setActiveTab] = useState('Topics');

  // =====================================================
  // BOTTOM NAVIGATION STATES
  // =====================================================

  const [showHome, setShowHome] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // =====================================================
  // DIRECT PAGE LINKING
  // =====================================================

  if (showHome) {
    return <Home />;
  }

  if (showLearn) {
    return <OrganScreen />;
  }

  if (showProgress) {
    return <Progress />;
  }

  if (showSettings) {
    return <Settings />;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7FF]">
      <View className="flex-1">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <View className="relative h-[60px] flex-row items-center justify-between px-5">

          {/* Back Button */}
          <TouchableOpacity
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
              Topics
            </Text>
          </View>

          {/* More Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
          >
            <Text className="text-[22px] font-bold leading-5 text-[#292544]">
              ⋮
            </Text>
          </TouchableOpacity>

        </View>

        {/* ===================================================== */}
        {/* TOPICS */}
        {/* ===================================================== */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 100,
          }}
        >

          {/* ===================================================== */}
          {/* ORGANS */}
          {/* ===================================================== */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowLearn(true)}
            className="mt-1 h-[106px] w-full flex-row items-center rounded-[24px] border border-[#DCEAF3] bg-white px-5"
          >

            {/* Icon */}
            <View className="w-[68px] items-center justify-center">
              <Image
                source={Organs}
                resizeMode="contain"
            
              />
            </View>

            {/* Text */}
            <View className="flex-1">

              <Text className="text-[16px] font-bold text-[#292544]">
                Organs
              </Text>

              <Text className="mt-1 max-w-[230px] text-[13px] leading-5 text-[#7770A2]">
                Learn about different organs in the body
              </Text>

            </View>

            {/* Arrow */}
            <Text className="ml-2 text-[27px] font-light text-[#8C86B2]">
              ›
            </Text>

          </TouchableOpacity>

          {/* ===================================================== */}
          {/* BODY SYSTEMS */}
          {/* ===================================================== */}

          <TouchableOpacity
            activeOpacity={0.8}
            className="mt-4 h-[98px] w-full flex-row items-center rounded-[24px] border border-[#DCEAF3] bg-white px-5"
          >

            {/* Icon */}
            <View className="w-[68px] items-center justify-center">
              <Image
                source={Body}
                resizeMode="contain"
             
              />
            </View>

            {/* Text */}
            <View className="flex-1">

              <Text className="text-[16px] font-bold text-[#292544]">
                Body Systems
              </Text>

              <Text className="mt-1 text-[13px] leading-5 text-[#7770A2]">
                How systems work together
              </Text>

            </View>

            {/* Arrow */}
            <Text className="ml-2 text-[27px] font-light text-[#8C86B2]">
              ›
            </Text>

          </TouchableOpacity>

          {/* ===================================================== */}
          {/* ILLNESSES & DISEASES */}
          {/* ===================================================== */}

          <TouchableOpacity
            activeOpacity={0.8}
            className="mt-4 h-[98px] w-full flex-row items-center rounded-[24px] border border-[#DCEAF3] bg-white px-5"
          >

            {/* Icon */}
            <View className="w-[68px] items-center justify-center">
              <Image
                source={Illness}
                resizeMode="contain"
     
              />
            </View>

            {/* Text */}
            <View className="flex-1">

              <Text className="text-[16px] font-bold text-[#292544]">
                Illnesses & Diseases
              </Text>

              <Text className="mt-1 text-[13px] leading-5 text-[#7770A2]">
                Learn about common conditions
              </Text>

            </View>

            {/* Arrow */}
            <Text className="ml-2 text-[27px] font-light text-[#8C86B2]">
              ›
            </Text>

          </TouchableOpacity>

        </ScrollView>

        {/* ===================================================== */}
        {/* BOTTOM NAVIGATION */}
        {/* ===================================================== */}

        <View className="absolute bottom-10 left-0 right-0 h-[72px] border-t border-[#DCEAF3]">

          <View className="flex-1 flex-row items-center justify-around">

            {/* ================================================= */}
            {/* HOME */}
            {/* ================================================= */}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowHome(true)}
              className="items-center justify-center"
            >

              <Image
                source={home}
                resizeMode="contain"
                className="h-[23px] w-[23px]"
              />

              <Text className="mt-1 text-[11px] text-[#8B80B0]">
                Home
              </Text>

            </TouchableOpacity>

            {/* ================================================= */}
            {/* TOPICS */}
            {/* ================================================= */}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setActiveTab('Topics')}
              className="items-center justify-center"
            >

              <Image
                source={topics}
                resizeMode="contain"
                className="h-[22px] w-[22px]"
              />

              <Text className="mt-1 text-[11px] font-semibold text-[#008FD3]">
                Topics
              </Text>

            </TouchableOpacity>

            {/* ================================================= */}
            {/* LEARN */}
            {/* ================================================= */}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowLearn(true)}
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

            {/* ================================================= */}
            {/* PROGRESS */}
            {/* ================================================= */}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowProgress(true)}
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

            {/* ================================================= */}
            {/* SETTINGS */}
            {/* ================================================= */}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowSettings(true)}
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
    </SafeAreaView>
  );
};

export default Topics;