import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';

const summary = [
  { label: 'Total Incidents', value: '124', tone: 'gold' },
  { label: 'Resolved', value: '50', tone: 'green' },
  { label: 'Under Review', value: '28', tone: 'blue' },
  { label: 'High Risk', value: '32', tone: 'red' },
];

const distribution = [
  { label: 'Safety', value: 35, color: '#e5484d' },
  { label: 'Environment', value: 28, color: '#18A957' },
  { label: 'Geotechnical', value: 22, color: '#f4b942' },
  { label: 'Equipment', value: 15, color: '#3b82f6' },
];

export default function SafetyAnalyticsScreen() {
  return (
    <AdminLayout title="Safety Analytics" subtitle="Review mine safety trends and incident statistics." activeNav="Analytics">
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.summaryGrid}>
          {summary.map((item) => (
            <View key={item.label} style={[styles.statCard, item.tone === 'gold' ? styles.goldCard : item.tone === 'green' ? styles.greenCard : item.tone === 'blue' ? styles.blueCard : styles.redCard]}>
              <Text style={styles.statLabel}>{item.label}</Text>
              <Text style={styles.statValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Issue Distribution</Text>
            {distribution.map((item) => (
              <View key={item.label} style={styles.row}>
                <View style={styles.legendWrap}>
                  <View style={[styles.legendSwatch, { backgroundColor: item.color }]} />
                  <Text style={styles.label}>{item.label}</Text>
                </View>
                <Text style={styles.number}>{item.value}%</Text>
              </View>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Risk Overview</Text>
            {[
              { label: 'High Risk', value: 32, color: '#e5484d' },
              { label: 'Medium Risk', value: 56, color: '#f4b942' },
              { label: 'Low Risk', value: 75, color: '#18A957' },
            ].map((row) => (
              <View key={row.label} style={styles.barRow}>
                <Text style={styles.barLabel}>{row.label}</Text>
                <View style={styles.barTrack}>
                  <View style={[styles.barFill, { width: `${row.value}%`, backgroundColor: row.color }]} />
                </View>
                <Text style={styles.barValue}>{row.value}%</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Safety Status</Text>
          <Text style={styles.safeText}>Overall safety monitoring is active.</Text>
          <Text style={styles.updateText}>Data is based on reported incidents and active area checks.</Text>
        </View>
      </ScrollView>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f7fa',
  },

  sidebar: {
    width: 220,
    backgroundColor: '#142536',
    padding: 20,
  },

  sidebarTitle: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 18,
  },

  navItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 6,
  },

  navItemActive: {
    backgroundColor: '#1d3045',
  },

  navText: {
    color: '#dfeaf1',
    fontSize: 14,
    fontWeight: '600',
  },

  navTextActive: {
    color: '#fff',
    fontWeight: '700',
  },

  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 36,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  kicker: {
    fontSize: 12,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: '#6B7280',
    marginBottom: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#17202A',
  },

  liveBadge: {
    backgroundColor: '#edf9f1',
    borderColor: '#d5efe2',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  liveText: {
    color: '#18A957',
    fontSize: 11,
    letterSpacing: 1,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  subtitle: {
    marginBottom: 20,
    color: '#6B7280',
    fontSize: 14,
    lineHeight: 20,
  },

  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 18,
  },

  statCard: {
    flexBasis: '48%',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },

  goldCard: { backgroundColor: '#fff7e6', borderColor: '#f4d9a9' },
  greenCard: { backgroundColor: '#edf9f1', borderColor: '#d4efe1' },
  blueCard: { backgroundColor: '#edf5ff', borderColor: '#d7e7ff' },
  redCard: { backgroundColor: '#fff1f1', borderColor: '#f2c9cb' },

  statLabel: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  statValue: {
    color: '#17202A',
    fontWeight: '800',
    fontSize: 28,
    marginTop: 10,
  },

  cardRow: {
    flexDirection: 'row',
    gap: 18,
    marginBottom: 18,
  },

  card: {
    flex: 1,
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  cardTitle: {
    color: '#17202A',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  legendWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  legendSwatch: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },

  label: {
    color: '#4b5563',
    fontSize: 14,
    fontWeight: '600',
  },

  number: {
    color: '#17202A',
    fontSize: 15,
    fontWeight: '800',
  },

  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  barLabel: {
    width: 92,
    color: '#4b5563',
    fontSize: 12,
    fontWeight: '700',
  },

  barTrack: {
    flex: 1,
    height: 10,
    backgroundColor: '#edf1f4',
    borderRadius: 999,
    overflow: 'hidden',
    marginRight: 8,
  },

  barFill: {
    height: '100%',
    borderRadius: 999,
  },

  barValue: {
    color: '#17202A',
    fontSize: 12,
    fontWeight: '700',
  },

  safeText: {
    color: '#18A957',
    fontSize: 15,
    fontWeight: '700',
  },

  updateText: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 13,
    lineHeight: 18,
  },
});