import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';
import { reports } from '@/data/mineguard-data';

type TabType = 'Automatic ATR' | 'Compliance Report' | 'Analytics Report';

export default function ReportsScreen() {
  const [activeTab, setActiveTab] = useState<TabType>('Automatic ATR');

  const handleDemoAction = (action: string) => {
    Alert.alert('Demo Action', `${action} clicked. This is a prototype confirmation only.`);
  };

  const tabContent = (() => {
    switch (activeTab) {
      case 'Compliance Report':
        return (
          <View style={styles.cardPanel}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHead}>Mine</Text>
              <Text style={styles.tableHead}>Total Issues</Text>
              <Text style={styles.tableHead}>High Risk</Text>
              <Text style={styles.tableHead}>Resolved</Text>
              <Text style={styles.tableHead}>Pending</Text>
              <Text style={styles.tableHead}>Compliance Rate</Text>
            </View>
            {[
              { mine: 'Geva Mine', totalIssues: 12, highRisk: 4, resolved: 7, pending: 3, complianceRate: '82%' },
              { mine: 'Korba Mine', totalIssues: 9, highRisk: 2, resolved: 6, pending: 2, complianceRate: '88%' },
              { mine: 'Taicher Mine', totalIssues: 15, highRisk: 5, resolved: 9, pending: 5, complianceRate: '77%' },
            ].map((row) => (
              <View key={row.mine} style={styles.tableRow}>
                <Text style={styles.tableCell}>{row.mine}</Text>
                <Text style={styles.tableCell}>{row.totalIssues}</Text>
                <Text style={styles.tableCell}>{row.highRisk}</Text>
                <Text style={styles.tableCell}>{row.resolved}</Text>
                <Text style={styles.tableCell}>{row.pending}</Text>
                <Text style={styles.tableCell}>{row.complianceRate}</Text>
              </View>
            ))}
          </View>
        );
      case 'Analytics Report':
        return (
          <View style={styles.cardPanel}>
            <View style={styles.metricsGrid}>
              <View style={styles.metricCard}><Text style={styles.metricLabel}>Issue Trends</Text><Text style={styles.metricValue}>Down 8%</Text></View>
              <View style={styles.metricCard}><Text style={styles.metricLabel}>Risk Distribution</Text><Text style={styles.metricValue}>High risk reduced by 3%</Text></View>
              <View style={styles.metricCard}><Text style={styles.metricLabel}>Mine Comparison</Text><Text style={styles.metricValue}>Geva vs Korba pit safety</Text></View>
              <View style={styles.metricCard}><Text style={styles.metricLabel}>Resolution Trends</Text><Text style={styles.metricValue}>Resolution speed improved 12%</Text></View>
            </View>
          </View>
        );
      case 'Automatic ATR':
      default:
        return (
          <View style={styles.cardPanel}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHead}>Report Name</Text>
              <Text style={styles.tableHead}>Report Type</Text>
              <Text style={styles.tableHead}>Generated On</Text>
              <Text style={styles.tableHead}>Status</Text>
              <Text style={styles.tableHead}>Download</Text>
            </View>
            {reports.map((report) => (
              <View key={report.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{report.name}</Text>
                <Text style={styles.tableCell}>{report.type}</Text>
                <Text style={styles.tableCell}>{report.generatedOn}</Text>
                <View style={styles.statusWrap}><Text style={styles.statusText}>{report.status}</Text></View>
                <TouchableOpacity style={styles.smallButton} onPress={() => handleDemoAction('Download')}>
                  <Text style={styles.smallButtonText}>Download</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        );
    }
  })();

  return (
    <AdminLayout title="Reports & ATR" subtitle="Audit trail, compliance views, and mine analytics package." activeNav="Reports" headerAction={
      <TouchableOpacity style={styles.primaryButton} onPress={() => handleDemoAction('Generate Report')}>
        <Text style={styles.primaryButtonText}>GENERATE REPORT</Text>
      </TouchableOpacity>
    }>
      <View style={styles.tabStrip}>
        {(['Automatic ATR', 'Compliance Report', 'Analytics Report'] as TabType[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>{tabContent}</ScrollView>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => handleDemoAction('View Report')}>
          <Text style={styles.secondaryButtonText}>VIEW REPORT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => handleDemoAction('Download')}>
          <Text style={styles.secondaryButtonText}>DOWNLOAD</Text>
        </TouchableOpacity>
      </View>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  tabStrip: { flexDirection: 'row', gap: 10, marginBottom: 18, flexWrap: 'wrap' },
  tabButton: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e9edf1' },
  tabButtonActive: { backgroundColor: '#142536', borderColor: '#142536' },
  tabText: { color: '#17202A', fontWeight: '700', fontSize: 12 },
  tabTextActive: { color: '#fff' },
  contentContainer: { paddingBottom: 20 },
  cardPanel: { backgroundColor: '#ffffff', borderRadius: 18, borderWidth: 1, borderColor: '#edf1f4', padding: 18 },
  tableHeader: { flexDirection: 'row', paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#edf1f4' },
  tableHead: { flex: 1, color: '#6B7280', fontSize: 10, fontWeight: '800', textTransform: 'uppercase' },
  tableRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f1f3f4' },
  tableCell: { flex: 1, color: '#17202A', fontSize: 12, fontWeight: '600' },
  statusWrap: { flex: 1, alignSelf: 'center' },
  statusText: { color: '#18A957', fontSize: 10, fontWeight: '800', textTransform: 'uppercase' },
  smallButton: { flex: 1, alignSelf: 'stretch', backgroundColor: '#eef4ff', borderRadius: 10, paddingVertical: 8, alignItems: 'center', borderWidth: 1, borderColor: '#d9e6ff' },
  smallButtonText: { color: '#1d4ed8', fontWeight: '700', fontSize: 11 },
  primaryButton: { backgroundColor: '#142536', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 12 },
  primaryButtonText: { color: '#fff', fontWeight: '800', fontSize: 12 },
  secondaryButton: { backgroundColor: '#edf9f1', borderWidth: 1, borderColor: '#d6f0e2', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12 },
  secondaryButtonText: { color: '#0a6c3f', fontWeight: '800', fontSize: 12 },
  actionRow: { flexDirection: 'row', gap: 12, marginTop: 18 },
  metricsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  metricCard: { width: '48%', backgroundColor: '#f8fafb', borderRadius: 14, borderWidth: 1, borderColor: '#edf1f4', padding: 18 },
  metricLabel: { color: '#6B7280', fontSize: 11, fontWeight: '800', textTransform: 'uppercase' },
  metricValue: { color: '#17202A', fontSize: 16, fontWeight: '700', marginTop: 10 },
});
