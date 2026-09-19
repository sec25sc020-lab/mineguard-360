import { router, useLocalSearchParams } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import { AdminLayout } from '@/components/admin-layout';
import { tasks } from '@/data/mineguard-data';

export default function TaskDetailsScreen() {
  const { taskId } = useLocalSearchParams<{ taskId?: string }>();
  const initialTask = tasks.find((task) => task.id === taskId) ?? tasks[0];
  const [task, setTask] = useState(initialTask);

  const updateStatus = (status: string) => {
    setTask((current) => ({ ...current, status, currentStatus: status }));
    Alert.alert('Status Updated', `Task status updated to ${status}.`);
  };

  return (
    <AdminLayout title="Task Details" subtitle="Review assigned work details and update action status." activeNav="My Tasks" showSearch={false}>
      <View style={styles.card}>
        <Text style={styles.id}>{task.id}</Text>

        <View style={styles.infoGrid}>
          <View style={styles.column}>
            <Text style={styles.label}>Issue</Text>
            <Text style={styles.value}>{task.issue}</Text>

            <Text style={styles.label}>Mine</Text>
            <Text style={styles.value}>{task.mine}</Text>

            <Text style={styles.label}>Risk</Text>
            <Text style={[styles.value, task.risk === 'HIGH' ? styles.riskHigh : task.risk === 'MEDIUM' ? styles.riskMedium : styles.riskLow]}>{task.risk}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Assigned Officer</Text>
            <Text style={styles.value}>{task.assignedOfficer}</Text>

            <Text style={styles.label}>Due Date</Text>
            <Text style={styles.value}>{task.dueDate}</Text>

            <Text style={styles.label}>Current Status</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{task.status}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{task.description}</Text>

        <Text style={styles.label}>Action Taken</Text>
        <Text style={styles.value}>{task.actionTaken}</Text>

        <Text style={styles.label}>Proof</Text>
        <Text style={styles.value}>{task.proof}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => router.push({ pathname: '/issue-details', params: { issueId: task.issueId } })}>
            <Text style={styles.primaryText}>View Issue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => updateStatus('ACTION IN PROGRESS')}>
            <Text style={styles.secondaryText}>Update Action</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.successButton} onPress={() => updateStatus('PENDING VERIFICATION')}>
            <Text style={styles.successText}>Submit for Verification</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 20,
  },

  id: {
    color: '#18A957',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.7,
    marginBottom: 16,
  },

  infoGrid: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 8,
  },

  column: {
    flex: 1,
  },

  label: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 14,
  },

  value: {
    color: '#17202A',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 6,
    lineHeight: 22,
  },

  riskHigh: { color: '#e5484d' },
  riskMedium: { color: '#f4b942' },
  riskLow: { color: '#18A957' },

  statusBadge: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#edf9f1',
    borderWidth: 1,
    borderColor: '#d5efe2',
  },

  statusText: {
    color: '#18A957',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 20,
  },

  primaryButton: {
    backgroundColor: '#142536',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },

  primaryText: {
    color: '#fff',
    fontWeight: '700',
  },

  secondaryButton: {
    backgroundColor: '#fff7e6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f4d9a9',
  },

  secondaryText: {
    color: '#8b5e00',
    fontWeight: '700',
  },

  successButton: {
    backgroundColor: '#edf9f1',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d5efe2',
  },

  successText: {
    color: '#0b6b3d',
    fontWeight: '700',
  },
});
