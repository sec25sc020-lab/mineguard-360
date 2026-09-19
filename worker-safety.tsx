import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const workers = [
  {
    id: 'WORKER #MG360-W01',
    status: 'SAFE',
    zone: 'Zone B - Underground Section',
    reports: '02',
  },
  {
    id: 'WORKER #MG360-W02',
    status: 'SAFE',
    zone: 'Loading Area',
    reports: '01',
  },
];

export default function WorkerSafetyScreen() {
  return (
    <View style={styles.shell}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>MineGuard 360</Text>
        {([
          { label: 'Dashboard', route: '/admin' },
          { label: 'Report Issue', route: '/report' },
          { label: 'All Issues', route: '/incidents' },
          { label: 'Analytics', route: '/safety-analytics' },
          { label: 'Settings', route: '/admin' },
        ] as const).map((item, index) => (
          <TouchableOpacity
            key={item.label}
            style={[styles.navItem, index === 3 && styles.navItemActive]}
            onPress={() => router.push(item.route)}
          >
            <Text style={[styles.navText, index === 3 && styles.navTextActive]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Health & Safety</Text>
            <Text style={styles.title}>Worker Safety</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Online</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>Monitor worker conditions and submitted safety reports.</Text>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCardGreen}>
            <Text style={styles.summaryLabel}>Active workers</Text>
            <Text style={styles.summaryValue}>246</Text>
          </View>
          <View style={styles.summaryCardAmber}>
            <Text style={styles.summaryLabel}>Watchlist</Text>
            <Text style={styles.summaryValue}>12</Text>
          </View>
        </View>

        {workers.map((worker) => (
          <View key={worker.id} style={styles.card}>
            <Text style={styles.workerId}>{worker.id}</Text>
            <Text style={styles.label}>Safety Status</Text>
            <Text style={styles.safeText}>{worker.status}</Text>
            <Text style={styles.label}>Assigned Zone</Text>
            <Text style={styles.value}>{worker.zone}</Text>
            <Text style={styles.label}>Reports Submitted</Text>
            <Text style={styles.value}>{worker.reports}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
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

  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },

  summaryCardGreen: {
    flex: 1,
    backgroundColor: '#edf9f1',
    borderColor: '#d5efe2',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  summaryCardAmber: {
    flex: 1,
    backgroundColor: '#fff7e6',
    borderColor: '#f9e3a7',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  summaryLabel: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  summaryValue: {
    marginTop: 8,
    color: '#17202A',
    fontSize: 24,
    fontWeight: '800',
  },

  card: {
    marginTop: 16,
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  workerId: {
    color: '#18A957',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  label: {
    marginTop: 16,
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },

  value: {
    marginTop: 6,
    color: '#17202A',
    fontSize: 15,
    fontWeight: '600',
  },

  safeText: {
    marginTop: 8,
    color: '#18A957',
    fontSize: 18,
    fontWeight: '800',
  },
});