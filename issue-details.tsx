import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';
import { getMineById, issues, workers } from '@/data/mineguard-data';

export default function IssueDetailsScreen() {
  const { issueId } = useLocalSearchParams<{ issueId?: string }>();
  const issue = issues.find((item) => item.id === issueId) ?? issues[0];
  const mine = getMineById(issue.mineId);
  const worker = workers.find((person) => person.id === issue.workerId);

  return (
    <AdminLayout title="Issue Details" subtitle="Review full details for the selected site issue." activeNav="All Issues" showSearch={false}>
      <View style={styles.card}>
        <Text style={styles.id}>{issue.id}</Text>

        <View style={styles.infoGrid}>
          <View style={styles.column}>
            <Text style={styles.label}>Issue Information</Text>
            <Text style={styles.value}>{issue.title}</Text>

            <Text style={styles.label}>Mine</Text>
            <Text style={styles.value}>{mine.name}</Text>

            <Text style={styles.label}>Zone</Text>
            <Text style={styles.value}>{issue.zone}</Text>

            <Text style={styles.label}>Description</Text>
            <Text style={styles.value}>{issue.description}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Worker Information</Text>
            <Text style={styles.value}>{worker?.name ?? issue.workerName}</Text>
            <Text style={styles.valueSecondary}>{issue.workerId}</Text>

            <Text style={styles.label}>Assigned Officer</Text>
            <Text style={styles.value}>{issue.assignedOfficer}</Text>

            <Text style={styles.label}>Verification Status</Text>
            <Text style={styles.value}>{issue.verificationStatus}</Text>
          </View>
        </View>

        <View style={styles.splitRow}>
          <View style={styles.detailBlock}>
            <Text style={styles.label}>Risk Analysis</Text>
            <Text style={styles.value}>{issue.riskAnalysis}</Text>
          </View>

          <View style={styles.detailBlock}>
            <Text style={styles.label}>Sensor Data</Text>
            <Text style={styles.value}>{issue.sensorData}</Text>
          </View>
        </View>

        <View style={styles.splitRow}>
          <View style={styles.detailBlock}>
            <Text style={styles.label}>Investigation</Text>
            <Text style={styles.value}>{issue.investigation}</Text>
          </View>

          <View style={styles.detailBlock}>
            <Text style={styles.label}>Corrective Action</Text>
            <Text style={styles.value}>{issue.correctiveAction}</Text>
          </View>
        </View>

        <Text style={styles.label}>Proof</Text>
        <Text style={styles.value}>{issue.proof}</Text>
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
    marginBottom: 12,
  },

  infoGrid: {
    flexDirection: 'row',
    gap: 20,
  },

  column: {
    flex: 1,
  },

  splitRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 18,
  },

  detailBlock: {
    flex: 1,
    backgroundColor: '#f8fafb',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 16,
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

  valueSecondary: {
    color: '#6B7280',
    fontSize: 13,
    marginTop: 4,
  },
});
