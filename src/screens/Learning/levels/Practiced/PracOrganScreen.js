import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import heartImage from '../../../../assets/PracHeart.png';
import Liver from '../../../../assets/Liver.png';
import Kidneys from '../../../../assets/Kidney.png';
import Brain from '../../../../assets/Brain.png';
import Pancreas from '../../../../assets/Pancreas.png';
import Stomach from '../../../../assets/Stomach.png';
import Lungs from '../../../../assets/Lung.png';
import BeginnerDash from './PracDash';
import HeartDash from './PracDash';
import Setting from '../../../../assets/Setting.png';
import progress from '../../../../assets/progress.png';
import learn from '../../../../assets/learn.png';
import topics from '../../../../assets/topics.png';
import home from '../../../../assets/home.png';

import Topics from '../../../Topics/Topic';
import Home from '../../../Dashboard/Dashboard';
import OrganScreen from '../../levels/Intermediate/IntOrganScreen';
import Settings from '../../../Progress/Settings';
import Progress from '../../MyProgress';
import KaraAI from '../../../AI/Ai';

const Organ = () => {
  const [showBeginnerDash, setShowBeginnerDash] = useState(false);
  const [showHeartDash, setShowHeartDash] = useState(false);

  // Bottom navigation states
  const [showHome, setShowHome] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  if (showBeginnerDash) {
    return <BeginnerDash />;
  }

  if (showHeartDash) {
    return <HeartDash />;
  }

  // Bottom navigation pages
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
    return <Progress />;
  }

  if (showSettings) {
    return <Settings />;
  }

  const organs = [
    {
      name: 'Heart',
      description: "The body's tireless pump",
      image: heartImage,
    },
    {
      name: 'Lungs',
      description: 'Where you breathe in life',
      image: Lungs,
    },
    {
      name: 'Stomach',
      description: 'The food-mixing machine',
      image: Stomach,
    },
    {
      name: 'Liver',
      description: "The body's chemical factory",
      image: Liver,
    },
    {
      name: 'Kidneys',
      description: 'The blood-cleaning duo',
      image: Kidneys,
    },
    {
      name: 'Brain',
      description: "The body's control center",
      image: Brain,
    },
    {
      name: 'Pancreas',
      description: 'The sugar balancer',
      image: Pancreas,
    },
  ];

  return (
    <View className="flex-1 bg-[#F8F7FF]">

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <View className="relative mt-5 h-[60px] flex-row items-center px-4">

        {/* Back Button */}
        <TouchableOpacity
          activeOpacity={0.6}
          onPressIn={() => setShowBeginnerDash(true)}
          className="z-50 h-10 w-10 items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
        >
          <Text className="text-[28px] leading-[30px] text-[#7770A2]">
            ‹
          </Text>
        </TouchableOpacity>

        {/* Title - Centered */}
        <Text className="absolute left-0 right-0 text-center text-[20px] font-bold text-[#292544]">
          Organs
        </Text>

      </View>

      {/* ===================================================== */}
      {/* ORGAN LIST */}
      {/* ===================================================== */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 130,
        }}
      >

        {organs.map((organ, index) => (
          <TouchableOpacity
            key={organ.name}
            activeOpacity={0.8}
            onPress={
              index === 0
                ? () => setShowHeartDash(true)
                : undefined
            }
            className={`h-[74px] w-full flex-row items-center rounded-2xl border border-[#DCEAF3] bg-white px-4 ${
              index === 0 ? 'mt-0' : 'mt-3'
            }`}
          >

            {/* Organ Image */}
            <View className="h-[54px] w-[54px] items-center justify-center">
              <Image
                source={organ.image}
                resizeMode="contain"
                className="h-[50px] w-[50px]"
              />
            </View>

            {/* Text */}
            <View className="ml-3 flex-1">
              <Text className="text-[16px] font-semibold text-[#292544]">
                {organ.name}
              </Text>

              <Text className="mt-1 text-[12px] text-[#827BA8]">
                {organ.description}
              </Text>
            </View>

            {/* Arrow */}
            <Text className="text-[28px] font-light text-[#8179A7]">
              ›
            </Text>

          </TouchableOpacity>
        ))}

        {/* Ask Kara AI */}
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={true}
          className="mt-8 h-[40px] w-[173px] self-center items-center justify-center rounded-xl bg-[#D8F4EF]"
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
            onPressIn={() => setShowHome(true)}
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
            onPressIn={() => setShowTopics(true)}
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
            onPressIn={() => setShowLearn(true)}
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
            onPressIn={() => setShowProgress(true)}
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
            onPressIn={() => setShowSettings(true)}
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

export default Organ;