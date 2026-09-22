import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import HeartImage from '../../../../assets/PracHeart.png';
import DropdownIon from '../../../../assets/DropdownIcon.png';
import HeartPage from './PracHeart';
import Quiz from '../../../Quiz/Quiz';

const Heart = () => {
  const [activeTab, setActiveTab] = useState('Learn');
  const [openPart, setOpenPart] = useState(null);
  const [showHeartPage, setShowHeartPage] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  if (showHeartPage) {
    return <HeartPage />;
  }

  if (showQuiz) {
    return <Quiz />;
  }

  const heartParts = [
    {
      id: 1,
      name: 'Right Atrium',
    },
    {
      id: 2,
      name: 'Left Atrium',
    },
    {
      id: 3,
      name: 'Right Ventricle',
    },
    {
      id: 4,
      name: 'Left Ventricle',
    },
  ];

  const handlePartPress = id => {
    setOpenPart(openPart === id ? null : id);
  };

  return (
    <View className="flex-1 bg-[#F8F7FF]">

      {/* Header */}
      <View
        style={{
          marginTop: (StatusBar.currentHeight || 0) + 5,
        }}
        className="h-[40px] flex-row items-center justify-center px-5"
      >

        {/* Back Button */}
        <TouchableOpacity
          activeOpacity={0.6}
          onPressIn={() => setShowHeartPage(true)}
          className="z-50 absolute left-4 h-9 w-9 items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
        >
          <Text className="text-[28px] leading-[28px] text-[#7770A2]">
            ‹
          </Text>
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-[20px] font-bold text-[#292544]">
          Heart
        </Text>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 110,
        }}
      >

        {/* Tabs */}
        <View className="h-[34px] w-full flex-row rounded-b-[15px] rounded-t-[15px] bg-[#EFECFA]">

          {/* Learn */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActiveTab('Learn')}
            className={`h-[34px] flex-1 items-center justify-center rounded-full ${
              activeTab === 'Learn' ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <Text
              className={`text-[14px] ${
                activeTab === 'Learn'
                  ? 'font-semibold text-[#008FD3]'
                  : 'text-[#827BA8]'
              }`}
            >
              Learn
            </Text>
          </TouchableOpacity>

          {/* Animation */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActiveTab('Animation')}
            className={`h-[34px] flex-1 items-center justify-center rounded-full ${
              activeTab === 'Animation' ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <Text
              className={`text-[14px] ${
                activeTab === 'Animation'
                  ? 'font-semibold text-[#008FD3]'
                  : 'text-[#827BA8]'
              }`}
            >
              Animation
            </Text>
          </TouchableOpacity>

          {/* Audio */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActiveTab('Audio')}
            className={`h-[34px] flex-1 items-center justify-center rounded-full ${
              activeTab === 'Audio' ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <Text
              className={`text-[14px] ${
                activeTab === 'Audio'
                  ? 'font-semibold text-[#008FD3]'
                  : 'text-[#827BA8]'
              }`}
            >
              Audio
            </Text>
          </TouchableOpacity>

        </View>

        {/* Learn Content */}
        {activeTab === 'Learn' && (
          <View>

            {/* Introduction */}
            <Text className="mt-4 text-[20px] font-bold text-[#292544]">
              The Heart
            </Text>

            <Text className="mt-1 text-[16px] leading-[26px] text-[#8A82AA]">
              The heart is a muscular organ about the size of your fist. It
              pumps blood to all parts of your body, delivering oxygen and
              nutrients to every cell.
            </Text>

            {/* Heart Image */}
            <View className="mt-3 h-[175px] w-[175px] self-center items-center justify-center overflow-hidden rounded-[25px] bg-white">
              <Image
                source={HeartImage}
                resizeMode="contain"
                className="h-[150px] w-[150px]"
              />
            </View>

            {/* Main Parts */}
            <Text className="mt-3 text-[16px] font-bold text-[#292544]">
              Main Parts
            </Text>

            <Text className="mt-1 text-[13px] text-[#8A82AA]">
              Tap a part to learn more about it.
            </Text>

            {/* Heart Parts */}
            <View className="mt-2">

              {heartParts.map(part => (
                <View key={part.id}>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handlePartPress(part.id)}
                    className="mb-2 h-[54px] w-full flex-row items-center rounded-2xl border border-[#DCEAF3] bg-white px-3"
                  >

                    {/* Number */}
                    <View className="h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E56A00]">
                      <Text className="text-[13px] font-semibold text-white">
                        {part.id}
                      </Text>
                    </View>

                    {/* Part Name */}
                    <Text className="ml-3 flex-1 text-[14px] text-[#292544]">
                      {part.name}
                    </Text>

                    {/* Arrow */}
                    <Image
                      source={DropdownIon}
                      resizeMode="contain"
                      className="h-[20px] w-[20px]"
                    />

                  </TouchableOpacity>

                  {/* Expanded Content */}
                  {openPart === part.id && (
                    <View className="mb-2 mt-[-2px] rounded-xl bg-[#EFECFA] px-4 py-3">
                      <Text className="text-[12px] leading-5 text-[#81799F]">
                        Tap here to learn more about the {part.name}.
                      </Text>
                    </View>
                  )}

                </View>
              ))}

            </View>

            {/* Test Yourself */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowQuiz(true)}
              className="mt-0 h-[56px] w-full items-center justify-center rounded-2xl bg-[#007DB8]"
            >
              <Text className="text-[16px] font-bold text-white">
                Test Yourself
              </Text>
            </TouchableOpacity>

          </View>
        )}

        {/* Animation Tab */}
        {activeTab === 'Animation' && (
          <View className="flex-1 items-center justify-center py-20">
            <Text className="text-[18px] font-bold text-[#292544]">
              Heart Animation
            </Text>

            <Text className="mt-2 text-center text-[14px] text-[#8A82AA]">
              Heart animation content will appear here.
            </Text>
          </View>
        )}

        {/* Audio Tab */}
        {activeTab === 'Audio' && (
          <View className="flex-1 items-center justify-center py-20">
            <Text className="text-[18px] font-bold text-[#292544]">
              Heart Audio
            </Text>

            <Text className="mt-2 text-center text-[14px] text-[#8A82AA]">
              Audio lesson content will appear here.
            </Text>
          </View>
        )}

      </ScrollView>
    </View>
  );
};

export default Heart;