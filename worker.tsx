import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WorkerScreen() {
  return (
    <View style={styles.shell}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>MineGuard 360</Text>
        {['Dashboard', 'Report Issue', 'My Tasks', 'Analytics', 'Settings'].map((item, index) => (
          <TouchableOpacity
            key={item}
            style={[styles.navItem, index === 1 && styles.navItemActive]}
            onPress={() => index === 1 && router.push('/report')}
          >
            <Text style={[styles.navText, index === 1 && styles.navTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Field Access</Text>
            <Text style={styles.title}>Worker Dashboard</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Monitored</Text>
          </View>
        </View>

        <Text style={styles.welcome}>Welcome back, Ravi</Text>

        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Safety Status</Text>
          <Text style={styles.status}>SAFE</Text>
          <Text style={styles.statusMeta}>Last equipment check completed 12 min ago</Text>
        </View>

        <View style={styles.statGrid}>
          <View style={styles.statTile}>
            <Text style={styles.statLabel}>Shift</Text>
            <Text style={styles.statValue}>A-2</Text>
          </View>
          <View style={styles.statTile}>
            <Text style={styles.statLabel}>Zone</Text>
            <Text style={styles.statValue}>B12</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/report')}>
          <Text style={styles.actionTitle}>Report a Safety Issue</Text>
          <Text style={styles.actionText}>Report unsafe conditions, equipment problems or any hazard in your mine zone.</Text>
          <Text style={styles.actionArrow}>Submit report →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/complaints')}>
          <Text style={styles.actionTitle}>My Complaints</Text>
          <Text style={styles.actionText}>Review submitted reports and track their resolution status.</Text>
          <Text style={styles.actionArrow}>Open records →</Text>
        </TouchableOpacity>

        <View style={styles.emergencyCard}>
          <Text style={styles.emergencyTitle}>Emergency</Text>
          <Text style={styles.emergencyText}>Contact the mine safety team immediately if there is an active danger.</Text>
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
    marginBottom: 10,
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
    borderColor: '#cfeee0',
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

  welcome: {
    color: '#6B7280',
    fontSize: 15,
    marginBottom: 18,
  },

  statusCard: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  statusTitle: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 8,
  },

  status: {
    color: '#18A957',
    fontSize: 28,
    fontWeight: '800',
  },

  statusMeta: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 12,
    lineHeight: 18,
  },

  statGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 10,
    gap: 12,
  },

  statTile: {
    flex: 1,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  statLabel: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 8,
  },

  statValue: {
    color: '#17202A',
    fontSize: 20,
    fontWeight: '800',
  },

  actionCard: {
    marginTop: 16,
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  actionTitle: {
    color: '#17202A',
    fontSize: 18,
    fontWeight: '700',
  },

  actionText: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 13,
    lineHeight: 20,
  },

  actionArrow: {
    marginTop: 12,
    color: '#18A957',
    fontSize: 12,
    fontWeight: '700',
  },

  emergencyCard: {
    marginTop: 18,
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#fff7f3',
    borderWidth: 1,
    borderColor: '#ffd9c7',
  },

  emergencyTitle: {
    color: '#c44f2d',
    fontSize: 16,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  emergencyText: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 13,
    lineHeight: 20,
  },
});