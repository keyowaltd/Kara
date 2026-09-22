import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import DissectHeart from '../../../../assets/DissectHeart.png';
import Heart from './PracDash';

const Dissect = () => {
  const [selectedLayer, setSelectedLayer] = useState(2);
  const [showHeart, setShowHeart] = useState(false);

  if (showHeart) {
    return <Heart />;
  }

  const layers = [
    {
      id: 1,
      name: 'Exterior',
    },
    {
      id: 2,
      name: 'Chambers',
    },
    {
      id: 3,
      name: 'Valves',
    },
    {
      id: 4,
      name: 'Vessels',
    },
  ];

  const layerContent = {
    1: {
      title: 'Exterior',
      description:
        'This layer shows the outer structure of the heart. Tap through each layer to explore how the parts fit together.',
    },
    2: {
      title: 'Chambers',
      description:
        'This layer shows the chambers of the heart. Tap through each layer to peel back the structure and see how the parts fit together.',
    },
    3: {
      title: 'Valves',
      description:
        'This layer shows the valves of the heart. Tap through each layer to explore how the parts fit together.',
    },
    4: {
      title: 'Vessels',
      description:
        'This layer shows the major vessels of the heart. Tap through each layer to explore how the parts fit together.',
    },
  };

  const handleLayerPress = id => {
    setSelectedLayer(id);
  };

  const handleReset = () => {
    setSelectedLayer(2);
  };

  return (
    <View className="flex-1 bg-[#F8F7FF]">

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <View className="relative mt-8 h-[52px] flex-row items-center px-4">

        {/* Back Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShowHeart(true)}
          className="z-50 h-9 w-9 items-center justify-center rounded-full border border-[#DCEAF3] bg-white"
        >
          <Text className="text-[28px] leading-[30px] text-[#7770A2]">
            ‹
          </Text>
        </TouchableOpacity>

        {/* Title */}
        <Text className="absolute left-0 right-0 text-center text-[20px] font-bold text-[#292544]">
          Dissect
        </Text>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >

        {/* ===================================================== */}
        {/* INTRODUCTION */}
        {/* ===================================================== */}

        <Text className="mt-1 text-[19px] font-bold text-[#292544]">
          Dissect Mode
        </Text>

        <Text className="mt-1 text-[16px] text-[#8A82AA]">
          Tap the layers to explore the heart.
        </Text>

        {/* ===================================================== */}
        {/* HEART DISSECTION AREA */}
        {/* ===================================================== */}

        <View className="mt-6 h-[288px] w-full items-center justify-center overflow-hidden rounded-[24px] bg-white">

          {/* Reset Button */}
          <TouchableOpacity
            onPress={handleReset}
            activeOpacity={0.7}
            className="absolute right-4 top-4 z-10 h-8 w-8 items-center justify-center"
          >
            <Text className="text-[22px] text-[#292544]">
              ↻
            </Text>
          </TouchableOpacity>

          {/* Heart Image */}
          <Image
            source={DissectHeart}
            resizeMode="contain"
            className="h-[210px] w-[210px]"
          />

          {/* Selected Layer Label */}
          <View className="absolute bottom-7 items-center justify-center rounded-full bg-[#E56A00] px-5 py-2">
            <Text className="text-[12px] font-semibold text-white">
              {layerContent[selectedLayer].title}
            </Text>
          </View>

        </View>

        {/* ===================================================== */}
        {/* LAYER SELECTORS */}
        {/* ===================================================== */}

        <View className="mt-6 flex-row justify-between">

          {layers.map(layer => {
            const isSelected = selectedLayer === layer.id;

            return (
              <TouchableOpacity
                key={layer.id}
                onPress={() => handleLayerPress(layer.id)}
                activeOpacity={0.8}
                className={`h-[54px] w-[23%] items-center justify-center rounded-[18px] border ${
                  isSelected
                    ? 'border-[#E56A00] bg-[#E56A00]'
                    : 'border-[#DCEAF3] bg-white'
                }`}
              >

                <Text
                  className={`text-[9px] ${
                    isSelected
                      ? 'text-white'
                      : 'text-[#81799F]'
                  }`}
                >
                  Layer {layer.id}
                </Text>

                <Text
                  className={`mt-1 text-[12px] ${
                    isSelected
                      ? 'font-semibold text-white'
                      : 'text-[#292544]'
                  }`}
                >
                  {layer.name}
                </Text>

              </TouchableOpacity>
            );
          })}

        </View>

        {/* ===================================================== */}
        {/* LAYER INFORMATION */}
        {/* ===================================================== */}

        <View className="mt-6 w-full rounded-2xl border border-[#DCEAF3] bg-white px-4 py-4">

          <Text className="text-[16px] font-bold text-[#292544]">
            {layerContent[selectedLayer].title}
          </Text>

          <Text className="mt-1 text-[13px] leading-[21px] text-[#81799F]">
            {layerContent[selectedLayer].description}
          </Text>

        </View>

      </ScrollView>

    </View>
  );
};

export default Dissect;