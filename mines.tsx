import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';
import { mines } from '@/data/mineguard-data';

export default function MinesOverviewScreen() {
  return (
    <AdminLayout title="Mines Overview" subtitle="Mine-level safety overview across active operations." activeNav="Mines">
      <View style={styles.grid}>
        {mines.map((mine) => (
          <TouchableOpacity key={mine.id} style={styles.mineCard} onPress={() => router.push({ pathname: '/mine-details', params: { mineId: mine.id } })}>
            <Text style={styles.mineName}>{mine.name}</Text>
            <Text style={styles.location}>Location: {mine.location}</Text>
            <Text style={styles.metric}>Total Issues: {mine.totalIssues}</Text>
            <Text style={styles.metric}>High Risk: {mine.highRisk}</Text>
            <Text style={styles.metric}>Medium Risk: {mine.mediumRisk}</Text>
            <Text style={styles.metric}>Low Risk: {mine.lowRisk}</Text>
            <Text style={styles.metric}>Open Issues: {mine.openIssues}</Text>
            <Text style={styles.metric}>Closed Issues: {mine.closedIssues}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },

  mineCard: {
    width: '31%',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 18,
  },

  mineName: {
    color: '#17202A',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },

  location: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 12,
  },

  metric: {
    color: '#17202A',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
  },
});
