import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';

export default function ReportScreen() {
  return (
    <AdminLayout
      title="Report a New Issue"
      subtitle="Help keep your mine safe by reporting any hazard or unsafe condition."
      activeNav="Report Issue"
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Field Report</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>New</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Mine Name</Text>
          <TextInput style={styles.input} placeholder="Select mine" placeholderTextColor="#8FA9A2" />

          <Text style={styles.label}>Issue Title</Text>
          <TextInput style={styles.input} placeholder="Enter issue title" placeholderTextColor="#8FA9A2" />

          <Text style={styles.label}>Issue Category</Text>
          <TextInput style={styles.input} placeholder="Select category" placeholderTextColor="#8FA9A2" />

          <Text style={styles.label}>Risk Observation</Text>
          <TextInput style={styles.input} placeholder="Low / Medium / High" placeholderTextColor="#8FA9A2" />

          <Text style={styles.label}>Location / GPS</Text>
          <TextInput style={styles.input} placeholder="Latitude, longitude or location" placeholderTextColor="#8FA9A2" />

          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.textArea} placeholder="Describe the safety issue..." placeholderTextColor="#8FA9A2" multiline />

          <Text style={styles.label}>Upload Photos / Videos</Text>
          <TouchableOpacity style={styles.uploadBox} onPress={() => Alert.alert('Demo', 'Upload flow is ready for integration.') }>
            <Text style={styles.uploadText}>Drag & drop files here or click to upload</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Optional Sensor Data</Text>
          <View style={styles.sensorGrid}>
            <TextInput style={styles.sensorInput} placeholder="PM2.5" placeholderTextColor="#8FA9A2" />
            <TextInput style={styles.sensorInput} placeholder="Temperature" placeholderTextColor="#8FA9A2" />
            <TextInput style={styles.sensorInput} placeholder="Humidity" placeholderTextColor="#8FA9A2" />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Issue Submitted', 'Your report has been submitted successfully.')}>
            <Text style={styles.buttonText}>Submit Issue</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingBottom: 40,
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

  label: {
    marginBottom: 8,
    color: '#475467',
    fontWeight: '700',
    fontSize: 13,
    marginTop: 8,
  },

  input: {
    height: 48,
    paddingHorizontal: 14,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#f7f9fa',
    color: '#17202A',
    borderWidth: 1,
    borderColor: '#e6ebee',
  },

  textArea: {
    height: 120,
    padding: 14,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#f7f9fa',
    color: '#17202A',
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#e6ebee',
  },

  uploadBox: {
    minHeight: 90,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#f7f9fa',
    borderWidth: 1,
    borderColor: '#dfe7ea',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  uploadText: {
    color: '#64748b',
    fontWeight: '600',
    textAlign: 'center',
  },

  sensorGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },

  sensorInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#f7f9fa',
    color: '#17202A',
    borderWidth: 1,
    borderColor: '#e6ebee',
  },

  button: {
    height: 52,
    marginTop: 10,
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
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
});