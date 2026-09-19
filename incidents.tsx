import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';
import { issues } from '@/data/mineguard-data';

const incidentList = issues.slice(0, 4).map((issue) => ({
  id: issue.id,
  issue: issue.title,
  mine: issue.mineId.replace('-', ' ').replace(/(^\w|\s\w)/g, (match) => match.toUpperCase()),
  risk: issue.risk === 'HIGH' ? 'High' : issue.risk === 'MEDIUM' ? 'Medium' : 'Low',
  status:
    issue.status === 'ASSIGNED'
      ? 'Assigned'
      : issue.status === 'UNDER REVIEW'
        ? 'Under Review'
        : issue.status === 'ACTION IN PROGRESS'
          ? 'In Progress'
          : issue.status === 'PENDING'
            ? 'Pending'
            : 'Resolved',
  date: issue.date,
}));

const summaryCards = [
  { label: 'Open cases', value: '28', tone: 'green' },
  { label: 'High risk', value: '07', tone: 'red' },
  { label: 'Resolved', value: '14', tone: 'amber' },
];

export default function IncidentsScreen() {
  return (
    <AdminLayout title="All Issues" subtitle="Monitor reported mine safety incidents and response status." activeNav="All Issues">
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.summaryRow}>
          {summaryCards.map((card) => (
            <View key={card.label} style={[styles.summaryCard, card.tone === 'green' ? styles.greenCard : card.tone === 'red' ? styles.redCard : styles.amberCard]}>
              <Text style={styles.summaryLabel}>{card.label}</Text>
              <Text style={styles.summaryValue}>{card.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.filterBar}>
          <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
            <Text style={styles.filterChipTextActive}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>High Risk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Pending</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableCard}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHead, styles.colId]}>ID</Text>
            <Text style={[styles.tableHead, styles.colTitle]}>Title</Text>
            <Text style={[styles.tableHead, styles.colMine]}>Mine</Text>
            <Text style={[styles.tableHead, styles.colRisk]}>Risk</Text>
            <Text style={[styles.tableHead, styles.colStatus]}>Status</Text>
            <Text style={[styles.tableHead, styles.colDate]}>Date</Text>
          </View>

          {incidentList.map((incident) => (
            <TouchableOpacity
              key={incident.id}
              style={styles.tableRow}
              onPress={() => router.push({ pathname: '/issue-details', params: { issueId: incident.id } })}
            >
              <Text style={[styles.tableCell, styles.colId]}>{incident.id}</Text>
              <Text style={[styles.tableCellTitle, styles.colTitle]}>{incident.issue}</Text>
              <Text style={[styles.tableCell, styles.colMine]}>{incident.mine}</Text>
              <Text style={[styles.tableCell, styles.colRisk, incident.risk === 'High' ? styles.riskHigh : incident.risk === 'Medium' ? styles.riskMedium : styles.riskLow]}>{incident.risk}</Text>
              <View style={[styles.statusBadge, styles.colStatus, incident.status === 'Assigned' ? styles.assignedBadge : incident.status === 'In Progress' ? styles.progressBadge : styles.pendingBadge]}>
                <Text style={[styles.statusText, incident.status === 'Assigned' ? styles.assignedText : incident.status === 'In Progress' ? styles.progressText : styles.pendingText]}>{incident.status}</Text>
              </View>
              <Text style={[styles.tableCell, styles.colDate]}>{incident.date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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

  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },

  summaryCard: {
    flex: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
  },

  greenCard: {
    backgroundColor: '#edf9f1',
    borderColor: '#d7f1dd',
  },

  redCard: {
    backgroundColor: '#fff1f1',
    borderColor: '#f5d6d6',
  },

  amberCard: {
    backgroundColor: '#fff7e6',
    borderColor: '#f9e3a7',
  },

  summaryLabel: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  summaryValue: {
    marginTop: 8,
    color: '#17202A',
    fontSize: 24,
    fontWeight: '800',
  },

  filterBar: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 10,
    marginBottom: 18,
  },

  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#edf1f4',
  },

  filterChipActive: {
    backgroundColor: '#142536',
  },

  filterChipText: {
    color: '#455467',
    fontSize: 12,
    fontWeight: '700',
  },

  filterChipTextActive: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },

  tableCard: {
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
    color: '#6B7280',
    fontSize: 12,
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
    color: '#17202A',
    fontSize: 12,
    fontWeight: '600',
  },

  tableCellTitle: {
    color: '#17202A',
    fontSize: 12,
    fontWeight: '700',
  },

  colId: { flex: 0.8 },
  colTitle: { flex: 1.4 },
  colMine: { flex: 1.2 },
  colRisk: { flex: 0.8 },
  colStatus: { flex: 1.3 },
  colDate: { flex: 1 },

  riskHigh: { color: '#e5484d' },
  riskMedium: { color: '#f4b942' },
  riskLow: { color: '#18A957' },

  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 999,
  },

  assignedBadge: { backgroundColor: '#edf5ff' },
  progressBadge: { backgroundColor: '#fff7e6' },
  pendingBadge: { backgroundColor: '#fff1f1' },

  statusText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  assignedText: { color: '#3b82f6' },
  progressText: { color: '#d18d00' },
  pendingText: { color: '#e5484d' },
});