import { router } from 'expo-router';
import { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const navigation = [
  { label: 'Dashboard', route: '/admin', icon: '◫' },
  { label: 'Report Issue', route: '/report', icon: '✎' },
  { label: 'My Tasks', route: '/my-tasks', icon: '✓' },
  { label: 'All Issues', route: '/all-issues', icon: '▣' },
  { label: 'Analytics', route: '/safety-analytics', icon: '◌' },
  { label: 'Mines', route: '/mines', icon: '⌂' },
  { label: 'Reports', route: '/reports', icon: '▤' },
  { label: 'Users', route: '/users', icon: '◔' },
  { label: 'Settings', route: '/settings', icon: '⚙' },
] as const;

type AdminLayoutProps = {
  title: string;
  subtitle?: string;
  activeNav: string;
  children: ReactNode;
  headerAction?: ReactNode;
  showSearch?: boolean;
};

export function AdminLayout({
  title,
  subtitle,
  activeNav,
  children,
  headerAction,
  showSearch = true,
}: AdminLayoutProps) {
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
              key={item.label}
              activeOpacity={0.8}
              style={[styles.navItem, item.label === activeNav && styles.navItemActive]}
              onPress={() => router.push(item.route)}
            >
              <Text style={[styles.navIcon, item.label === activeNav && styles.navIconActive]}>{item.icon}</Text>
              <Text style={[styles.navText, item.label === activeNav && styles.navTextActive]}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={styles.mainArea} contentContainerStyle={styles.mainContent}>
        <View style={styles.topBar}>
          {showSearch ? (
            <View style={styles.searchWrap}>
              <Text style={styles.searchIcon}>⌕</Text>
              <TextInput placeholder="Search issues, locations, actions..." placeholderTextColor="#6B7280" style={styles.searchInput} />
            </View>
          ) : <View style={styles.spacer} />}

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
            <Text style={styles.pageTitle}>{title}</Text>
            {subtitle ? <Text style={styles.pageSubtitle}>{subtitle}</Text> : null}
          </View>
          {headerAction ? headerAction : null}
        </View>

        {children}
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

  spacer: {
    flex: 1,
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
});
