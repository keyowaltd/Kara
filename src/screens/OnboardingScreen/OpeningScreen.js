import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

import karaLogo from '../../assets/kara-logo.png';

const OpeningScreen = ({onComplete}) => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    if (!logoLoaded) {
      return;
    }

    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [logoLoaded, onComplete]);

  return (
    <View className="flex-1 items-center justify-center bg-[#F8F7FF] px-6 pt-20">

      {/* Main content */}
      <View className="-mt-20 items-center">

        {/* KARA Logo */}
        <Image
          source={karaLogo}
          className="mb-1 h-16 w-40"
          resizeMode="contain"
          onLoad={() => setLogoLoaded(true)}
        />

        {/* Tagline */}
        <Text className="text-center text-[23px] font-bold tracking-[-0.5px] text-[#20203A]">
          Learn the human body,{' '}
          <Text className="text-[#0072B2]">
            your way.
          </Text>
        </Text>

      </View>
    </View>
  );
};

export default OpeningScreen;