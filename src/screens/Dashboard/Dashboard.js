import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import karaLogo from '../../assets/kara-logo.png';

// Change these filenames to match your actual assets
import dashboardImage from '../../assets/dashboardImage.png';
import ModelsIcon from '../../assets/ModelsIcon.png';
import AudioIcon from '../../assets/AudioIcon.png';
import PracticeIcon from '../../assets/PracticeIcon.png';
import ProgressIcon from '../../assets/ProgressIcon.png';

import Learning from '../../screens/Learning/ChooseLevel';

const Dashboard = () => {
  const [showLearning, setShowLearning] = useState(false);

  // Open Learning / Choose Level screen
  if (showLearning) {
    return <Learning />;
  }

  return (
    <View className="flex-1 bg-[#F8F7FF]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >

        {/* KARA Logo */}
        <Image
          source={karaLogo}
          resizeMode="contain"
          className="h-12 w-32"
        />

        {/* Welcome Text */}
        <View className="mt-5">
          <Text className="text-[24px] font-bold text-[#24203F]">
            Hi there! 👋
          </Text>

          <Text className="mt-1 text-[23px] font-bold text-[#24203F]">
            Learn the human body,{' '}
            <Text className="text-[#0072B2]">
              your way.
            </Text>
          </Text>
        </View>

        {/* Divider */}
        <View className="mt-4 h-[1px] w-full bg-[#E7E3F2]" />

        {/* Anatomy Image */}
        <View className="mt-2 h-[210px] w-full overflow-hidden rounded-[22px] bg-white">
          <Image
            source={dashboardImage}
            resizeMode="cover"
            className="h-full w-full"
          />
        </View>

        {/* Feature Cards */}
        <View className="mt-6 flex-row justify-between">

          {/* 3D Models */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-[111px] w-[48%] rounded-2xl border border-[#DCEAF3] bg-white px-3 py-4"
          >
            <Image
              source={ModelsIcon}
              resizeMode="contain"
            />

            <Text className="mt-3 text-[16px] font-semibold text-[#292544]">
              3D Models
            </Text>

            <Text className="mt-1 text-[12px] text-[#9189B0]">
              Explore in 3D
            </Text>
          </TouchableOpacity>

          {/* Audio Lessons */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-[111px] w-[48%] rounded-2xl border border-[#DCEAF3] bg-white px-3 py-4"
          >
            <Image
              source={AudioIcon}
              resizeMode="contain"
            />

            <Text className="mt-3 text-[16px] font-semibold text-[#292544]">
              Audio Lessons
            </Text>

            <Text className="mt-1 text-[12px] text-[#9189B0]">
              Listen & learn
            </Text>
          </TouchableOpacity>

        </View>

        {/* Practice + Progress */}
        <View className="mt-4 flex-row justify-between">

          {/* Practice */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-[111px] w-[48%] rounded-2xl border border-[#DCEAF3] bg-white px-3 py-4"
          >
            <Image
              source={PracticeIcon}
              resizeMode="contain"
            />

            <Text className="mt-3 text-[16px] font-semibold text-[#292544]">
              Practice
            </Text>

            <Text className="mt-1 text-[12px] text-[#9189B0]">
              Interactive quizzes
            </Text>
          </TouchableOpacity>

          {/* Progress */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-[111px] w-[48%] rounded-2xl border border-[#DCEAF3] bg-white px-3 py-4"
          >
            <Image
              source={ProgressIcon}
              resizeMode="contain"
            />

            <Text className="mt-3 text-[16px] font-semibold text-[#292544]">
              Progress
            </Text>

            <Text className="mt-1 text-[12px] text-[#9189B0]">
              Track your growth
            </Text>
          </TouchableOpacity>

        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => setShowLearning(true)}
          activeOpacity={0.8}
          className="mt-6 h-[57px] w-full items-center justify-center rounded-2xl bg-[#007DB8]"
        >
          <Text className="text-[16px] font-bold text-white">
            Get Started
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Dashboard;