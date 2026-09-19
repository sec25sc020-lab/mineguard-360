import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';
import { getIssuesByMine, getMineById, getOfficersByMine, getSensorByMine, getWorkersByMine } from '@/data/mineguard-data';

export type MineTab = 'Overview' | 'Issues' | 'Sensors' | 'Workers' | 'Officers' | 'Safety';

function TabButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity style={[styles.tabButton, active && styles.tabButtonActive]} onPress={onPress}>
      <Text style={[styles.tabText, active && styles.tabTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

export function MineDetailsScreen({ initialTab = 'Overview' }: { initialTab?: MineTab }) {
  const { mineId } = useLocalSearchParams<{ mineId?: string }>();
  const selectedMineId = String(mineId ?? 'geva-mine');
  const mine = getMineById(selectedMineId);
  const issues = getIssuesByMine(mine.id);
  const workers = getWorkersByMine(mine.id);
  const officers = getOfficersByMine(mine.id);
  const sensors = getSensorByMine(mine.id);
  const [activeTab, setActiveTab] = useState<MineTab>(initialTab);

  const renderOverview = () => (
    <View style={styles.tabContent}>
      <View style={styles.statsRow}>
        <View style={styles.statCard}><Text style={styles.statLabel}>Total Issues</Text><Text style={styles.statValue}>{mine.totalIssues}</Text></View>
        <View style={styles.statCard}><Text style={styles.statLabel}>High Risk</Text><Text style={styles.statValue}>{mine.highRisk}</Text></View>
        <View style={styles.statCard}><Text style={styles.statLabel}>Medium Risk</Text><Text style={styles.statValue}>{mine.mediumRisk}</Text></View>
        <View style={styles.statCard}><Text style={styles.statLabel}>Low Risk</Text><Text style={styles.statValue}>{mine.lowRisk}</Text></View>
      </View>

      <View style={styles.infoGrid}>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Safety Status</Text>
          <Text style={styles.statusText}>{mine.safetyStatus}</Text>
          <Text style={styles.cardNote}>Open issues: {mine.openIssues}</Text>
          <Text style={styles.cardNote}>Closed issues: {mine.closedIssues}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Operational Summary</Text>
          <Text style={styles.cardNote}>Workers active: {workers.length}</Text>
          <Text style={styles.cardNote}>Officers assigned: {officers.length}</Text>
          <Text style={styles.cardNote}>Sensor channels: {sensors.length}</Text>
        </View>
      </View>
    </View>
  );

  const renderIssues = () => (
    <View style={styles.tabContent}>
      {issues.map((issue) => (
        <TouchableOpacity key={issue.id} style={styles.listCard} onPress={() => Alert.alert('Issue Detail', `${issue.title} (${issue.id})`) }>
          <Text style={styles.listTitle}>{issue.title}</Text>
          <Text style={styles.cardNote}>{issue.id} • {issue.category}</Text>
          <Text style={styles.cardNote}>Risk: {issue.risk} • Status: {issue.status}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderSensors = () => (
    <View style={styles.tabContent}>
      {sensors.map((sensor) => (
        <View key={sensor.id} style={styles.listCard}>
          <Text style={styles.listTitle}>{sensor.reading}</Text>
          <Text style={styles.cardNote}>{sensor.location}</Text>
          <Text style={styles.cardNote}>Value: {sensor.value}</Text>
          <Text style={styles.cardNote}>Time: {sensor.timestamp}</Text>
        </View>
      ))}
    </View>
  );

  const renderWorkers = () => (
    <View style={styles.tabContent}>
      {workers.map((worker) => (
        <View key={worker.id} style={styles.listCard}>
          <Text style={styles.listTitle}>{worker.name}</Text>
          <Text style={styles.cardNote}>{worker.id} • {worker.zone}</Text>
          <Text style={styles.cardNote}>Status: {worker.status}</Text>
          <Text style={styles.cardNote}>Last check: {worker.lastCheck}</Text>
        </View>
      ))}
    </View>
  );

  const renderOfficers = () => (
    <View style={styles.tabContent}>
      {officers.map((officer) => (
        <View key={officer.id} style={styles.listCard}>
          <Text style={styles.listTitle}>{officer.name}</Text>
          <Text style={styles.cardNote}>{officer.role}</Text>
          <Text style={styles.cardNote}>{officer.shift} • {officer.status}</Text>
        </View>
      ))}
    </View>
  );

  const renderSafety = () => (
    <View style={styles.tabContent}>
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Risk Overview</Text>
        <Text style={styles.cardNote}>High risk: {mine.highRisk}</Text>
        <Text style={styles.cardNote}>Medium risk: {mine.mediumRisk}</Text>
        <Text style={styles.cardNote}>Low risk: {mine.lowRisk}</Text>
        <Text style={styles.cardNote}>Current safety status: {mine.safetyStatus}</Text>
      </View>
    </View>
  );

  const renderTab = () => {
    switch (activeTab) {
      case 'Issues':
        return renderIssues();
      case 'Sensors':
        return renderSensors();
      case 'Workers':
        return renderWorkers();
      case 'Officers':
        return renderOfficers();
      case 'Safety':
        return renderSafety();
      default:
        return renderOverview();
    }
  };

  return (
    <AdminLayout title={mine.name} subtitle={`${mine.location} • ${mine.safetyStatus}`} activeNav="Mines" showSearch={false}>
      <View style={styles.tabStrip}>
        {(['Overview', 'Issues', 'Sensors', 'Workers', 'Officers', 'Safety'] as MineTab[]).map((tab) => (
          <TabButton key={tab} label={tab} active={activeTab === tab} onPress={() => setActiveTab(tab)} />
        ))}
      </View>

      <ScrollView style={styles.contentScroll} contentContainerStyle={styles.contentContainer}>
        {renderTab()}
      </ScrollView>
    </AdminLayout>
  );
}

export default function MineDetailsPage({ initialTab = 'Overview' }: { initialTab?: MineTab }) {
  return <MineDetailsScreen initialTab={initialTab} />;
}

const styles = StyleSheet.create({
  tabStrip: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },

  tabButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ecf0f3',
  },

  tabButtonActive: {
    backgroundColor: '#142536',
    borderColor: '#142536',
  },

  tabText: {
    color: '#17202A',
    fontWeight: '700',
    fontSize: 12,
  },

  tabTextActive: {
    color: '#fff',
  },

  contentScroll: {
    maxHeight: 640,
  },

  contentContainer: {
    paddingBottom: 20,
  },

  tabContent: {
    gap: 16,
  },

  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  statCard: {
    flexBasis: '23%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 16,
  },

  statLabel: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  statValue: {
    color: '#17202A',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 8,
  },

  infoGrid: {
    flexDirection: 'row',
    gap: 16,
  },

  infoCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 18,
  },

  cardTitle: {
    color: '#17202A',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },

  cardNote: {
    color: '#6B7280',
    fontSize: 13,
    marginTop: 6,
  },

  statusText: {
    color: '#18A957',
    fontSize: 20,
    fontWeight: '800',
  },

  listCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 16,
  },

  listTitle: {
    color: '#17202A',
    fontSize: 16,
    fontWeight: '800',
  },
});
