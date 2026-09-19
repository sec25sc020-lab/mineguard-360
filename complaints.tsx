import { ScrollView, StyleSheet, Text, View } from 'react-native';

const complaintList = [
  {
    id: 'REPORT #MG360-001',
    issue: 'Crack detected in support wall near the underground mining area.',
    zone: 'Zone B – Underground Section',
    status: 'Under review',
    tone: 'warning',
  },
  {
    id: 'REPORT #MG360-002',
    issue: 'Damaged safety equipment reported near the loading area.',
    zone: 'Loading Area',
    status: 'Resolved',
    tone: 'success',
  },
];

export default function ComplaintsScreen() {
  return (
    <View style={styles.shell}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>MineGuard 360</Text>
        {['Dashboard', 'Report Issue', 'All Issues', 'Analytics', 'Settings'].map((item, index) => (
          <View key={item} style={[styles.navItem, index === 1 && styles.navItemActive]}>
            <Text style={[styles.navText, index === 1 && styles.navTextActive]}>{item}</Text>
          </View>
        ))}
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Records</Text>
            <Text style={styles.title}>My Complaints</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>2 Filed</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>View your submitted safety reports and their current status.</Text>

        {complaintList.map((complaint) => (
          <View key={complaint.id} style={styles.complaintCard}>
            <Text style={styles.complaintId}>{complaint.id}</Text>
            <Text style={styles.issue}>{complaint.issue}</Text>
            <Text style={styles.zone}>Zone: {complaint.zone}</Text>

            <View style={[styles.statusBox, complaint.tone === 'warning' ? styles.warningBox : styles.successBox]}>
              <Text style={complaint.tone === 'warning' ? styles.warningText : styles.successText}>{complaint.status.toUpperCase()}</Text>
            </View>
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

  subtitle: {
    marginBottom: 20,
    color: '#6B7280',
    fontSize: 14,
    lineHeight: 20,
  },

  complaintCard: {
    padding: 20,
    marginBottom: 16,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#edf1f4',
  },

  complaintId: {
    color: '#18A957',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  issue: {
    marginTop: 12,
    color: '#17202A',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },

  zone: {
    marginTop: 10,
    color: '#6B7280',
    fontSize: 13,
  },

  statusBox: {
    alignSelf: 'flex-start',
    marginTop: 15,
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

  warningText: {
    color: '#d18d00',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  successText: {
    color: '#18A957',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
});