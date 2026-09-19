import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const navigation = [
  'Dashboard',
  'Report Issue',
  'My Tasks',
  'All Issues',
  'Analytics',
  'Mines',
  'Reports',
  'Users',
  'Settings',
];

const statCards = [
  { label: 'Total Issues', value: '124', tone: 'red', icon: '⚠' },
  { label: 'Pending Action', value: '28', tone: 'orange', icon: '◔' },
  { label: 'In Progress', value: '46', tone: 'blue', icon: '◷' },
  { label: 'Closed', value: '50', tone: 'green', icon: '✓' },
];

const categoryData = [
  { label: 'Safety', value: 35, color: '#e5484d' },
  { label: 'Environment', value: 28, color: '#18A957' },
  { label: 'Geotechnical', value: 22, color: '#F4B942' },
  { label: 'Equipment', value: 15, color: '#3B82F6' },
];

const issueRows = [
  { id: '#2634', title: 'Slope instability', mine: 'Gevra Mine', risk: 'High', status: 'Assigned', date: '18 Sep 2026' },
  { id: '#2633', title: 'Water leakage', mine: 'Taicher Mine', risk: 'Medium', status: 'In Progress', date: '18 Sep 2026' },
  { id: '#2632', title: 'Dust emission', mine: 'Korba Mine', risk: 'Medium', status: 'Pending', date: '17 Sep 2026' },
  { id: '#2631', title: 'Equipment fault', mine: 'Singrauli Mine', risk: 'Low', status: 'Closed', date: '16 Sep 2026' },
];

const reportLinks = [
  { name: 'Automatic ATR', type: 'Safety', status: 'Completed', date: '18 Sep 2026' },
  { name: 'Compliance Report', type: 'Ops', status: 'Generated', date: '15 Sep 2026' },
  { name: 'Weekly Summary', type: 'Analytics', status: 'Draft', date: '12 Sep 2026' },
];

const mineMarkers = [
  { name: 'Gevra Mine', risk: 'High', left: '54%', top: '28%' },
  { name: 'Korba Mine', risk: 'Medium', left: '38%', top: '42%' },
  { name: 'Singrauli', risk: 'Low', left: '60%', top: '61%' },
  { name: 'Taicher', risk: 'Medium', left: '72%', top: '52%' },
];

function StatCard({ item }: { item: { label: string; value: string; tone: string; icon: string } }) {
  const toneStyle =
    item.tone === 'red'
      ? styles.redCard
      : item.tone === 'orange'
        ? styles.orangeCard
        : item.tone === 'blue'
          ? styles.blueCard
          : styles.greenCard;

  return (
    <View style={[styles.statCard, toneStyle]}>
      <View style={styles.cardTopRow}>
        <View style={styles.statIconWrap}>
          <Text style={styles.statIcon}>{item.icon}</Text>
        </View>
      </View>
      <Text style={styles.statValue}>{item.value}</Text>
      <Text style={styles.statLabel}>{item.label}</Text>
    </View>
  );
}

