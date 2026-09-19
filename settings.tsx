import { useState } from 'react';
import { Alert, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';
import { defaultSettings } from '@/data/mineguard-data';

export default function SettingsScreen() {
  const [profile, setProfile] = useState(defaultSettings.profile);
  const [notifications, setNotifications] = useState(defaultSettings.notifications);
  const [preferences, setPreferences] = useState(defaultSettings.preferences);
  const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });

  const saveProfile = () => {
    Alert.alert('Profile saved', `${profile.name} profile updated.`);
  };

  const updatePassword = () => {
    const { currentPassword, newPassword, confirmPassword } = passwords;
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Password required', 'Please complete all password fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Password mismatch', 'New password and confirm password must match.');
      return;
    }
    Alert.alert('Password updated', 'Password change was accepted in demo mode.');
  };

  return (
    <AdminLayout title="Settings" subtitle="Manage user profile, alerts, security, and application preferences." activeNav="Settings">
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.formGrid}>
          <View style={styles.field}><Text style={styles.label}>Name</Text><TextInput value={profile.name} onChangeText={(value) => setProfile({ ...profile, name: value })} style={styles.input} /></View>
          <View style={styles.field}><Text style={styles.label}>Email</Text><TextInput value={profile.email} onChangeText={(value) => setProfile({ ...profile, email: value })} style={styles.input} /></View>
          <View style={styles.field}><Text style={styles.label}>Role</Text><TextInput value={profile.role} onChangeText={(value) => setProfile({ ...profile, role: value })} style={styles.input} /></View>
          <View style={styles.field}><Text style={styles.label}>Employee ID</Text><TextInput value={profile.employeeId} onChangeText={(value) => setProfile({ ...profile, employeeId: value })} style={styles.input} /></View>
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={saveProfile}><Text style={styles.primaryButtonText}>SAVE PROFILE</Text></TouchableOpacity>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.toggleList}>
          <View style={styles.toggleRow}><Text style={styles.toggleLabel}>Safety Alerts</Text><Switch value={notifications.safetyAlerts} onValueChange={(value) => setNotifications({ ...notifications, safetyAlerts: value })} /></View>
          <View style={styles.toggleRow}><Text style={styles.toggleLabel}>Critical Risk Alerts</Text><Switch value={notifications.criticalRiskAlerts} onValueChange={(value) => setNotifications({ ...notifications, criticalRiskAlerts: value })} /></View>
          <View style={styles.toggleRow}><Text style={styles.toggleLabel}>Task Updates</Text><Switch value={notifications.taskUpdates} onValueChange={(value) => setNotifications({ ...notifications, taskUpdates: value })} /></View>
          <View style={styles.toggleRow}><Text style={styles.toggleLabel}>Verification Updates</Text><Switch value={notifications.verificationUpdates} onValueChange={(value) => setNotifications({ ...notifications, verificationUpdates: value })} /></View>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Security</Text>
        <View style={styles.formGrid}>
          <View style={styles.field}><Text style={styles.label}>Current Password</Text><TextInput value={passwords.currentPassword} onChangeText={(value) => setPasswords({ ...passwords, currentPassword: value })} secureTextEntry style={styles.input} /></View>
          <View style={styles.field}><Text style={styles.label}>New Password</Text><TextInput value={passwords.newPassword} onChangeText={(value) => setPasswords({ ...passwords, newPassword: value })} secureTextEntry style={styles.input} /></View>
          <View style={styles.field}><Text style={styles.label}>Confirm Password</Text><TextInput value={passwords.confirmPassword} onChangeText={(value) => setPasswords({ ...passwords, confirmPassword: value })} secureTextEntry style={styles.input} /></View>
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={updatePassword}><Text style={styles.primaryButtonText}>UPDATE PASSWORD</Text></TouchableOpacity>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Application Preferences</Text>
        <View style={styles.formGrid}>
          <View style={styles.field}><Text style={styles.label}>Theme</Text><TextInput value={preferences.theme} onChangeText={(value) => setPreferences({ ...preferences, theme: value })} style={styles.input} /></View>
          <View style={styles.field}><Text style={styles.label}>Language</Text><TextInput value={preferences.language} onChangeText={(value) => setPreferences({ ...preferences, language: value })} style={styles.input} /></View>
          <View style={styles.field}><Text style={styles.label}>Date Format</Text><TextInput value={preferences.dateFormat} onChangeText={(value) => setPreferences({ ...preferences, dateFormat: value })} style={styles.input} /></View>
        </View>
      </View>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  sectionCard: { backgroundColor: '#ffffff', borderRadius: 18, borderWidth: 1, borderColor: '#edf1f4', padding: 20, marginBottom: 18 },
  sectionTitle: { color: '#17202A', fontSize: 18, fontWeight: '800', marginBottom: 16 },
  formGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  field: { width: '48%', minWidth: 180 },
  label: { color: '#6B7280', fontSize: 11, fontWeight: '800', textTransform: 'uppercase', marginBottom: 6 },
  input: { backgroundColor: '#f8fafb', borderWidth: 1, borderColor: '#e8edf1', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, color: '#17202A' },
  primaryButton: { marginTop: 18, alignSelf: 'flex-start', backgroundColor: '#142536', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12 },
  primaryButtonText: { color: '#fff', fontWeight: '800', fontSize: 12 },
  toggleList: { gap: 12 },
  toggleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#edf1f4' },
  toggleLabel: { color: '#17202A', fontSize: 15, fontWeight: '600' },
});
