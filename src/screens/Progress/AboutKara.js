import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Karalogo from '../../assets/kara-logo.png';

const AboutKara = ({onBack}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F7FF]">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8F7FF"
      />

      <View className="flex-1">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <View className="relative mt-8 h-[65px] flex-row items-center px-5">

          {/* Back Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={onBack}
            className="z-50 h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
          >
            <Text className="text-[27px] font-light leading-7 text-[#292544]">
              ‹
            </Text>
          </TouchableOpacity>

          {/* Centered Title */}
          <View className="absolute left-0 right-0 items-center">
            <Text className="text-[20px] font-bold text-[#292544]">
              About KARA
            </Text>
          </View>

        </View>

        {/* ===================================================== */}
        {/* CONTENT */}
        {/* ===================================================== */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 40,
          }}
        >

          {/* ===================================================== */}
          {/* INTRODUCTION */}
          {/* ===================================================== */}

          <View className="mt-5 text-justify w-full rounded-[22px] border border-[#DCEAF3] bg-white px-5 py-6">

            <Text className="text-[22px] font-bold text-[#292544]">
              Discover. Explore. Understand.
            </Text>

            <Text className="mt-4 text-[14px] leading-[22px] text-[#7770A2]">
              KARA is an interactive learning experience designed to
              help young learners discover and understand the human body.
            </Text>

            <Text className="mt-4 text-[14px] leading-[22px] text-[#7770A2]">
              Explore organs, body systems, health topics and more
              through engaging visuals, interactive activities,
              animations and quizzes.
            </Text>

          </View>

          {/* ===================================================== */}
          {/* WHAT YOU CAN DO */}
          {/* ===================================================== */}

          <Text className="mt-7 text-[15px] font-semibold text-[#8179A7]">
            What You Can Do
          </Text>

          <View className="mt-3 w-full overflow-hidden rounded-[22px] border border-[#DCEAF3] bg-white">

            {/* Explore */}
            <View className="border-b border-[#DCEAF3] px-5 py-4">

              <Text className="text-[16px] font-bold text-[#292544]">
                Explore
              </Text>

              <Text className="mt-1 text-[13px] leading-[20px] text-[#7770A2]">
                Discover the organs and systems that make up the human body.
              </Text>

            </View>

            {/* Learn */}
            <View className="border-b border-[#DCEAF3] px-5 py-4">

              <Text className="text-[16px] font-bold text-[#292544]">
                Learn
              </Text>

              <Text className="mt-1 text-[13px] leading-[20px] text-[#7770A2]">
                Understand how different parts of the body work through
                clear, age-appropriate content.
              </Text>

            </View>

            {/* Interact */}
            <View className="border-b border-[#DCEAF3] px-5 py-4">

              <Text className="text-[16px] font-bold text-[#292544]">
                Interact
              </Text>

              <Text className="mt-1 text-[13px] leading-[20px] text-[#7770A2]">
                Explore anatomy through interactive models, animations
                and activities.
              </Text>

            </View>

            {/* Test Yourself */}
            <View className="border-b border-[#DCEAF3] px-5 py-4">

              <Text className="text-[16px] font-bold text-[#292544]">
                Test Yourself
              </Text>

              <Text className="mt-1 text-[13px] leading-[20px] text-[#7770A2]">
                Challenge your knowledge with fun, interactive quizzes.
              </Text>

            </View>

            {/* Track Your Progress */}
            <View className="px-5 py-4">

              <Text className="text-[16px] font-bold text-[#292544]">
                Track Your Progress
              </Text>

              <Text className="mt-1 text-[13px] leading-[20px] text-[#7770A2]">
                Monitor your learning, earn rewards and celebrate
                your achievements.
              </Text>

            </View>

          </View>

          {/* ===================================================== */}
          {/* LEARNING YOUR WAY */}
          {/* ===================================================== */}

          <Text className="mt-7 text-[15px] font-bold text-[#000]">
            Learning Your Way
          </Text>

          <View className="mt-3 w-full rounded-[22px] border border-[#DCEAF3] bg-white px-5 py-5">

            <Text className="text-[14px] leading-[22px] text-[#7770A2]">
              KARA adapts learning to different stages, helping learners
              progress from{' '}
              <Text className="font-bold text-[#292544]">
                Beginner
              </Text>
              {' '}to{' '}
              <Text className="font-bold text-[#292544]">
                Intermediate
              </Text>
              {' '}and{' '}
              <Text className="font-bold text-[#292544]">
                Practiced
              </Text>
              .
            </Text>

          </View>

          {/* ===================================================== */}
          {/* OUR VISION */}
          {/* ===================================================== */}

          <Text className="mt-7 text-[15px] font-bold text-[#000]">
            Our Vision
          </Text>

          <View className="mt-3 mb-5 w-full rounded-[22px] border border-[#DCEAF3] bg-white px-5 py-6">

            <Text className="text-[17px] leading-[25px] text-[#292544]">
              Making human-body learning engaging, interactive and
              accessible for every curious mind.
            </Text>

          </View>

        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

export default AboutKara;