export default function AdminScreen() {
  const activeNav = 'Dashboard';

  return (
    <View style={styles.shell}>
      <View style={styles.sidebar}>
        <View style={styles.brandBlock}>
          <View style={styles.brandBubble}>
            <Text style={styles.brandBubbleText}>M</Text>
          </View>
          <Text style={styles.brandName}>MineGuard 360</Text>
        </View>

        <View style={styles.navSection}>
          {navigation.map((item) => (
            <TouchableOpacity
              key={item}
              activeOpacity={0.8}
              style={[styles.navItem, item === activeNav && styles.navItemActive]}
              onPress={() => {
                if (item === 'Report Issue') router.push('/report');
                if (item === 'Dashboard') router.push('/admin');
                if (item === 'My Tasks') router.push('/my-tasks');
                if (item === 'All Issues') router.push('/all-issues');
                if (item === 'Analytics') router.push('/safety-analytics');
                if (item === 'Mines') router.push('/mines');
                if (item === 'Reports') router.push('/reports');
                if (item === 'Users') router.push('/users');
                if (item === 'Settings') router.push('/settings');
              }}
            >
              <Text style={[styles.navIcon, item === activeNav && styles.navIconActive]}>
                {item === 'Dashboard' ? '◫' : item === 'Report Issue' ? '✎' : item === 'My Tasks' ? '✓' : item === 'All Issues' ? '▣' : item === 'Analytics' ? '◌' : item === 'Mines' ? '⌂' : item === 'Reports' ? '▤' : item === 'Users' ? '◔' : '⚙'}
              </Text>
              <Text style={[styles.navText, item === activeNav && styles.navTextActive]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={styles.mainArea} contentContainerStyle={styles.mainContent}>
        <View style={styles.topBar}>
          <View style={styles.searchWrap}>
            <Text style={styles.searchIcon}>⌕</Text>
            <TextInput placeholder="Search issues, locations, actions..." placeholderTextColor="#6B7280" style={styles.searchInput} />
          </View>

          <View style={styles.topActions}>
            <View style={styles.iconButton}>
              <Text style={styles.iconButtonText}>🔔</Text>
            </View>
            <View style={styles.userBlock}>
              <Text style={styles.avatar}>AD</Text>
              <View style={styles.userMeta}>
                <Text style={styles.userName}>Ravi Kumar</Text>
                <Text style={styles.userRole}>Admin</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.pageHeader}>
          <View>
            <Text style={styles.pageTitle}>Dashboard</Text>
            <Text style={styles.pageSubtitle}>Real-time overview of mine compliance and remedial actions</Text>
          </View>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.9}>
            <Text style={styles.filterButtonText}>Last 30 Days</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridStats}>
          {statCards.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </View>

        <View style={styles.analyticsRow}>
          <View style={styles.cardPanel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>Issues by Category</Text>
              <Text style={styles.panelMeta}>124</Text>
            </View>
            <View style={styles.donutWrap}>
              <View style={styles.donutChart}>
                <View style={styles.donutInner}>
                  <Text style={styles.donutValue}>124</Text>
                  <Text style={styles.donutLabel}>Total</Text>
                </View>
              </View>
              <View style={styles.legendList}>
                {categoryData.map((item) => (
                  <View key={item.label} style={styles.legendRow}>
                    <View style={[styles.legendSwatch, { backgroundColor: item.color }]} />
                    <Text style={styles.legendLabel}>{item.label}</Text>
                    <Text style={styles.legendValue}>{item.value}%</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.cardPanel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>Risk Level Distribution</Text>
            </View>
            <View style={styles.barList}>
              {[
                { label: 'High', value: 32, color: '#e5484d' },
                { label: 'Medium', value: 56, color: '#f4b942' },
                { label: 'Low', value: 75, color: '#18A957' },
              ].map((bar) => (
                <View key={bar.label} style={styles.barRow}>
                  <Text style={styles.barLabel}>{bar.label}</Text>
                  <View style={styles.barTrack}>
                    <View style={[styles.barFill, { width: `${bar.value}%`, backgroundColor: bar.color }]} />
                  </View>
                  <Text style={styles.barNumber}>{bar.value}%</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.tablePanel}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelTitle}>Recent Issues</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkButtonText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHead}>ID</Text>
            <Text style={styles.tableHead}>Title</Text>
            <Text style={styles.tableHead}>Mine</Text>
            <Text style={styles.tableHead}>Risk</Text>
            <Text style={styles.tableHead}>Status</Text>
            <Text style={styles.tableHead}>Date</Text>
          </View>
          {issueRows.map((row) => (
            <View key={row.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{row.id}</Text>
              <Text style={styles.tableCellTitle}>{row.title}</Text>
              <Text style={styles.tableCell}>{row.mine}</Text>
              <Text style={[styles.tableCell, row.risk === 'High' ? styles.riskHigh : row.risk === 'Medium' ? styles.riskMedium : styles.riskLow]}>{row.risk}</Text>
              <View style={[styles.statusBadge, row.status === 'Assigned' ? styles.assignedBadge : row.status === 'In Progress' ? styles.progressBadge : row.status === 'Pending' ? styles.pendingBadge : styles.closedBadge]}>
                <Text style={[styles.statusBadgeText, row.status === 'Assigned' ? styles.assignedText : row.status === 'In Progress' ? styles.progressText : row.status === 'Pending' ? styles.pendingText : styles.closedText]}>{row.status}</Text>
              </View>
              <Text style={styles.tableCell}>{row.date}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.mapPanel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>Mine Overview</Text>
              <Text style={styles.panelMeta}>All Mines</Text>
            </View>
            <View style={styles.mapWrap}>
              <View style={styles.mapBackground} />
              {mineMarkers.map((marker) => (
                <View key={marker.name} style={[styles.mapMarker, { left: `${marker.left}` as any, top: `${marker.top}` as any }, marker.risk === 'High' ? styles.highMarker : marker.risk === 'Medium' ? styles.mediumMarker : styles.lowMarker]}>
                  <Text style={styles.markerDot} />
                </View>
              ))}
            </View>
          </View>

          <View style={styles.reportPanel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>Reports & ATR</Text>
              <Text style={styles.panelMeta}>3 Files</Text>
            </View>
            <View style={styles.reportList}>
              {reportLinks.map((report) => (
                <View key={report.name} style={styles.reportItem}>
                  <View>
                    <Text style={styles.reportName}>{report.name}</Text>
                    <Text style={styles.reportMeta}>{report.type} • {report.date}</Text>
                  </View>
                  <View style={styles.reportRight}>
                    <Text style={styles.reportStatus}>{report.status}</Text>
                    <Text style={styles.reportDownload}>Download</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
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
    width: 240,
    backgroundColor: '#142536',
    paddingVertical: 24,
    paddingHorizontal: 18,
  },

  brandBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    paddingHorizontal: 8,
  },

  brandBubble: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#18A957',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  brandBubbleText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },

  brandName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  navSection: {
    gap: 8,
  },

  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },

  navItemActive: {
    backgroundColor: '#1d3045',
    borderWidth: 1,
    borderColor: '#29415c',
  },

  navIcon: {
    color: '#dfeaf1',
    fontSize: 15,
    width: 18,
    textAlign: 'center',
    marginRight: 10,
  },

  navIconActive: {
    color: '#18A957',
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

  mainArea: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },

  mainContent: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 30,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  searchWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 46,
    borderWidth: 1,
    borderColor: '#ecf0f3',
    marginRight: 18,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 8,
    color: '#6B7280',
  },

  searchInput: {
    flex: 1,
    color: '#17202A',
    fontSize: 14,
  },

  topActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ecf0f3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconButtonText: {
    fontSize: 16,
  },

  userBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ecf0f3',
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#d8f1e0',
    color: '#0b6b3d',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: '800',
    marginRight: 8,
  },

  userMeta: {
    marginRight: 8,
  },

  userName: {
    color: '#17202A',
    fontSize: 13,
    fontWeight: '700',
  },

  userRole: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '600',
  },

  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  pageTitle: {
    color: '#17202A',
    fontSize: 28,
    fontWeight: '800',
  },

  pageSubtitle: {
    color: '#6B7280',
    fontSize: 13,
    marginTop: 4,
  },

  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ecf0f3',
    borderRadius: 10,
  },

  filterButtonText: {
    color: '#17202A',
    fontWeight: '700',
    fontSize: 13,
  },

  gridStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginBottom: 20,
  },

  statCard: {
    flexBasis: '23%',
    minWidth: 170,
    flexGrow: 1,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    minHeight: 126,
  },

  redCard: { backgroundColor: '#fff1f1', borderColor: '#f7d0d2' },
  orangeCard: { backgroundColor: '#fff7e6', borderColor: '#f4d9a9' },
  blueCard: { backgroundColor: '#edf5ff', borderColor: '#d2e4ff' },
  greenCard: { backgroundColor: '#edf9f1', borderColor: '#d2f1df' },

  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  statIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statIcon: {
    fontSize: 14,
  },

  statValue: {
    color: '#17202A',
    fontWeight: '800',
    fontSize: 24,
    marginTop: 16,
    marginBottom: 6,
  },

  statLabel: {
    color: '#667085',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  analyticsRow: {
    flexDirection: 'row',
    gap: 18,
    marginBottom: 20,
  },

  cardPanel: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 18,
  },

  panelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  panelTitle: {
    color: '#17202A',
    fontSize: 18,
    fontWeight: '800',
  },

  panelMeta: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '700',
  },

  donutWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  donutChart: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#f1f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  donutInner: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  donutValue: {
    color: '#17202A',
    fontSize: 30,
    fontWeight: '800',
  },

  donutLabel: {
    color: '#667085',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  legendList: {
    flex: 1,
    gap: 10,
  },

  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  legendSwatch: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },

  legendLabel: {
    flex: 1,
    color: '#4b5563',
    fontSize: 13,
    fontWeight: '600',
  },

  legendValue: {
    color: '#17202A',
    fontSize: 13,
    fontWeight: '700',
  },

  barList: {
    gap: 16,
    marginTop: 10,
  },

  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  barLabel: {
    width: 50,
    color: '#4b5563',
    fontSize: 13,
    fontWeight: '700',
  },

  barTrack: {
    flex: 1,
    height: 10,
    backgroundColor: '#eef2f4',
    borderRadius: 999,
    overflow: 'hidden',
    marginHorizontal: 12,
  },

  barFill: {
    height: '100%',
    borderRadius: 999,
  },

  barNumber: {
    color: '#17202A',
    fontSize: 12,
    fontWeight: '700',
  },

  tablePanel: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 18,
    marginBottom: 20,
  },

  linkButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#eefaf4',
  },

  linkButtonText: {
    color: '#18A957',
    fontWeight: '700',
    fontSize: 12,
  },

  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f4',
  },

  tableHead: {
    flex: 1,
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },

  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f4f6',
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

  assignedBadge: { backgroundColor: '#edf5ff' },
  progressBadge: { backgroundColor: '#fff7e6' },
  pendingBadge: { backgroundColor: '#fff1f1' },
  closedBadge: { backgroundColor: '#edf9f1' },

  statusBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },

  assignedText: { color: '#3b82f6' },
  progressText: { color: '#f59e0b' },
  pendingText: { color: '#e5484d' },
  closedText: { color: '#18A957' },

  bottomRow: {
    flexDirection: 'row',
    gap: 18,
  },

  mapPanel: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 18,
  },

  mapWrap: {
    height: 230,
    backgroundColor: '#eaf4ef',
    borderRadius: 16,
    position: 'relative',
    overflow: 'hidden',
  },

  mapBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#edf6ef',
    borderRadius: 16,
  },

  mapMarker: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateX: -9 }, { translateY: -9 }],
  },

  markerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },

  highMarker: { backgroundColor: '#e5484d' },
  mediumMarker: { backgroundColor: '#f4b942' },
  lowMarker: { backgroundColor: '#18A957' },

  reportPanel: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#edf1f4',
    padding: 18,
  },

  reportList: {
    gap: 12,
  },

  reportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f4f6',
  },

  reportName: {
    color: '#17202A',
    fontSize: 13,
    fontWeight: '700',
  },

  reportMeta: {
    color: '#6B7280',
    fontSize: 11,
    marginTop: 3,
  },

  reportRight: {
    alignItems: 'flex-end',
  },

  reportStatus: {
    color: '#18A957',
    fontSize: 11,
    fontWeight: '700',
  },

  reportDownload: {
    color: '#3B82F6',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
  },
});