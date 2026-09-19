import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RiskAssessmentScreen() {
  return (
    <View style={styles.shell}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>MineGuard 360</Text>
        {['Dashboard', 'Report Issue', 'All Issues', 'Analytics', 'Settings'].map((item, index) => (
          <View key={item} style={[styles.navItem, index === 2 && styles.navItemActive]}>
            <Text style={[styles.navText, index === 2 && styles.navTextActive]}>{item}</Text>
          </View>
        ))}
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Assessment</Text>
            <Text style={styles.title}>Risk Assessment</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>High</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>Assess the reported safety issue and determine priority response.</Text>

        <View style={styles.card}>
          <Text style={styles.id}>INCIDENT #MG360-001</Text>
          <Text style={styles.label}>Risk Category</Text>
          <Text style={styles.value}>Structural Safety</Text>
          <Text style={styles.label}>Risk Level</Text>
          <View style={styles.riskBox}>
            <Text style={styles.riskText}>HIGH RISK</Text>
          </View>
          <Text style={styles.label}>Recommended Action</Text>
          <Text style={styles.value}>Restrict access to the affected zone and inspect the support wall immediately.</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/corrective-action')}>
          <Text style={styles.buttonText}>Save Assessment</Text>
        </TouchableOpacity>
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
    backgroundColor: '#fff1f1',
    borderColor: '#f2c9cb',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  liveText: {
    color: '#d9494d',
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
    marginBottom: 18,
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
    lineHeight: 22,
  },

  riskBox: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#fff1f1',
    borderWidth: 1,
    borderColor: '#f3d0d4',
  },

  riskText: {
    color: '#d9494d',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  button: {
    height: 54,
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18A957',
    shadowColor: '#18A957',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
});