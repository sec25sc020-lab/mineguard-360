import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';
import { tasks } from '@/data/mineguard-data';

export default function MyTasksScreen() {
  return (
    <AdminLayout title="My Tasks" subtitle="Track assigned actions and verification tasks across site operations." activeNav="My Tasks">
      <View style={styles.cardPanel}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHead}>Task ID</Text>
          <Text style={styles.tableHead}>Issue</Text>
          <Text style={styles.tableHead}>Mine</Text>
          <Text style={styles.tableHead}>Risk</Text>
          <Text style={styles.tableHead}>Officer</Text>
          <Text style={styles.tableHead}>Due Date</Text>
          <Text style={styles.tableHead}>Status</Text>
        </View>

        {tasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={styles.tableRow}
            onPress={() => router.push({ pathname: '/task-details', params: { taskId: task.id } })}
          >
            <Text style={styles.tableCell}>{task.id}</Text>
            <Text style={styles.tableCellTitle}>{task.issue}</Text>
            <Text style={styles.tableCell}>{task.mine}</Text>
            <Text style={[styles.tableCell, task.risk === 'HIGH' ? styles.riskHigh : task.risk === 'MEDIUM' ? styles.riskMedium : styles.riskLow]}>{task.risk}</Text>
            <Text style={styles.tableCell}>{task.assignedOfficer}</Text>
            <Text style={styles.tableCell}>{task.dueDate}</Text>
            <View style={[styles.statusBadge, task.status === 'ACTION IN PROGRESS' ? styles.progressBadge : styles.assignedBadge]}>
              <Text style={[styles.statusText, task.status === 'ACTION IN PROGRESS' ? styles.progressText : styles.assignedText]}>{task.status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  cardPanel: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 18,
  },

  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f4',
  },

  tableHead: {
    flex: 1,
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },

  tableCell: {
    flex: 1,
    color: '#17202A',
    fontSize: 12,
    fontWeight: '600',
  },

  tableCellTitle: {
    flex: 1,
    color: '#17202A',
    fontSize: 12,
    fontWeight: '700',
  },

  riskHigh: { color: '#e5484d' },
  riskMedium: { color: '#f4b942' },
  riskLow: { color: '#18A957' },

  statusBadge: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 999,
  },

  progressBadge: { backgroundColor: '#fff7e6' },
  assignedBadge: { backgroundColor: '#edf5ff' },

  statusText: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  progressText: { color: '#d18d00' },
  assignedText: { color: '#3b82f6' },
});
