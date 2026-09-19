import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function IncidentDetailScreen() {
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    Alert.alert('Investigation Saved', 'Investigation notes have been saved successfully.');
  };

  return (
    <View style={styles.shell}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>MineGuard 360</Text>
        {[
          { label: 'Dashboard', route: '/admin' },
          { label: 'Report Issue', route: '/report' },
          { label: 'All Issues', route: '/incidents' },
          { label: 'Analytics', route: '/safety-analytics' },
          { label: 'Settings', route: '/admin' },
        ].map((item, index) => (
          <TouchableOpacity
            key={item.label}
            style={[styles.navItem, index === 2 && styles.navItemActive]}
            onPress={() => {}}
          >
            <Text style={[styles.navText, index === 2 && styles.navTextActive]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Detail View</Text>
            <Text style={styles.title}>Incident Details</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Resolved</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>Complete incident investigation and response record.</Text>

        <View style={styles.card}>
          <Text style={styles.id}>INCIDENT #MG360-001</Text>

          <Text style={styles.label}>Issue</Text>
          <Text style={styles.value}>Support wall crack detected</Text>

          <Text style={styles.label}>Mine Zone</Text>
          <Text style={styles.value}>Zone B - Underground Section</Text>

          <Text style={styles.label}>Reported By</Text>
          <Text style={styles.value}>Worker #MG360-W01</Text>

          <Text style={styles.label}>Risk Level</Text>
          <Text style={styles.highRisk}>HIGH RISK</Text>

          <Text style={styles.label}>Corrective Action</Text>
          <Text style={styles.value}>Access restricted and support wall inspection completed.</Text>

          <Text style={styles.label}>Final Status</Text>
          <Text style={styles.resolved}>RESOLVED</Text>

          <Text style={styles.label}>Investigation Notes</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter investigation notes..."
            placeholderTextColor="#94A3B8"
            value={notes}
            onChangeText={setNotes}
            multiline
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Investigation</Text>
          </TouchableOpacity>

          {saved && (
            <View style={styles.successBox}>
              <Text style={styles.successTitle}>INVESTIGATION SAVED</Text>
              <Text style={styles.successText}>Investigation notes have been saved successfully.</Text>
            </View>
          )}
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
    marginBottom: 6,
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },

  value: {
    color: '#17202A',
    fontSize: 15,
    lineHeight: 22,
  },

  highRisk: {
    color: '#d9494d',
    fontSize: 15,
    fontWeight: '800',
  },

  resolved: {
    color: '#18A957',
    fontSize: 15,
    fontWeight: '800',
  },

  textArea: {
    marginTop: 8,
    height: 140,
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
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },

  successBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#edf9f1',
    borderWidth: 1,
    borderColor: '#d5efe2',
  },

  successTitle: {
    color: '#18A957',
    fontSize: 14,
    fontWeight: '800',
  },

  successText: {
    marginTop: 5,
    color: '#475467',
    fontSize: 13,
    lineHeight: 18,
  },
});