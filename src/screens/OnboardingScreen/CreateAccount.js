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
import Age from '../../assets/AgeIcon.png';
import DobIcon from '../../assets/DobIcon.png';
import Back from '../../assets/BackIcon.png';
import Login from './Login';
import NameIcon from '../../assets/NameIcon.png';
import TC from './T&C';

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Tracks which fields the user has interacted with
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    dateOfBirth: false,
    age: false,
    password: false,
    confirmPassword: false,
  });

  // -----------------------------
  // DATE OF BIRTH
  // -----------------------------

  const handleDateOfBirthChange = text => {
    // Numbers only
    const numbersOnly = text.replace(/[^0-9]/g, '');

    // Maximum 8 numbers: DDMMYYYY
    const limitedNumbers = numbersOnly.slice(0, 8);

    let formattedDate = limitedNumbers;

    if (limitedNumbers.length > 4) {
      formattedDate =
        limitedNumbers.slice(0, 2) +
        '/' +
        limitedNumbers.slice(2, 4) +
        '/' +
        limitedNumbers.slice(4);
    } else if (limitedNumbers.length > 2) {
      formattedDate =
        limitedNumbers.slice(0, 2) + '/' + limitedNumbers.slice(2);
    }

    setDateOfBirth(formattedDate);
    setError('');
  };

  // -----------------------------
  // AGE
  // -----------------------------

  const handleAgeChange = text => {
    const numbersOnly = text.replace(/[^0-9]/g, '');
    const limitedAge = numbersOnly.slice(0, 3);

    setAge(limitedAge);
    setError('');
  };

  const handleIncreaseAge = () => {
    const currentAge = parseInt(age, 10) || 0;

    if (currentAge < 120) {
      setAge(String(currentAge + 1));
    }
  };

  // -----------------------------
  // VALIDATION
  // -----------------------------

  const isValidEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidDateOfBirth = dateOfBirth => {
    if (dateOfBirth.length !== 10) {
      return false;
    }

    const parts = dateOfBirth.split('/');

    if (parts.length !== 3) {
      return false;
    }

    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);

    if (
      !Number.isInteger(day) ||
      !Number.isInteger(month) ||
      !Number.isInteger(year)
    ) {
      return false;
    }

    if (day < 1 || day > 31) {
      return false;
    }

    if (month < 1 || month > 12) {
      return false;
    }

    if (year < 1900 || year > new Date().getFullYear()) {
      return false;
    }

    // Check that the actual date exists
    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const isValidAge =
    age.trim() !== '' && Number(age) >= 1 && Number(age) <= 120;

  const isValidPassword = password.trim().length >= 8;

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const isFormComplete =
    fullName.trim().length > 0 &&
    isValidEmail(email.trim()) &&
    isValidDateOfBirth(dateOfBirth) &&
    isValidAge &&
    isValidPassword &&
    passwordsMatch &&
    acceptedTerms;

  // -----------------------------
  // CREATE ACCOUNT
  // -----------------------------

  const handleCreateAccount = () => {
    setError('');

    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      dateOfBirth: true,
      age: true,
      password: true,
      confirmPassword: true,
    });

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!isValidEmail(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!isValidDateOfBirth(dateOfBirth)) {
      setError('Please enter a valid date of birth.');
      return;
    }

    if (!isValidAge) {
      setError('Please enter a valid age between 1 and 120.');
      return;
    }

    if (!isValidPassword) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (!passwordsMatch) {
      setError('Passwords do not match.');
      return;
    }

    if (!acceptedTerms) {
      setError('Please accept the Terms & Conditions to continue.');
      return;
    }

    if (showLogin) {
      return <Login />;
    }

    // Account creation functionality will be added later
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Age:', age);
    console.log('Password:', password);

    console.log('Account ready to be created.');
  };

  // -----------------------------
  // NAVIGATION
  // -----------------------------

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleBack = () => {
    setShowLogin(true);
  };

  // Open Login page
  if (showLogin) {
    return <Login />;
  }

  return (
    <View className="flex-1 bg-[#F7F6FD] px-6">
      {/* Main Content */}
      <View className="flex-1">
        {/* Back Button */}
        <TouchableOpacity
          onPress={handleBack}
          activeOpacity={0.7}
          className="mt-10 h-9 w-9 items-center justify-center rounded-full"
        >
          <Image source={Back} resizeMode="contain" className="h-9 w-9" />
        </TouchableOpacity>

        {/* KARA Logo */}
        <Image
          source={karaLogo}
          resizeMode="contain"
          className="mt-2 h-14 w-32"
        />

        {/* Heading */}
        <View className="mt-8 w-full">
          <Text className="text-[23px] font-bold text-[#2D285C]">
            Create your account 🎉
          </Text>

          <Text className="mt-1 text-[16px] text-[#8F88AD]">
            Join KARA and start exploring anatomy.
          </Text>
        </View>

        {/* Full Name */}
        <View
          className={`mt-6 h-[54px] w-full flex-row items-center rounded-2xl border bg-white px-4 ${
            touched.fullName && !fullName.trim()
              ? 'border-[#D64545]'
              : 'border-[#E4DDF5]'
          }`}
        >
          <Image
            source={NameIcon}
            resizeMode="contain"
            className="mr-3 h-5 w-5"
          />

          <TextInput
            value={fullName}
            onChangeText={text => {
              setFullName(text);
              setError('');
            }}
            onBlur={() => setTouched({ ...touched, fullName: true })}
            placeholder="Full name"
            placeholderTextColor="#9B99A8"
            autoCapitalize="words"
            autoCorrect={false}
            className="flex-1 text-[15px] text-[#302B55]"
          />
        </View>

        {touched.fullName && !fullName.trim() && (
          <Text className="mt-1 ml-1 text-[11px] text-[#D64545]">
            Please enter your full name.
          </Text>
        )}

        {/* Email */}
        <View
          className={`mt-3 h-[54px] w-full flex-row items-center rounded-2xl border bg-white px-4 ${
            touched.email && !isValidEmail(email)
              ? 'border-[#D64545]'
              : 'border-[#E4DDF5]'
          }`}
        >
          <Image source={Email} resizeMode="contain" className="mr-3 h-5 w-5" />

          <TextInput
            value={email}
            onChangeText={text => {
              setEmail(text);
              setError('');
            }}
            onBlur={() => setTouched({ ...touched, email: true })}
            placeholder="Email address"
            placeholderTextColor="#9B99A8"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className="flex-1 text-[15px] text-[#302B55]"
          />
        </View>

        {touched.email && email.length > 0 && !isValidEmail(email) && (
          <Text className="mt-1 ml-1 text-[11px] text-[#D64545]">
            Please enter a valid email address.
          </Text>
        )}

        {/* Date of Birth */}
        <View
          className={`mt-3 h-[54px] w-full flex-row items-center rounded-2xl border bg-white px-4 ${
            touched.dateOfBirth && !isValidDateOfBirth(dateOfBirth)
              ? 'border-[#D64545]'
              : 'border-[#E4DDF5]'
          }`}
        >
          <Image
            source={DobIcon}
            resizeMode="contain"
            className="mr-3 h-5 w-5"
          />

          <TextInput
            value={dateOfBirth}
            onChangeText={handleDateOfBirthChange}
            onBlur={() => setTouched({ ...touched, dateOfBirth: true })}
            placeholder="Date of birth"
            placeholderTextColor="#9B99A8"
            keyboardType="numeric"
            maxLength={10}
            className="flex-1 text-[15px] text-[#302B55]"
          />
        </View>

        {touched.dateOfBirth &&
          dateOfBirth.length > 0 &&
          !isValidDateOfBirth(dateOfBirth) && (
            <Text className="mt-1 ml-1 text-[11px] text-[#D64545]">
              Enter a valid date, e.g. 01/12/2000.
            </Text>
          )}

        {/* Age */}
        <View
          className={`mt-3 h-[54px] w-full flex-row items-center rounded-2xl border bg-white px-4 ${
            touched.age && !isValidAge ? 'border-[#D64545]' : 'border-[#E4DDF5]'
          }`}
        >
          <Image source={Age} resizeMode="contain" className="mr-3 h-5 w-5" />

          <TextInput
            value={age}
            onChangeText={handleAgeChange}
            onBlur={() => setTouched({ ...touched, age: true })}
            placeholder="Age"
            placeholderTextColor="#9B99A8"
            keyboardType="numeric"
            maxLength={3}
            className="flex-1 text-[15px] text-[#302B55]"
          />

          {/* Plus Button */}
          <TouchableOpacity
            onPress={handleIncreaseAge}
            activeOpacity={0.7}
            className="h-8 w-8 items-center justify-center"
          >
            <Text className="text-[25px] font-light text-[#0072B2]">+</Text>
          </TouchableOpacity>
        </View>

        {touched.age && !isValidAge && (
          <Text className="mt-1 ml-1 text-[11px] text-[#D64545]">
            Enter an age between 1 and 120.
          </Text>
        )}

        {/* Password */}
        <View
          className={`mt-3 h-[54px] w-full flex-row items-center rounded-2xl border bg-white px-4 ${
            touched.password && !isValidPassword
              ? 'border-[#D64545]'
              : 'border-[#E4DDF5]'
          }`}
        >
          <Image
            source={Password}
            resizeMode="contain"
            className="mr-3 h-5 w-5"
          />

          <TextInput
            value={password}
            onChangeText={text => {
              setPassword(text);
              setError('');
            }}
            onBlur={() => setTouched({ ...touched, password: true })}
            placeholder="Password"
            placeholderTextColor="#9B99A8"
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

        {touched.password && password.length > 0 && !isValidPassword && (
          <Text className="mt-1 ml-1 text-[11px] text-[#D64545]">
            Password must be at least 8 characters.
          </Text>
        )}

        {/* Confirm Password */}
        <View
          className={`mt-3 h-[54px] w-full flex-row items-center rounded-2xl border bg-white px-4 ${
            touched.confirmPassword && !passwordsMatch
              ? 'border-[#D64545]'
              : 'border-[#E4DDF5]'
          }`}
        >
          <Image
            source={Password}
            resizeMode="contain"
            className="mr-3 h-5 w-5"
          />

          <TextInput
            value={confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);
              setError('');
            }}
            onBlur={() => setTouched({ ...touched, confirmPassword: true })}
            placeholder="Confirm password"
            placeholderTextColor="#9B99A8"
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
            autoCorrect={false}
            className="flex-1 text-[15px] text-[#302B55]"
          />

          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            activeOpacity={0.7}
          >
            <Image source={Eye} resizeMode="contain" className="ml-2 h-6 w-6" />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Indicator */}
        {confirmPassword.length > 0 && (
          <Text
            className={`mt-1 ml-1 text-[11px] ${
              passwordsMatch ? 'text-[#008A5A]' : 'text-[#D64545]'
            }`}
          >
            {passwordsMatch ? 'Passwords match ✓' : 'Passwords do not match.'}
          </Text>
        )}

        {/* Terms & Conditions */}
        <View className="mt-4 w-full flex-row items-center">
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

          {/* Terms */}
          <Text className="flex-1 text-[12px] text-[#8F88AD]">
            I agree to KARA's{' '}
            <Text
              className="font-bold text-[#008FD3] underline"
              onPress={() => setShowTerms(true)}
            >
              Terms & Conditions
            </Text>
            .
          </Text>
        </View>

        {/* Terms Warning */}
        {!acceptedTerms && error !== '' && (
          <Text className="mt-1 ml-1 text-[11px] text-[#D64545]">
            Please accept the Terms & Conditions.
          </Text>
        )}

        {/* General Error Message */}
        {error !== '' && (
          <Text className="mt-2 text-center text-[12px] text-[#D64545]">
            {error}
          </Text>
        )}

        {/* Create Account Button */}
        <TouchableOpacity
          onPress={handleCreateAccount}
          activeOpacity={0.8}
          disabled={!isFormComplete}
          className={`mt-4 h-[56px] w-full items-center justify-center rounded-2xl ${
            isFormComplete ? 'bg-[#0072B2]' : 'bg-[#0072B2]/40'
          }`}
        >
          <Text className="text-[16px] font-bold text-white">
            Create Account
          </Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View className="mt-5 flex-row items-center justify-center">
          <Text className="text-[13px] text-[#8F88AD]">
            Already have an account?{' '}
          </Text>

          <TouchableOpacity onPress={handleLogin} activeOpacity={0.7}>
            <Text className="text-[14px] font-bold text-[#008FD3]">Log in</Text>
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

export default CreateAccount;
