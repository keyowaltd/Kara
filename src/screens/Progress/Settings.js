import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';

import Setting from '../../assets/Setting.png';
import progress from '../../assets/progress.png';
import learn from '../../assets/learn.png';
import topics from '../../assets/topics.png';
import home from '../../assets/home.png';
import SignOut from '../../assets/SignOut.png';
import About from '../../assets/About.png';

import Topics from '../Topics/Topic';
import Home from '../Dashboard/Dashboard';
import OrganScreen from '../Learning/levels/Beginner/OrganScreen';
import SettingsPage from '../Progress/Settings';
import Progress from '../Learning/MyProgress';
import ProfilePic from './Avatar';
import AboutKara from './AboutKara';

import Login from '../OnboardingScreen/Login';

import Avatar1 from '../../assets/Avatar1.png';
import Avatar2 from '../../assets/Avatar2.png';
import Avatar3 from '../../assets/Avatar3.png';
import Avatar4 from '../../assets/Avatar4.png';
import Avatar5 from '../../assets/Avatar5.png';

import {useAccessibility} from '../../context/AccessibilityContext';

const Settings = () => {
  const [audioNarration, setAudioNarration] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [highContrast, setHighContrast] = useState(false);

  const [textSize, setTextSize] = useState('Medium');

  // Global accessibility settings
  const {
    colourBlindMode,
    setColourBlindMode,
    previewMode,
    setPreviewMode,
    colors,
  } = useAccessibility();

  // Bottom navigation
  const [showHome, setShowHome] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showSettingsPage, setShowSettingsPage] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Avatar
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(1);

  // About KARA
  const [showAboutKara, setShowAboutKara] = useState(false);

  const avatars = {
    1: Avatar1,
    2: Avatar2,
    3: Avatar3,
    4: Avatar4,
    5: Avatar5,
  };

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

  if (showSettingsPage) {
    return <SettingsPage />;
  }

  if (showLogin) {
    return <Login />;
  }

  if (showProfilePic) {
    return (
      <ProfilePic
        selectedAvatar={selectedAvatar}
        onSaveAvatar={avatarId => {
          setSelectedAvatar(avatarId);
          setShowProfilePic(false);
        }}
        onBack={() => setShowProfilePic(false)}
      />
    );
  }

  if (showAboutKara) {
    return (
      <AboutKara
        onBack={() => setShowAboutKara(false)}
      />
    );
  }

  return (
    <View
      className="flex-1"
      style={{backgroundColor: colors.background}}
    >

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <View className="relative mt-3 h-[57px] flex-row items-center px-4">

        <TouchableOpacity
          activeOpacity={0.7}
          className="z-50 h-9 w-9 items-center justify-center rounded-full"
          style={{
            borderColor: colors.border,
            backgroundColor: colors.card,
            borderWidth: 1,
          }}
        >
          <Text
            className="text-[28px] leading-[30px]"
            style={{color: colors.secondary}}
          >
            ‹
          </Text>
        </TouchableOpacity>

        <Text
          className="absolute left-0 right-0 text-center text-[20px] font-bold"
          style={{color: colors.text}}
        >
          Settings
        </Text>

      </View>

      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 120,
        }}
      >

        {/* ===================================================== */}
        {/* PROFILE */}
        {/* ===================================================== */}

        <View
          className="mt-0 h-[90px] w-full flex-row items-center rounded-[22px] px-4"
          style={{
            borderColor: colors.border,
            backgroundColor: colors.card,
            borderWidth: 1,
          }}
        >

          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => setShowProfilePic(true)}
            className="h-[64px] w-[64px] items-center justify-center rounded-full"
            style={{backgroundColor: colors.primary}}
          >
            <Image
              source={avatars[selectedAvatar]}
              resizeMode="contain"
              className="h-[58px] w-[58px] rounded-full"
            />
          </TouchableOpacity>

          <View className="ml-4">
            <Text
              className="text-[18px] font-bold"
              style={{color: colors.text}}
            >
              Tommy
            </Text>

            <Text
              className="mt-1 text-[13px]"
              style={{color: colors.mutedText}}
            >
              Beginner · Anatomy Explorer
            </Text>
          </View>

        </View>

        {/* ===================================================== */}
        {/* LEARNING PREFERENCES */}
        {/* ===================================================== */}

        <Text
          className="mt-6 text-[13px]"
          style={{color: colors.secondary}}
        >
          Learning Preferences
        </Text>

        <View
          className="mt-2 w-full overflow-hidden rounded-[20px]"
          style={{
            borderColor: colors.border,
            backgroundColor: colors.card,
            borderWidth: 1,
          }}
        >

          {/* Learning Level */}

          <TouchableOpacity
            activeOpacity={0.7}
            className="h-[51px] flex-row items-center px-4"
            style={{
              borderBottomColor: colors.border,
              borderBottomWidth: 1,
            }}
          >
            <Text
              className="flex-1 text-[15px]"
              style={{color: colors.text}}
            >
              Learning Level
            </Text>

            <Text
              className="text-[14px]"
              style={{color: colors.secondary}}
            >
              🌱 Beginner
            </Text>

            <Text
              className="ml-3 text-[24px]"
              style={{color: colors.secondary}}
            >
              ›
            </Text>
          </TouchableOpacity>

          {/* Audio Narration */}

          <View
            className="h-[52px] flex-row items-center px-4"
            style={{
              borderBottomColor: colors.border,
              borderBottomWidth: 1,
            }}
          >
            <Text
              className="flex-1 text-[15px]"
              style={{color: colors.text}}
            >
              Audio Narration
            </Text>

            <Switch
              value={audioNarration}
              onValueChange={setAudioNarration}
              trackColor={{
                false: '#D1D4D9',
                true: colors.primary,
              }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#D1D4D9"
            />
          </View>

          {/* Animations */}

          <View
            className="h-[52px] flex-row items-center px-4"
            style={{
              borderBottomColor: colors.border,
              borderBottomWidth: 1,
            }}
          >
            <Text
              className="flex-1 text-[15px]"
              style={{color: colors.text}}
            >
              Animations
            </Text>

            <Switch
              value={animations}
              onValueChange={setAnimations}
              trackColor={{
                false: '#D1D4D9',
                true: colors.primary,
              }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#D1D4D9"
            />
          </View>

          {/* Text Size */}

          <View className="h-[56px] flex-row items-center px-4">

            <Text
              className="flex-1 text-[15px]"
              style={{color: colors.text}}
            >
              Text Size
            </Text>

            <View
              className="h-[36px] w-[205px] flex-row items-center rounded-full p-1"
              style={{backgroundColor: '#EFECFA'}}
            >

              {/* Small */}

              <TouchableOpacity
                onPress={() => setTextSize('Small')}
                activeOpacity={0.8}
                className={`h-[30px] flex-1 items-center justify-center rounded-full ${
                  textSize === 'Small'
                    ? 'bg-white'
                    : 'bg-transparent'
                }`}
              >
                <Text
                  className="text-[12px]"
                  style={{
                    color:
                      textSize === 'Small'
                        ? colors.primary
                        : colors.secondary,
                    fontWeight:
                      textSize === 'Small'
                        ? '500'
                        : '400',
                  }}
                >
                  Small
                </Text>
              </TouchableOpacity>

              {/* Medium */}

              <TouchableOpacity
                onPress={() => setTextSize('Medium')}
                activeOpacity={0.8}
                className={`h-[30px] flex-1 items-center justify-center rounded-full ${
                  textSize === 'Medium'
                    ? 'bg-white'
                    : 'bg-transparent'
                }`}
              >
                <Text
                  className="text-[12px]"
                  style={{
                    color:
                      textSize === 'Medium'
                        ? colors.primary
                        : colors.secondary,
                    fontWeight:
                      textSize === 'Medium'
                        ? '500'
                        : '400',
                  }}
                >
                  Medium
                </Text>
              </TouchableOpacity>

              {/* Large */}

              <TouchableOpacity
                onPress={() => setTextSize('Large')}
                activeOpacity={0.8}
                className={`h-[30px] flex-1 items-center justify-center rounded-full ${
                  textSize === 'Large'
                    ? 'bg-white'
                    : 'bg-transparent'
                }`}
              >
                <Text
                  className="text-[12px]"
                  style={{
                    color:
                      textSize === 'Large'
                        ? colors.primary
                        : colors.secondary,
                    fontWeight:
                      textSize === 'Large'
                        ? '500'
                        : '400',
                  }}
                >
                  Large
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

        {/* ===================================================== */}
        {/* ACCESSIBILITY */}
        {/* ===================================================== */}

        <Text
          className="mt-6 text-[13px]"
          style={{color: colors.secondary}}
        >
          Accessibility
        </Text>

        <View
          className="mt-2 w-full overflow-hidden rounded-[20px]"
          style={{
            borderColor: colors.border,
            backgroundColor: colors.card,
            borderWidth: 1,
          }}
        >

          {/* Colour Blind Mode */}

          <View
            className="min-h-[69px] flex-row items-center px-4"
            style={{
              borderBottomColor: colors.border,
              borderBottomWidth: 1,
            }}
          >
            <Text
              className="mr-4 text-[22px]"
              style={{color: colors.accent}}
            >
              ◉
            </Text>

            <View className="flex-1">

              <Text
                className="text-[15px]"
                style={{color: colors.text}}
              >
                Colour-blind mode
              </Text>

              <Text
                className="mt-1 text-[11px]"
                style={{color: colors.mutedText}}
              >
                Uses a colour-blind-safe palette
              </Text>

            </View>

            <Switch
              value={colourBlindMode}
              onValueChange={setColourBlindMode}
              trackColor={{
                false: '#D1D4D9',
                true: colors.primary,
              }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#D1D4D9"
            />

          </View>

          {/* High Contrast */}

          <View className="h-[52px] flex-row items-center px-4">

            <Text
              className="flex-1 text-[15px]"
              style={{color: colors.text}}
            >
              High Contrast
            </Text>

            <Switch
              value={highContrast}
              onValueChange={setHighContrast}
              trackColor={{
                false: '#D1D4D9',
                true: colors.primary,
              }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#D1D4D9"
            />

          </View>

        </View>

        {/* ===================================================== */}
        {/* PREVIEW MODE */}
        {/* ===================================================== */}

        <Text
          className="mt-6 text-[13px]"
          style={{color: colors.secondary}}
        >
          Preview Mode
        </Text>

        <View
          className="mt-2 w-full rounded-[20px] px-4 py-4"
          style={{
            borderColor: colors.border,
            backgroundColor: colors.card,
            borderWidth: 1,
          }}
        >

          <View className="flex-row items-center">

            <Text
              className="mr-3 text-[20px]"
              style={{color: colors.primary}}
            >
              ◉
            </Text>

            <Text
              className="text-[15px] font-medium"
              style={{color: colors.text}}
            >
              See it as a student sees it
            </Text>

          </View>

          <Text
            className="mt-2 text-[11px] leading-[18px]"
            style={{color: colors.mutedText}}
          >
            Simulate how the app looks with different types of colour
            blindness.
          </Text>

          {/* Preview Options */}

          <View
            className="mt-3 h-[37px] flex-row items-center rounded-full p-1"
            style={{backgroundColor: '#EFECFA'}}
          >

            {/* Off */}

            <TouchableOpacity
              onPress={() => setPreviewMode('Off')}
              activeOpacity={0.8}
              className={`h-[29px] flex-1 items-center justify-center rounded-full ${
                previewMode === 'Off'
                  ? 'bg-white'
                  : 'bg-transparent'
              }`}
            >
              <Text
                className="text-[11px]"
                style={{
                  color:
                    previewMode === 'Off'
                      ? colors.primary
                      : colors.secondary,
                  fontWeight:
                    previewMode === 'Off'
                      ? '500'
                      : '400',
                }}
              >
                Off
              </Text>
            </TouchableOpacity>

            {/* Protan */}

            <TouchableOpacity
              onPress={() => setPreviewMode('Protan')}
              activeOpacity={0.8}
              className={`h-[29px] flex-1 items-center justify-center rounded-full ${
                previewMode === 'Protan'
                  ? 'bg-white'
                  : 'bg-transparent'
              }`}
            >
              <Text
                className="text-[11px]"
                style={{
                  color:
                    previewMode === 'Protan'
                      ? colors.primary
                      : colors.secondary,
                  fontWeight:
                    previewMode === 'Protan'
                      ? '500'
                      : '400',
                }}
              >
                Protan
              </Text>
            </TouchableOpacity>

            {/* Deuter */}

            <TouchableOpacity
              onPress={() => setPreviewMode('Deuter')}
              activeOpacity={0.8}
              className={`h-[29px] flex-1 items-center justify-center rounded-full ${
                previewMode === 'Deuter'
                  ? 'bg-white'
                  : 'bg-transparent'
              }`}
            >
              <Text
                className="text-[11px]"
                style={{
                  color:
                    previewMode === 'Deuter'
                      ? colors.primary
                      : colors.secondary,
                  fontWeight:
                    previewMode === 'Deuter'
                      ? '500'
                      : '400',
                }}
              >
                Deuter
              </Text>
            </TouchableOpacity>

            {/* Tritan */}

            <TouchableOpacity
              onPress={() => setPreviewMode('Tritan')}
              activeOpacity={0.8}
              className={`h-[29px] flex-1 items-center justify-center rounded-full ${
                previewMode === 'Tritan'
                  ? 'bg-white'
                  : 'bg-transparent'
              }`}
            >
              <Text
                className="text-[11px]"
                style={{
                  color:
                    previewMode === 'Tritan'
                      ? colors.primary
                      : colors.secondary,
                  fontWeight:
                    previewMode === 'Tritan'
                      ? '500'
                      : '400',
                }}
              >
                Tritan
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* ===================================================== */}
        {/* ABOUT & SUPPORT */}
        {/* ===================================================== */}

        <Text
          className="mt-6 text-[13px]"
          style={{color: colors.secondary}}
        >
          About & Support
        </Text>

        <View
          className="mt-2 mb-5 w-full overflow-hidden rounded-[20px]"
          style={{
            borderColor: colors.border,
            backgroundColor: colors.card,
            borderWidth: 1,
          }}
        >

          {/* About KARA */}

          <TouchableOpacity
            activeOpacity={0.7}
            onPressIn={() => setShowAboutKara(true)}
            className="h-[52px] flex-row items-center px-4"
            style={{
              borderBottomColor: colors.border,
              borderBottomWidth: 1,
            }}
          >

            <Image
              source={About}
              resizeMode="contain"
              className="mr-3 h-[22px] w-[22px]"
            />

            <Text
              className="flex-1 text-[15px]"
              style={{color: colors.text}}
            >
              About KARA
            </Text>

            <Text
              className="text-[24px]"
              style={{color: colors.secondary}}
            >
              ›
            </Text>

          </TouchableOpacity>

          {/* Sign Out */}

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowLogin(true)}
            className="h-[52px] flex-row items-center px-4"
          >

            <Image
              source={SignOut}
              resizeMode="contain"
              className="mr-3 h-[22px] w-[22px]"
            />

            <Text
              className="text-[15px]"
              style={{color: colors.danger}}
            >
              Sign Out
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

      {/* ===================================================== */}
      {/* BOTTOM NAVIGATION */}
      {/* ===================================================== */}

      <View
        className="absolute bottom-10 left-0 right-0 h-[72px]"
        style={{
          borderTopColor: colors.border,
          borderTopWidth: 1,
          backgroundColor: colors.card,
        }}
      >

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

            <Text
              className="mt-1 text-[11px]"
              style={{color: colors.secondary}}
            >
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

            <Text
              className="mt-1 text-[11px]"
              style={{color: colors.secondary}}
            >
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

            <Text
              className="mt-1 text-[11px]"
              style={{color: colors.secondary}}
            >
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

            <Text
              className="mt-1 text-[11px]"
              style={{color: colors.secondary}}
            >
              Progress
            </Text>
          </TouchableOpacity>

          {/* Settings */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => setShowSettingsPage(true)}
            className="items-center justify-center"
          >
            <Image
              source={Setting}
              resizeMode="contain"
              className="h-[23px] w-[23px]"
            />

            <Text
              className="mt-1 text-[11px] font-semibold"
              style={{color: colors.primary}}
            >
              Settings
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

export default Settings;