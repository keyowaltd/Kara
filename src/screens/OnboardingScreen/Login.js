import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import karaLogo from '../../assets/kara-logo.png';
import Eye from '../../assets/EyeIcon.png';
import Password from '../../assets/PasswordIcon.png';
import Email from '../../assets/EmailIcon.png';
import CreateAccount from './CreateAccount';
import TC from './T&C';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleLogin = () => {
    setError('');

    if (!acceptedTerms) {
      setError('Please accept the Terms & Conditions to continue.');
      return;
    }

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      return;
    }

    // Login functionality will be added later
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleCreateAccount = () => {
    setShowCreateAccount(true);
  };

  // Open Create Account page
  if (showCreateAccount) {
    return <CreateAccount />;
  }

  return (
    <View className="flex-1 bg-[#F7F6FD] px-6">
      {/* Main Content */}
      <View className="flex-1 items-center">
        {/* KARA Logo */}
        <Image
          source={karaLogo}
          resizeMode="contain"
          className="mt-12 h-14 w-32"
        />

        {/* Tagline */}
        <Text className="-mt-1 text-center text-[13px] text-[#9A91C0]">
          Learn anatomy{' '}
          <Text className="font-semibold text-[#008FD3]">your way.</Text>
        </Text>

        {/* Welcome Section */}
        <View className="mt-10 w-full">
          <Text className="text-[23px] font-bold text-[#2D285C]">
            Welcome back 👋
          </Text>

          <Text className="mt-1 text-[16px] text-[#9A91C0]">
            Log in to continue learning.
          </Text>
        </View>

        {/* Email Input */}
        <View className="mt-6 h-[54px] w-full flex-row items-center rounded-2xl bg-white px-4">
          <Image source={Email} resizeMode="contain" className="mr-3 h-5 w-5" />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email address"
            placeholderTextColor="#FFFFFF"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className="flex-1 text-[15px] text-[black]"
          />
        </View>

        {/* Password Input */}
        <View className="mt-4 h-[54px] w-full flex-row items-center rounded-2xl bg-white px-4">
          <Image
            source={Password}
            resizeMode="contain"
            className="mr-3 h-5 w-5"
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
            className="flex-1 text-[15px] text-[#302B55]"
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            activeOpacity={0.7}
          >
            <Image source={Eye} resizeMode="contain" className="ml-2 h-6 w-6" />
          </TouchableOpacity>
        </View>

        {/* Terms & Conditions */}
        <View className="mt-5 w-full flex-row items-center">
          {/* Circular Checkbox */}
          <TouchableOpacity
            onPress={() => {
              setAcceptedTerms(!acceptedTerms);
              setError('');
            }}
            activeOpacity={0.8}
          >
            <View
              className={`mr-3 h-6 w-6 items-center justify-center rounded-full border-2 ${
                acceptedTerms
                  ? 'border-[#0072B2] bg-[#0072B2]'
                  : 'border-[#0072B2] bg-transparent'
              }`}
            >
              {acceptedTerms && (
                <Text className="text-[13px] font-bold text-white">✓</Text>
              )}
            </View>
          </TouchableOpacity>

          {/* Terms Text */}
          <Text className="flex-1 text-[12px] text-[#8F88AD]">
            I have read and accept the{' '}
            <Text
              className="font-bold text-[#008FD3] underline"
              onPress={() => setShowTerms(true)}
            >
              Terms & Conditions
            </Text>
          </Text>
        </View>

        {/* Log In Button */}
        <TouchableOpacity
          onPress={handleLogin}
          activeOpacity={0.8}
          className={`mt-5 h-[56px] w-full items-center justify-center rounded-2xl ${
            acceptedTerms ? 'bg-[#0072B2]' : 'bg-[#0072B2]/40'
          }`}
        >
          <Text className="text-[16px] font-bold text-white">Log In</Text>
        </TouchableOpacity>

        {/* Error Message */}
        {error !== '' && (
          <Text className="mt-3 text-center text-[12px] text-[#9A91C0]">
            {error}
          </Text>
        )}

        {/* Create Account */}
        <View className="mt-6 flex-row items-center">
          <Text className="text-[13px] text-[#8F88AD]">
            Don't have an account?{' '}
          </Text>

          <TouchableOpacity onPress={handleCreateAccount} activeOpacity={0.7}>
            <Text className="text-[14px] font-bold text-[#008FD3]">
              Create account
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Terms & Conditions Modal */}
      {/* Terms & Conditions Modal */}
      <Modal
        visible={showTerms}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowTerms(false)}
      >
        <View className="flex-1 justify-end">
          <View className="h-[85%] w-full rounded-t-[28px] bg-white">
            <TC
              onClose={() => setShowTerms(false)}
              onAccept={() => {
                setAcceptedTerms(true);
                setShowTerms(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login;
