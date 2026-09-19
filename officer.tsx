import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const incidents = [
  {
    id: 'INCIDENT #MG360-001',
    title: 'Support wall crack detected',
    zone: 'Zone B – Underground Section',
    status: 'Under review',
    tone: 'warning',
    action: '/incident' as const,
  },
  {
    id: 'INCIDENT #MG360-002',
    title: 'Damaged safety equipment',
    zone: 'Loading Area',
    status: 'Resolved',
    tone: 'success',
    action: '/incident-detail' as const,
  },
];

export default function OfficerScreen() {
  return (
    <View style={styles.shell}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>MineGuard 360</Text>
        {(['Dashboard', 'Report Issue', 'My Tasks', 'Analytics', 'Settings'] as const).map((item) => (
          <TouchableOpacity key={item} style={[styles.navItem, item === 'My Tasks' && styles.navItemActive]} onPress={() => { if (item === 'My Tasks') router.push('/officer'); }}>
            <Text style={[styles.navText, item === 'My Tasks' && styles.navTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Security</Text>
            <Text style={styles.title}>Officer Dashboard</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Active</Text>
          </View>
        </View>

        <Text style={styles.welcome}>Welcome to MineGuard 360</Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Assigned Incidents</Text>
          <Text style={styles.summaryNumber}>04</Text>
          <Text style={styles.summaryText}>Safety incidents requiring your review and response.</Text>

          <View style={styles.statRow}>
            <View style={styles.statTile}><Text style={styles.statLabel}>Review</Text><Text style={styles.statValue}>02</Text></View>
            <View style={styles.statTile}><Text style={styles.statLabel}>Resolved</Text><Text style={styles.statValue}>02</Text></View>
          </View>
        </View>

        {incidents.map((incident) => (
          <TouchableOpacity key={incident.id} style={styles.incidentCard} onPress={() => router.push(incident.action)}>
            <Text style={styles.incidentId}>{incident.id}</Text>
            <Text style={styles.incidentTitle}>{incident.title}</Text>
            <Text style={styles.incidentZone}>{incident.zone}</Text>

            <View style={[styles.statusBox, incident.tone === 'warning' ? styles.warningBox : styles.successBox]}>
              <Text style={incident.tone === 'warning' ? styles.status : styles.resolved}>{incident.status.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
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
    marginBottom: 4,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#17202A',
  },

  liveBadge: {
    backgroundColor: '#fff7e6',
    borderColor: '#f7d9a6',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  liveText: {
    color: '#d18d00',
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

  summaryCard: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  summaryTitle: {
    color: '#6B7280',
    fontSize: 14,
  },

  summaryNumber: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: '900',
    color: '#18A957',
  },

  summaryText: {
    marginTop: 6,
    color: '#6B7280',
    fontSize: 13,
    lineHeight: 18,
  },

  statRow: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 10,
  },

  statTile: {
    flex: 1,
    padding: 12,
    borderRadius: 14,
    backgroundColor: '#f8fafb',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  statLabel: {
    color: '#6B7280',
    fontSize: 11,
    marginBottom: 6,
    textTransform: 'uppercase',
  },

  statValue: {
    color: '#17202A',
    fontSize: 18,
    fontWeight: '800',
  },

  incidentCard: {
    marginTop: 16,
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  incidentId: {
    color: '#18A957',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  incidentTitle: {
    marginTop: 10,
    color: '#17202A',
    fontSize: 18,
    fontWeight: '700',
  },

  incidentZone: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 13,
  },

  statusBox: {
    alignSelf: 'flex-start',
    marginTop: 16,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 999,
  },

  warningBox: {
    backgroundColor: '#fff7e6',
    borderWidth: 1,
    borderColor: '#f7d9a6',
  },

  successBox: {
    backgroundColor: '#edf9f1',
    borderWidth: 1,
    borderColor: '#d4efe1',
  },

  status: {
    color: '#d18d00',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  resolved: {
    color: '#18A957',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
});