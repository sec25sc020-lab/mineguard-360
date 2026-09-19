import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';
import { issues } from '@/data/mineguard-data';

export default function AllIssuesScreen() {
  const [search, setSearch] = useState('');
  const [mineFilter, setMineFilter] = useState('');
  const [riskFilter, setRiskFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const visibleIssues = useMemo(() => {
    return issues.filter((issue) => {
      const matchesSearch =
        issue.title.toLowerCase().includes(search.toLowerCase()) ||
        issue.id.toLowerCase().includes(search.toLowerCase());
      const matchesMine = issue.mineId.toLowerCase().includes(mineFilter.toLowerCase());
      const matchesRisk = riskFilter ? issue.risk === riskFilter.toUpperCase() : true;
      const matchesCategory = categoryFilter ? issue.category.toLowerCase().includes(categoryFilter.toLowerCase()) : true;
      const matchesStatus = statusFilter ? issue.status.toLowerCase().includes(statusFilter.toLowerCase()) : true;
      const matchesDate = dateFilter ? issue.date.toLowerCase().includes(dateFilter.toLowerCase()) : true;

      return matchesSearch && matchesMine && matchesRisk && matchesCategory && matchesStatus && matchesDate;
    });
  }, [search, mineFilter, riskFilter, categoryFilter, statusFilter, dateFilter]);

  return (
    <AdminLayout title="All Issues" subtitle="Track every issue and route it to the appropriate response team." activeNav="All Issues">
      <View style={styles.filterPanel}>
        <View style={styles.filterRow}>
          <TextInput value={search} onChangeText={setSearch} placeholder="Search issue" style={styles.filterInput} placeholderTextColor="#6B7280" />
          <TextInput value={mineFilter} onChangeText={setMineFilter} placeholder="Mine" style={styles.filterInput} placeholderTextColor="#6B7280" />
          <TextInput value={riskFilter} onChangeText={setRiskFilter} placeholder="Risk Level" style={styles.filterInput} placeholderTextColor="#6B7280" />
        </View>
        <View style={styles.filterRow}>
          <TextInput value={categoryFilter} onChangeText={setCategoryFilter} placeholder="Category" style={styles.filterInput} placeholderTextColor="#6B7280" />
          <TextInput value={statusFilter} onChangeText={setStatusFilter} placeholder="Status" style={styles.filterInput} placeholderTextColor="#6B7280" />
          <TextInput value={dateFilter} onChangeText={setDateFilter} placeholder="Date" style={styles.filterInput} placeholderTextColor="#6B7280" />
        </View>
      </View>

      <View style={styles.cardPanel}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHead}>Issue ID</Text>
          <Text style={styles.tableHead}>Issue Title</Text>
          <Text style={styles.tableHead}>Mine</Text>
          <Text style={styles.tableHead}>Category</Text>
          <Text style={styles.tableHead}>Risk</Text>
          <Text style={styles.tableHead}>Assigned Officer</Text>
          <Text style={styles.tableHead}>Status</Text>
          <Text style={styles.tableHead}>Date</Text>
        </View>

        {visibleIssues.map((issue) => (
          <TouchableOpacity key={issue.id} style={styles.tableRow} onPress={() => router.push({ pathname: '/issue-details', params: { issueId: issue.id } })}>
            <Text style={styles.tableCell}>{issue.id}</Text>
            <Text style={styles.tableCellTitle}>{issue.title}</Text>
            <Text style={styles.tableCell}>{issue.mineId.replace('-', ' ').replace(/(^\w|\s\w)/g, (match) => match.toUpperCase())}</Text>
            <Text style={styles.tableCell}>{issue.category}</Text>
            <Text style={[styles.tableCell, issue.risk === 'HIGH' ? styles.riskHigh : issue.risk === 'MEDIUM' ? styles.riskMedium : styles.riskLow]}>{issue.risk}</Text>
            <Text style={styles.tableCell}>{issue.assignedOfficer}</Text>
            <Text style={styles.tableCell}>{issue.status}</Text>
            <Text style={styles.tableCell}>{issue.date}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  filterPanel: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 18,
    marginBottom: 18,
  },

  filterRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  filterInput: {
    flex: 1,
    minHeight: 42,
    borderRadius: 10,
    backgroundColor: '#f7f9fa',
    borderWidth: 1,
    borderColor: '#e6ebee',
    paddingHorizontal: 12,
    color: '#17202A',
  },

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
    fontSize: 10,
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
    fontSize: 11,
    fontWeight: '600',
  },

  tableCellTitle: {
    flex: 1,
    color: '#17202A',
    fontSize: 11,
    fontWeight: '700',
  },

  riskHigh: { color: '#e5484d' },
  riskMedium: { color: '#f4b942' },
  riskLow: { color: '#18A957' },
});
