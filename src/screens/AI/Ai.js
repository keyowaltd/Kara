import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';

const KaraAI = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const scrollViewRef = useRef(null);
  const inputRef = useRef(null);

  const suggestedQuestions = [
    'Tell me everything',
    'What is its structure?',
    'How does it work?',
  ];

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        text: trimmedMessage,
      },
    ]);

    setMessage('');

    // Keep the latest message visible
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({
        animated: true,
      });
    }, 100);
  };

  const handleSuggestion = question => {
    setMessage(question);

    // Put the cursor inside the input and open keyboard
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7FF]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        <View className="flex-1">

          {/* ===================================================== */}
          {/* KARA AI HEADER */}
          {/* ===================================================== */}

          <View className="h-[76px] overflow-hidden bg-[#08A88F]">

            {/* Blue gradient-like section */}
            <View className="absolute right-[-40px] top-0 h-[100px] w-[260px] rounded-full bg-[#3789E8]" />

            <View className="flex-1 flex-row items-center px-5">

              {/* Kara Avatar */}
              <View className="h-[40px] w-[40px] items-center justify-center rounded-full bg-[#42B6AA]">
                <Text className="text-[21px]">
                  🦊
                </Text>
              </View>

              {/* Header Text */}
              <View className="ml-3 flex-1">
                <Text className="text-[17px] font-semibold text-white">
                  Kara AI ✨
                </Text>

                <Text className="mt-0.5 text-[12px] text-[#E9F8FF]">
                  Your human body learning buddy
                </Text>
              </View>

              {/* Close Button */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClose}
                className="h-[34px] w-[34px] items-center justify-center rounded-full bg-[#68A9E8]"
              >
                <Text className="text-[23px] font-light text-white">
                  ×
                </Text>
              </TouchableOpacity>

            </View>
          </View>

          {/* ===================================================== */}
          {/* CHAT AREA */}
          {/* ===================================================== */}

          <ScrollView
            ref={scrollViewRef}
            className="flex-1"
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingTop: 16,
              paddingBottom: 20,
            }}
            onContentSizeChange={() => {
              scrollViewRef.current?.scrollToEnd({
                animated: true,
              });
            }}
          >

            {/* Kara Welcome Message */}
            <View className="max-w-[290px] rounded-[15px] rounded-tl-[15px] border border-[#E4DFFA] bg-white px-4 py-3">

              <Text className="text-[14px] leading-[22px] text-[#292544]">
                Hi! I'm Kara 🦊 your human body tutor. You're learning about
                the Heart. Ask me anything — I'll give you the full
                breakdown: overview, structure, how it works, and common
                conditions. You can also ask about any specific part!
              </Text>

            </View>

            {/* User Messages */}
            {messages.map(item => (
              <View
                key={item.id}
                className="mt-4 max-w-[290px] self-end rounded-[15px] bg-[#007DB8] px-4 py-3"
              >
                <Text className="text-[14px] leading-[21px] text-white">
                  {item.text}
                </Text>
              </View>
            ))}

          </ScrollView>

          {/* ===================================================== */}
          {/* BOTTOM CHAT CONTROLS */}
          {/* ===================================================== */}

          <View className="bg-[#F8F7FF]">

            {/* Suggested Questions */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 8,
              }}
              keyboardShouldPersistTaps="handled"
            >

              {suggestedQuestions.map((question, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => handleSuggestion(question)}
                  className="mr-2 h-[34px] items-center justify-center rounded-full border border-[#00A878] bg-white px-3"
                >
                  <Text className="text-[12px] text-[#5637FF]">
                    {question}
                  </Text>
                </TouchableOpacity>
              ))}

            </ScrollView>

            {/* ===================================================== */}
            {/* INPUT AREA */}
            {/* ===================================================== */}

            <View className="flex-row items-center px-4 mb-10">

              {/* Text Input */}
              <View className="min-h-[45px] max-h-[100px] flex-1 justify-center rounded-full bg-[#F0EEF9] px-4">

                <TextInput
                  ref={inputRef}
                  value={message}
                  onChangeText={setMessage}
                  placeholder="Ask Kara anything..."
                  placeholderTextColor="#9690AA"
                  multiline
                  textAlignVertical="center"
                  className="text-[14px] text-[#292544]"
                  style={{
                    minHeight: 45,
                    maxHeight: 100,
                    paddingTop: Platform.OS === 'ios' ? 12 : 8,
                    paddingBottom: Platform.OS === 'ios' ? 12 : 8,
                  }}
                  returnKeyType="send"
                  blurOnSubmit={false}
                  onSubmitEditing={handleSend}
                />

              </View>

              {/* Send Button */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleSend}
                disabled={!message.trim()}
                className="ml-2 h-[45px] w-[45px] items-center justify-center rounded-full bg-[#3989EA]"
              >
                <Text className="text-[22px] text-white">
                  ➤
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default KaraAI;