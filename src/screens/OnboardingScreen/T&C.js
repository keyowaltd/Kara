import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const TC = ({ onClose, onAccept }) => {
  return (
    <View className="flex-1">
      {/* T&C Panel */}
      <View className="flex-1 rounded-t-[28px] bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-6 pb-3">
          <View className="flex-row items-center">
            <Text className="mr-3 text-[22px] text-[#6C3DF5]">♢</Text>

            <Text className="text-[17px] font-bold text-[#24213F]">
              Terms & Conditions
            </Text>
          </View>

          {/* Close Button */}
          <TouchableOpacity
            onPress={onClose}
            activeOpacity={0.7}
            className="h-9 w-9 items-center justify-center rounded-full bg-[#F1EFFA]"
          >
            <Text className="text-[22px] text-[#24213F]">×</Text>
          </TouchableOpacity>
        </View>

        {/* Terms */}
        <ScrollView
          showsVerticalScrollIndicator={true}
          className="flex-1 px-5"
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        >
          <Text className="mt-2 text-[14px] leading-6 text-[#8983AA]">
            Please read these Terms & Conditions carefully before using KARA.
          </Text>

          <Text className="mt-5 text-[15px] font-bold text-[#24213F]">
            1. Welcome to KARA
          </Text>

          <Text className="mt-2 text-[13px] leading-5 text-[#8983AA]">
            KARA is a learning app that helps students explore human anatomy
            through lessons, animations, quizzes and interactive models. By
            logging in you agree to use KARA for educational purposes only.
          </Text>

          <Text className="mt-5 text-[15px] font-bold text-[#24213F]">
            2. Your Account
          </Text>

          <Text className="mt-2 text-[13px] leading-5 text-[#8983AA]">
            Keep your login details safe. You are responsible for activity on
            your account. Young learners should use KARA with the guidance of a
            parent, guardian or teacher.
          </Text>

          <Text className="mt-5 text-[15px] font-bold text-[#24213F]">
            3. Privacy & Data
          </Text>

          <Text className="mt-2 text-[13px] leading-5 text-[#8983AA]">
            We store your learning progress, quiz scores and preferences to
            personalise your experience. We never sell your personal data and we
            protect it with care.
          </Text>

          <Text className="mt-5 text-[15px] font-bold text-[#24213F]">
            4. Safe Learning
          </Text>

          <Text className="mt-2 text-[13px] leading-5 text-[#8983AA]">
            KARA content is designed to be age-appropriate and educational. It
            is not a substitute for professional medical advice.
          </Text>

          <Text className="mt-5 text-[15px] font-bold text-[#24213F]">
            5. Fair Use
          </Text>

          <Text className="mt-2 text-[13px] leading-5 text-[#8983AA]">
            Please don't copy, resell or misuse KARA content. Lessons and images
            are provided for personal learning only.
          </Text>

          <Text className="mt-5 text-[15px] font-bold text-[#24213F]">
            6. Parental Guidance
          </Text>

          <Text className="mt-2 text-[13px] leading-5 text-[#8983AA]">
            KARA is built for young learners, so parental guidance is
            encouraged. Learners under 16 must have a parent or guardian give
            consent during sign-up and are advised to use KARA together with an
            adult. Users aged 16 and over may use KARA independently without
            parental consent.
          </Text>

          <Text className="mt-5 mb-2 text-[12px] text-[#8983AA]">
            Last updated September 2026.
          </Text>
        </ScrollView>

     
        {/* Bottom Button */}
        <View className="border-t border-[#EAE7F5] px-5 pt-2 pb-14">
          <TouchableOpacity
            onPress={onAccept}
            activeOpacity={0.8}
            className="h-[52px] w-full items-center justify-center rounded-2xl bg-[#0072B2]"
          >
            <Text className="text-[16px] font-bold text-white">
              Accept & Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TC;
