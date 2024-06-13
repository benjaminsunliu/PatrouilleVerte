import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function Collapsible({
  children,
  title,
  collapsed,
  onToggle
}: PropsWithChildren & { title: string; collapsed: boolean; onToggle: () => void }) {
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={onToggle}
        activeOpacity={0.8}>
        <Ionicons
          name={collapsed ? 'chevron-forward-outline' : 'chevron-down'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {!collapsed && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
