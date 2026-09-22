import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import LearnHeart from '../Learning/levels/Beginner/DetailedHeart';
import MyProgress from '../Learning/MyProgress';

const HeartQuiz = () => {
  const questions = [
    {
      question: 'What is the main function of the heart?',
      options: [
        'To digest food',
        'To pump blood',
        'To filter waste',
        'To breathe',
      ],
      answer: 'To pump blood',
    },
    {
      question: 'How many chambers does the heart have?',
      options: ['Two', 'Three', 'Four', 'Five'],
      answer: 'Four',
    },
    {
      question: 'Which chamber receives oxygen-rich blood from the lungs?',
      options: [
        'Right atrium',
        'Left atrium',
        'Right ventricle',
        'Left ventricle',
      ],
      answer: 'Left atrium',
    },
    {
      question: 'Which chamber pumps oxygen-rich blood to the body?',
      options: [
        'Right atrium',
        'Left atrium',
        'Right ventricle',
        'Left ventricle',
      ],
      answer: 'Left ventricle',
    },
    {
      question: 'Which blood vessels carry blood away from the heart?',
      options: ['Veins', 'Capillaries', 'Arteries', 'Bronchi'],
      answer: 'Arteries',
    },
    {
      question: 'Which blood vessels carry blood toward the heart?',
      options: ['Arteries', 'Veins', 'Capillaries', 'Nerves'],
      answer: 'Veins',
    },
    {
      question: 'Which side of the heart pumps oxygen-poor blood to the lungs?',
      options: ['Left side', 'Right side', 'Both sides', 'Neither side'],
      answer: 'Right side',
    },
    {
      question: 'What separates the left and right sides of the heart?',
      options: ['Septum', 'Atrium', 'Valve', 'Aorta'],
      answer: 'Septum',
    },
    {
      question:
        'Which valve is located between the left atrium and left ventricle?',
      options: [
        'Tricuspid valve',
        'Pulmonary valve',
        'Mitral valve',
        'Aortic valve',
      ],
      answer: 'Mitral valve',
    },
    {
      question: 'What is the largest artery in the human body?',
      options: [
        'Pulmonary artery',
        'Carotid artery',
        'Aorta',
        'Coronary artery',
      ],
      answer: 'Aorta',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showLearnHeart, setShowLearnHeart] = useState(false);
  const [showMyProgress, setShowMyProgress] = useState(false);

  // Stores the answer selected for every question
  const [userAnswers, setUserAnswers] = useState([]);

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;

  // Go to My Progress
  if (showMyProgress) {
    return <MyProgress />;
  }

  // Go back to DetailedHeart from Question 1
  if (showLearnHeart) {
    return <LearnHeart />;
  }

  // Progress increases when an answer is selected
  const progress =
    ((currentQuestion + (selectedAnswer ? 1 : 0)) / totalQuestions) * 100;

  const handleAnswerPress = option => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      return;
    }

    const isCorrect = selectedAnswer === question.answer;
    const newScore = isCorrect ? score + 1 : score;

    // Save the selected answer for review
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedAnswers);

    if (isCorrect) {
      setScore(newScore);
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setScore(newScore);
      setShowResults(true);
    }
  };

  const handleBack = () => {
    // On Question 1, go back to DetailedHeart
    if (currentQuestion === 0) {
      setShowLearnHeart(true);
      return;
    }

    // On Questions 2-10, go to previous question
    if (currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => prevQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  // Try Again
  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setUserAnswers([]);
    setShowReview(false);
    setShowResults(false);
  };

  // Review Answers Screen
  if (showReview) {
    return (
      <SafeAreaView className="flex-1 bg-[#F8F7FF]">
        <View className="flex-1">

          {/* Review Header */}
          <View className="mt-3 h-[58px] flex-row items-center px-5">

            {/* Back Button */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowReview(false)}
              className="h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
            >
              <Text className="mt-[-2px] text-[28px] leading-[28px] text-[#292544]">
                ‹
              </Text>
            </TouchableOpacity>

            {/* Title */}
            <View className="flex-1 items-center">
              <Text className="text-[19px] font-bold text-[#292544]">
                Review Answers
              </Text>
            </View>

            {/* Empty Space */}
            <View className="h-[38px] w-[38px]" />

          </View>

          {/* All Questions */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingBottom: 30,
            }}
          >

            {questions.map((item, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === item.answer;

              return (
                <View
                  key={index}
                  className="mb-4 overflow-hidden rounded-2xl border border-[#DCEAF3] bg-white"
                >

                  {/* Question Number */}
                  <View className="border-b border-[#DCEAF3] px-4 py-3">
                    <Text className="text-[13px] font-semibold text-[#007DB8]">
                      Question {index + 1}
                    </Text>

                    <Text className="mt-1 text-[16px] font-bold leading-[23px] text-[#292544]">
                      {item.question}
                    </Text>
                  </View>

                  {/* Your Answer */}
                  <View className="px-4 py-3">
                    <Text className="text-[13px] text-[#8A82AA]">
                      Your Answer
                    </Text>

                    <Text
                      className={`mt-1 text-[15px] font-medium ${
                        isCorrect
                          ? 'text-[#00A77F]'
                          : 'text-[#E56A00]'
                      }`}
                    >
                      {userAnswer || 'Not answered'}
                    </Text>
                  </View>

                  {/* Correct Answer */}
                  <View className="border-t border-[#DCEAF3] px-4 py-3">
                    <Text className="text-[13px] text-[#8A82AA]">
                      Correct Answer
                    </Text>

                    <Text className="mt-1 text-[15px] font-medium text-[#00A77F]">
                      {item.answer}
                    </Text>
                  </View>

                </View>
              );
            })}

            {/* Try Again */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleTryAgain}
              className="mt-2 h-[56px] w-full items-center justify-center rounded-2xl bg-[#007DB8]"
            >
              <Text className="text-[16px] font-bold text-white">
                Try Again
              </Text>
            </TouchableOpacity>

          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }

  // Results screen
  if (showResults) {
    const percentage = Math.round((score / totalQuestions) * 100);

    const circleSize = 155;
    const strokeWidth = 14;
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - (percentage / 100) * circumference;

    return (
      <SafeAreaView className="flex-1 bg-[#F8F7FF]">
        <View className="flex-1 px-5">

          {/* Results Header */}
          <View className="h-[58px] flex-row items-center">

            {/* Back Button */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowResults(false)}
              className="h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
            >
              <Text className="mt-[-2px] text-[28px] leading-[28px] text-[#292544]">
                ‹
              </Text>
            </TouchableOpacity>

            {/* Title */}
            <View className="flex-1 items-center">
              <Text className="text-[19px] font-bold text-[#292544]">
                Results
              </Text>
            </View>

            {/* Empty Space */}
            <View className="h-[38px] w-[38px]" />

          </View>

          {/* Well Done */}
          <Text className="mt-1 text-center text-[26px] font-bold text-[#292544]">
            Well Done! 🎉
          </Text>

          {/* Quiz Name */}
          <Text className="mt-2 text-center text-[16px] text-[#8A82AA]">
            Heart Quiz
          </Text>

          {/* Circular Score */}
          <View className="mt-9 items-center justify-center">

            <View
              style={{
                width: circleSize,
                height: circleSize,
              }}
              className="items-center justify-center"
            >

              <Svg
                width={circleSize}
                height={circleSize}
                viewBox={`0 0 ${circleSize} ${circleSize}`}
                style={{
                  position: 'absolute',
                  transform: [{ rotate: '-90deg' }],
                }}
              >

                {/* Background Circle */}
                <Circle
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  stroke="#E4F4EF"
                  strokeWidth={strokeWidth}
                  fill="none"
                />

                {/* Progress Circle */}
                <Circle
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  stroke="#00A77F"
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${circumference} ${circumference}`}
                  strokeDashoffset={strokeDashoffset}
                />

              </Svg>

              {/* Percentage */}
              <Text className="text-[34px] font-bold text-[#292544]">
                {percentage}%
              </Text>

              {/* Score */}
              <Text className="mt-[-2px] text-[13px] text-[#8A82AA]">
                {score}/{totalQuestions}
              </Text>

            </View>

          </View>

          {/* Results Summary */}
          <View className="mt-8 w-full overflow-hidden rounded-2xl border border-[#DCEAF3] bg-white">

            {/* Correct Answers */}
            <View className="h-[49px] flex-row items-center border-b border-[#DCEAF3] px-4">
              <Text className="flex-1 text-[14px] text-[#292544]">
                Correct Answers
              </Text>

              <Text className="text-[15px] font-medium text-[#00A77F]">
                {score}
              </Text>
            </View>

            {/* Incorrect Answers */}
            <View className="h-[49px] flex-row items-center border-b border-[#DCEAF3] px-4">
              <Text className="flex-1 text-[14px] text-[#292544]">
                Incorrect Answers
              </Text>

              <Text className="text-[15px] font-medium text-[#E56A00]">
                {totalQuestions - score}
              </Text>
            </View>

            {/* XP Earned */}
            <View className="h-[49px] flex-row items-center px-4">
              <Text className="flex-1 text-[14px] text-[#292544]">
                XP Earned
              </Text>

              <Text className="text-[15px] font-medium text-[#007DB8]">
                +0
              </Text>
            </View>

          </View>

          {/* Review Answers */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowReview(true)}
            className="mt-5 h-[54px] w-full items-center justify-center rounded-2xl border border-[#007DB8] bg-transparent"
          >
            <Text className="text-[16px] font-bold text-[#007DB8]">
              Review Answers
            </Text>
          </TouchableOpacity>

          {/* Continue */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowMyProgress(true)}
            className="mt-3 h-[56px] w-full items-center justify-center rounded-2xl bg-[#007DB8]"
          >
            <Text className="text-[16px] font-bold text-white">
              Continue
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7FF]">
      <View className="flex-1">

        {/* Header */}
        <View className="mt-10 h-[58px] flex-row items-center px-5">

          {/* Back Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleBack}
            className="h-[38px] w-[38px] items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
          >
            <Text className="mt-[-2px] text-[28px] leading-[28px] text-[#292544]">
              ‹
            </Text>
          </TouchableOpacity>

          {/* Question Number */}
          <View className="flex-1 items-center">
            <Text className="text-[19px] font-bold text-[#292544]">
              Question {currentQuestion + 1} of {totalQuestions}
            </Text>
          </View>

        </View>

        {/* Progress Bar */}
        <View className="mx-5 h-[8px] overflow-hidden rounded-full bg-[#EFECFA]">
          <View
            className="h-full rounded-full bg-[#007DB8]"
            style={{
              width: `${Math.max(progress, 10)}%`,
            }}
          />
        </View>

        {/* Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 26,
            paddingBottom: 110,
          }}
        >

          {/* Question */}
          <Text className="text-[21px] font-bold leading-[29px] text-[#292544]">
            {question.question}
          </Text>

          {/* Answer Options */}
          <View className="mt-6">

            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option;

              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => handleAnswerPress(option)}
                  className={`mb-3 h-[58px] w-full flex-row items-center rounded-2xl border px-4 ${
                    isSelected
                      ? 'border-[#007DB8] bg-[#007DB8]'
                      : 'border-[#DCEAF3] bg-white'
                  }`}
                >

                  {/* Selection Circle */}
                  <View
                    className={`h-[25px] w-[25px] items-center justify-center rounded-full border ${
                      isSelected
                        ? 'border-white bg-white'
                        : 'border-[#D5E8F2] bg-white'
                    }`}
                  >
                    {isSelected && (
                      <Text className="mt-[-1px] text-[16px] font-bold text-[#007DB8]">
                        ✓
                      </Text>
                    )}
                  </View>

                  {/* Answer Text */}
                  <Text
                    className={`ml-3 flex-1 text-[16px] ${
                      isSelected
                        ? 'font-medium text-white'
                        : 'text-[#292544]'
                    }`}
                  >
                    {option}
                  </Text>

                </TouchableOpacity>
              );
            })}

          </View>

        </ScrollView>

        {/* Next Button */}
        <View className="absolute bottom-0 left-0 right-0 bg-[#F8F7FF] px-5 pb-20 pt-3">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNext}
            className={`h-[57px] w-full items-center justify-center rounded-2xl ${
              selectedAnswer ? 'bg-[#007DB8]' : 'bg-[#B7D9E8]'
            }`}
          >
            <Text className="text-[16px] font-bold text-white">
              {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default HeartQuiz;