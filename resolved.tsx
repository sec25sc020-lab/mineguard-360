import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResolvedScreen() {
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
            style={[styles.navItem, index === 2 && styles.navItemActive]}
            onPress={() => router.push(item.route)}
          >
            <Text style={[styles.navText, index === 2 && styles.navTextActive]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Closure</Text>
            <Text style={styles.title}>Incident Resolution</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Closed</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>Confirm the final status of the safety incident.</Text>

        <View style={styles.card}>
          <Text style={styles.id}>INCIDENT #MG360-001</Text>

          <Text style={styles.label}>Issue</Text>
          <Text style={styles.value}>Support wall crack detected</Text>

          <Text style={styles.label}>Mine Zone</Text>
          <Text style={styles.value}>Zone B – Underground Section</Text>

          <Text style={styles.label}>Final Status</Text>
          <View style={styles.statusBoxResolved}>
            <Text style={styles.statusResolved}>RESOLVED</Text>
          </View>
        </View>

        <View style={styles.successBox}>
          <Text style={styles.successTitle}>INCIDENT RESOLVED</Text>
          <Text style={styles.successText}>
            The safety incident has been successfully resolved and the corrective action has been completed.
          </Text>
        </View>
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

  card: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  id: {
    color: '#18A957',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  label: {
    marginTop: 18,
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },

  value: {
    marginTop: 6,
    color: '#17202A',
    fontSize: 15,
    lineHeight: 22,
  },

  statusBoxResolved: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#edf9f1',
    borderWidth: 1,
    borderColor: '#d5efe2',
  },

  statusResolved: {
    color: '#18A957',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  successBox: {
    marginTop: 20,
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#edf9f1',
    borderWidth: 1,
    borderColor: '#d5efe2',
  },

  successTitle: {
    color: '#18A957',
    fontSize: 16,
    fontWeight: '800',
  },

  successText: {
    marginTop: 8,
    color: '#475467',
    fontSize: 13,
    lineHeight: 20,
  },
});