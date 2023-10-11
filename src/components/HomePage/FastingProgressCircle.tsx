import React from 'react';
import { ProgressCircle } from 'react-native-svg-charts';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks';

import styles from './styles';


type FastingProgressCircleProps = {
  progress: number;
  isFasting: boolean;
  elapsedSeconds: number;
  getCurrentStage: (minutesElapsed: number) => string;
};

const FastingProgressCircle: React.FC<FastingProgressCircleProps> = ({ progress, isFasting, elapsedSeconds, getCurrentStage }) => {
  const { Colors, Fonts } = useTheme();

  // time formatting function
  const formatTime = (seconds: number) => {
    seconds = Math.floor(seconds); // Ensure seconds are always rounded down to the nearest integer
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <View style={styles.chartContainer}>
      <ProgressCircle
        style={styles.chart}
        progress={progress}
        progressColor={Colors.progressCircleColor}
        backgroundColor={isFasting ? Colors.progressCircleBackgroundColorActive : Colors.progressCircleBackgroundColorInactive}
        strokeWidth={10}
      />
      <Text style={styles.timeText}>
        {formatTime(elapsedSeconds)}
      </Text>
      <Text style={styles.stageText}>
        {getCurrentStage(progress * 2880)} {/* Convert progress to minutes (48 hours * 60) */}
      </Text>
    </View>
  );
};

export default FastingProgressCircle;
