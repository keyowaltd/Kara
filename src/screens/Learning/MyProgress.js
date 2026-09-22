import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Setting from '../../assets/Setting.png';
import progress from '../../assets/progress.png';
import learn from '../../assets/learn.png';
import topics from '../../assets/topics.png';
import home from '../../assets/home.png';

import Topics from '../Topics/Topic';
import Home from '../Dashboard/Dashboard';
import OrganScreen from '../Learning/levels/Beginner/OrganScreen';
import Settings from '../Progress/Settings';
import BackDashoard from '../Learning/levels/Beginner/BeginnerDash';

import LearninigHistory from './LearningHistory';

const Progress = () => {
  const [activeTab, setActiveTab] = useState('Progress');
  const [showLearningHistory, setShowLearningHistory] = useState(false);

  // Bottom navigation states
  const [showHome, setShowHome] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showBeginnerDashboard, setShowBeginnerDashboard] = useState(false);

  // ================= BEGINNER DASHBOARD =================
  if (showBeginnerDashboard) {
    return <BackDashoard />;
  }

  // ================= LEARNING HISTORY =================
  if (showLearningHistory) {
    return <LearninigHistory />;
  }

  // ================= BOTTOM NAVIGATION =================
  if (showHome) {
    return <Home />;
  }

  if (showTopics) {
    return <Topics />;
  }

  if (showLearn) {
    return <OrganScreen />;
  }

  if (showSettings) {
    return <Settings />;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7FF]">
      <View className="flex-1">

        {/* ================= HEADER ================= */}

        <View className="relative mt-7 h-[60px] flex-row items-center px-5">

          {/* Back Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowBeginnerDashboard(true)}
            className="h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
          >
            <Text className="text-[25px] font-light text-[#26324A]">
              ‹
            </Text>
          </TouchableOpacity>

          {/* Centered Title */}
          <View className="absolute left-0 right-0 items-center">
            <Text className="text-[20px] font-bold text-[#25243A]">
              My Progress
            </Text>
          </View>

        </View>

        {/* ================= MAIN CONTENT ================= */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >

          {/* ================= OVERALL PROGRESS ================= */}

          <View className="mx-5 mt-1 rounded-[25px] bg-[#087DB7] px-5 py-6">

            <View className="flex-row items-center justify-between">

              <Text className="text-[16px] text-white">
                Overall Progress
              </Text>

              <Text className="text-[24px] font-bold text-white">
                82%
              </Text>

            </View>

            {/* Progress Bar */}
            <View className="mt-4 h-[12px] w-full overflow-hidden rounded-full bg-[#55A2CA]">

              <View
                className="h-full rounded-full bg-white"
                style={{ width: '82%' }}
              />

            </View>

          </View>

          {/* ================= BY TOPIC ================= */}

          <View className="mx-5 mt-7">

            <Text className="mb-4 text-[16px] font-bold text-[#28263D]">
              By Topic
            </Text>

            {/* Organs */}
            <View className="mb-5">

              <View className="mb-2 flex-row items-center justify-between">

                <Text className="text-[14px] text-[#35334A]">
                  🫀 Organs
                </Text>

                <Text className="text-[13px] font-bold text-[#E85D04]">
                  90%
                </Text>

              </View>

              <View className="h-[8px] w-full overflow-hidden rounded-full bg-[#EEEEF8]">

                <View
                  className="h-full rounded-full bg-[#E85D04]"
                  style={{ width: '90%' }}
                />

              </View>

            </View>

            {/* Body Systems */}
            <View className="mb-5">

              <View className="mb-2 flex-row items-center justify-between">

                <Text className="text-[14px] text-[#35334A]">
                  🫁 Body Systems
                </Text>

                <Text className="text-[13px] font-bold text-[#087DB7]">
                  70%
                </Text>

              </View>

              <View className="h-[8px] w-full overflow-hidden rounded-full bg-[#EEEEF8]">

                <View
                  className="h-full rounded-full bg-[#087DB7]"
                  style={{ width: '70%' }}
                />

              </View>

            </View>

            {/* Illnesses & Diseases */}
            <View>

              <View className="mb-2 flex-row items-center justify-between">

                <Text className="text-[14px] text-[#35334A]">
                  🦠 Illnesses & Diseases
                </Text>

                <Text className="text-[13px] font-bold text-[#00A878]">
                  60%
                </Text>

              </View>

              <View className="h-[8px] w-full overflow-hidden rounded-full bg-[#EEEEF8]">

                <View
                  className="h-full rounded-full bg-[#00A878]"
                  style={{ width: '60%' }}
                />

              </View>

            </View>

          </View>

          {/* ================= BADGES ================= */}

          <View className="mx-5 mt-7">

            <Text className="mb-4 text-[16px] font-bold text-[#28263D]">
              Badges
            </Text>

            <View className="flex-row justify-between">

              {/* Organ Explorer */}
              <View className="h-[80px] w-[31%] items-center justify-center rounded-[16px] border border-[#D9E9F2] bg-white">

                <Text className="text-[24px]">
                  🥇
                </Text>

                <Text className="mt-1 text-[11px] text-[#35334A]">
                  Organ Explorer
                </Text>

              </View>

              {/* Quiz Master */}
              <View className="h-[80px] w-[31%] items-center justify-center rounded-[16px] border border-[#D9E9F2] bg-white">

                <Text className="text-[24px]">
                  🏅
                </Text>

                <Text className="mt-1 text-[11px] text-[#35334A]">
                  Quiz Master
                </Text>

              </View>

              {/* Anatomy Star - Locked */}
              <View className="h-[80px] w-[31%] items-center justify-center rounded-[16px] border border-[#E7E7F1] bg-[#FAFAFD]">

                <Text className="text-[29px] opacity-50">
                  ☆
                </Text>

                <Text className="mt-1 text-[11px] text-[#9B9AA8]">
                  Anatomy Star
                </Text>

              </View>

            </View>

          </View>

          {/* ================= LEARNING HISTORY ================= */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => setShowLearningHistory(true)}
            className="mx-5 mt-6 h-[54px] flex-row items-center justify-center rounded-[16px] border border-[#D3E5F0] bg-transparent"
          >

            <Text className="mr-2 text-[20px] text-[#087DB7]">
              ◷
            </Text>

            <Text className="text-[16px] font-medium text-[#087DB7]">
              View Learning History
            </Text>

          </TouchableOpacity>

        </ScrollView>

        {/* ================= BOTTOM NAVIGATION ================= */}

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

              <Text className="mt-1 text-[11px] text-[#8A82AE]">
                Home
              </Text>

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

              <Text className="mt-1 text-[11px] text-[#8A82AE]">
                Topics
              </Text>

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

              <Text className="mt-1 text-[11px] text-[#8A82AE]">
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

              <Text className="mt-1 text-[11px] font-medium text-[#087DB7]">
                Progress
              </Text>

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

              <Text className="mt-1 text-[11px] text-[#8A82AE]">
                Settings
              </Text>

            </TouchableOpacity>

          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Progress;