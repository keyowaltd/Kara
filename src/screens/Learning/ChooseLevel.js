import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import karaLogo from '../../assets/kara-logo.png';

import BeginDash from '../../screens/Learning/levels/Beginner/BeginnerDash';
import IntermediateDash from '../../screens/Learning/levels/Intermediate/IntDash';
import PractDash from '../../screens/Learning/levels/Practiced/PracDash';

// Change these filenames if your actual character assets have different names
import beginnerIcon from '../../assets/BeginerIcon.png';
import intermediateIcon from '../../assets/IntermediateIcon.png';
import practicedIcon from '../../assets/practiced.png';

const ChooseLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const [showBeginner, setShowBeginner] = useState(false);
  const [showIntermediate, setShowIntermediate] = useState(false);
  const [showPracticed, setShowPracticed] = useState(false);

  if (showBeginner) {
    return <BeginDash />;
  }

  if (showIntermediate) {
    return <IntermediateDash />;
  }

  if (showPracticed) {
    return <PractDash />;
  }

  const levels = [
    {
      id: 'beginner',
      title: 'Beginner',
      description: 'New to anatomy — simple words and lots of pictures.',
      icon: beginnerIcon,
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'Know the basics — ready for more detail and quizzes.',
      icon: intermediateIcon,
    },
    {
      id: 'practiced',
      title: 'Practiced',
      description: 'Confident learner — advanced facts and tougher challenges.',
      icon: practicedIcon,
    },
  ];

  return (
    <View className="flex-1 bg-[#F7F6FD]">

      {/* KARA Logo */}
      <View className="items-center pt-7">
        <Image
          source={karaLogo}
          resizeMode="contain"
          className="h-[48px] w-[125px]"
        />
      </View>

      {/* Heading */}
      <View className="px-6 pt-5">

        <Text className="text-[23px] font-bold text-[#292449]">
          Choose your{' '}
          <Text className="text-[#008FD3]">
            learning level
          </Text>
        </Text>

        <Text className="mt-1 text-[16px] leading-6 text-[#928BAF]">
          We'll adjust lessons and quizzes to match you.
        </Text>

        <Text className="text-[16px] leading-6 text-[#928BAF]">
          You can change this anytime in Settings.
        </Text>

      </View>

      {/* Level Cards */}
      <View className="mx-6 mt-1 flex-1 rounded-t-[0px] bg-white px-0 pt-6">

        {levels.map(level => {
          const isSelected = selectedLevel === level.id;

          return (
            <TouchableOpacity
              key={level.id}
              onPress={() => setSelectedLevel(level.id)}
              activeOpacity={0.85}
              className={`mb-3 min-h-[98px] w-full flex-row items-center rounded-[25px] border ${
                isSelected
                  ? 'border-[#008FD3] bg-[#F8FCFF]'
                  : 'border-[#DCECF3] bg-white'
              } px-5`}
            >

              {/* Character */}
              <View className="mr-4 h-[58px] w-[48px] items-center justify-center">
                <Image
                  source={level.icon}
                  resizeMode="contain"
                  className="h-[52px] w-[45px]"
                />
              </View>

              {/* Text */}
              <View className="flex-1 pr-2">

                <Text className="text-[17px] font-bold text-[#292449]">
                  {level.title}
                </Text>

                <Text className="mt-0.5 text-[13px] leading-5 text-[#81799F]">
                  {level.description}
                </Text>

              </View>

              {/* Radio Button */}
              <View
                className={`h-6 w-6 items-center justify-center rounded-full border-2 ${
                  isSelected
                    ? 'border-[#008FD3]'
                    : 'border-[#DDEBF1]'
                }`}
              >
                {isSelected && (
                  <View className="h-3 w-3 rounded-full bg-[#008FD3]" />
                )}
              </View>

            </TouchableOpacity>
          );
        })}

      </View>

      {/* Continue Button */}
      <View className="px-6 pb-20 pt-6">

        <TouchableOpacity
          disabled={!selectedLevel}
          onPress={() => {
            if (selectedLevel === 'beginner') {
              setShowBeginner(true);
            }

            if (selectedLevel === 'intermediate') {
              setShowIntermediate(true);
            }

            if (selectedLevel === 'practiced') {
              setShowPracticed(true);
            }
          }}
          activeOpacity={0.8}
          className={`h-[56px] w-full items-center justify-center rounded-2xl ${
            selectedLevel
              ? 'bg-[#008FD3]'
              : 'bg-[#91BED9]'
          }`}
        >
          <Text className="text-[16px] font-bold text-white">
            Continue
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default ChooseLevel;