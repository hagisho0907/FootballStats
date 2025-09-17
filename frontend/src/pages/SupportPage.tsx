import React from 'react';
import { View, Text, YStack, XStack } from 'tamagui';
import { Settings } from '@tamagui/lucide-icons';

export const SupportPage: React.FC = () => {

  return (
    <YStack minHeight="100vh" backgroundColor="$gray2">
      {/* Header */}
      <View 
        backgroundColor="$primary"
        padding="$4"
      >
        <XStack alignItems="center" marginBottom="$1">
          <Settings size={24} color="white" />
          <Text 
            fontSize="$6" 
            fontWeight="bold" 
            color="white"
            marginLeft="$2"
          >
            footballLOG
          </Text>
        </XStack>
        <Text 
          fontSize="$3" 
          color="$primaryLight"
          opacity={0.9}
        >
          Support
        </Text>
      </View>

      <YStack 
        flex={1} 
        alignItems="center" 
        justifyContent="center" 
        padding="$4"
      >
        <View 
          backgroundColor="white" 
          borderWidth={4}
          borderColor="#ef4444"
          borderRadius="$4"
          padding="$8"
          alignItems="center"
        >
          <Text 
            fontSize="$9" 
            fontWeight="bold" 
            color="#dc2626"
            marginBottom="$4"
            textAlign="center"
          >
            開発中
          </Text>
          <Text 
            fontSize="$5" 
            color="#dc2626"
            textAlign="center"
          >
            このページは現在開発中です
          </Text>
        </View>
      </YStack>
    </YStack>
  );
};