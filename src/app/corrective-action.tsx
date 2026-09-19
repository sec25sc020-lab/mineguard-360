import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CorrectiveActionScreen() {
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
            <Text style={styles.kicker}>Response</Text>
            <Text style={styles.title}>Corrective Action</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Urgent</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>Record the action taken to resolve the safety incident.</Text>

        <View style={styles.card}>
          <Text style={styles.id}>INCIDENT #MG360-001</Text>

          <Text style={styles.label}>Current Risk</Text>
          <Text style={styles.risk}>HIGH RISK</Text>

          <Text style={styles.label}>Action Taken</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter corrective action..."
            placeholderTextColor="#94A3B8"
            multiline
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/resolved')}>
          <Text style={styles.buttonText}>Save Action</Text>
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
    borderColor: '#f3d0d4',
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
  },

  label: {
    marginTop: 18,
    marginBottom: 8,
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },

  risk: {
    color: '#d9494d',
    fontSize: 16,
    fontWeight: '800',
  },

  textArea: {
    height: 150,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#f7f9fa',
    color: '#17202A',
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#dfe7ea',
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