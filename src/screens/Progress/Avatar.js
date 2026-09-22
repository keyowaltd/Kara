import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Avatar1 from '../../assets/Avatar1.png';
import Avatar2 from '../../assets/Avatar2.png';
import Avatar3 from '../../assets/Avatar3.png';
import Avatar4 from '../../assets/Avatar4.png';
import Avatar5 from '../../assets/Avatar5.png';

const Avatar = ({
  selectedAvatar: initialAvatar = 1,
  onSaveAvatar,
  onBack,
}) => {
  const [selectedAvatar, setSelectedAvatar] =
    useState(initialAvatar);

  const avatars = [
    {
      id: 1,
      image: Avatar1,
    },
    {
      id: 2,
      image: Avatar2,
    },
    {
      id: 3,
      image: Avatar3,
    },
    {
      id: 4,
      image: Avatar4,
    },
    {
      id: 5,
      image: Avatar5,
    },
  ];

  const handleSaveAvatar = () => {
    if (onSaveAvatar) {
      onSaveAvatar(selectedAvatar);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7FF]">
      <View className="flex-1">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <View className="relative h-[60px] flex-row items-center px-5">

          {/* Back Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={onBack}
            className="h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
          >
            <Text className="text-[27px] font-light leading-7 text-[#292544]">
              ‹
            </Text>
          </TouchableOpacity>

          {/* Centered Title */}
          <View className="absolute left-0 right-0 items-center">
            <Text className="text-[20px] font-bold text-[#292544]">
              Choose Avatar
            </Text>
          </View>

        </View>

        {/* ===================================================== */}
        {/* SUBTITLE */}
        {/* ===================================================== */}

        <Text className="mt-1 text-center text-[13px] text-[#8983AA]">
          Pick an avatar that feels like you.
        </Text>

        {/* ===================================================== */}
        {/* AVATAR GRID */}
        {/* ===================================================== */}

        <View className="mt-10 flex-row flex-wrap px-5">

          {avatars.map(avatar => {
            const isSelected = selectedAvatar === avatar.id;

            return (
              <TouchableOpacity
                key={avatar.id}
                activeOpacity={0.8}
                onPress={() => setSelectedAvatar(avatar.id)}
                className={`relative mb-4 mr-5 h-[72px] w-[72px] items-center justify-center rounded-[15px] border ${
                  isSelected
                    ? 'border-[#007DB8] bg-[#EAF7FC]'
                    : 'border-[#CFCED8] bg-transparent'
                }`}
              >

                {/* Avatar Image */}
                <Image
                  source={avatar.image}
                  resizeMode="contain"
                  className="h-[58px] w-[58px] rounded-full"
                />

                {/* Selected Check */}
                {isSelected && (
                  <View className="absolute -right-[5px] -top-[8px] h-[24px] w-[24px] items-center justify-center rounded-full bg-[#007DB8]">
                    <Text className="text-[14px] font-bold text-white">
                      ✓
                    </Text>
                  </View>
                )}

              </TouchableOpacity>
            );
          })}

        </View>

        {/* ===================================================== */}
        {/* SAVE AVATAR */}
        {/* ===================================================== */}

        <View className="absolute bottom-[36px] left-5 right-5">

          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={handleSaveAvatar}
            className="h-[57px] w-full items-center justify-center rounded-[17px] bg-[#087DB7]"
          >
            <Text className="text-[16px] font-bold text-white">
              Save Avatar
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
};

export default Avatar;