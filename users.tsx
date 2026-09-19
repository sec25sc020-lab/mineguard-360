import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AdminLayout } from '@/components/admin-layout';

const initialUsers = [
  { id: 'U-101', name: 'Ravi Kumar', role: 'Admin', department: 'Safety Operations' },
  { id: 'U-102', name: 'S. Mehta', role: 'Safety Officer', department: 'Geva Mine' },
  { id: 'U-103', name: 'R. Kumar', role: 'Compliance Officer', department: 'Korba Mine' },
  { id: 'U-104', name: 'A. Singh', role: 'Mine Officer', department: 'Taicher Mine' },
];

export default function UsersScreen() {
  const [users] = useState(initialUsers);

  return (
    <AdminLayout title="Users" subtitle="Role-based supervision and access overview for active mine operations." activeNav="Users">
      <View style={styles.cardPanel}>
        {users.map((user) => (
          <View key={user.id} style={styles.userRow}>
            <View style={styles.avatar}><Text style={styles.avatarText}>{user.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</Text></View>
            <View style={styles.userMeta}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userRole}>{user.role}</Text>
            </View>
            <Text style={styles.userDepartment}>{user.department}</Text>
            <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>View</Text></TouchableOpacity>
          </View>
        ))}
      </View>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  cardPanel: { backgroundColor: '#ffffff', borderRadius: 18, borderWidth: 1, borderColor: '#edf1f4', padding: 18 },
  userRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f1f3f4' },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#142536', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  avatarText: { color: '#fff', fontWeight: '800' },
  userMeta: { flex: 1 },
  userName: { color: '#17202A', fontSize: 15, fontWeight: '800' },
  userRole: { color: '#6B7280', fontSize: 12, marginTop: 4 },
  userDepartment: { flex: 1, color: '#17202A', fontSize: 12, fontWeight: '600', textAlign: 'center' },
  actionButton: { backgroundColor: '#edf9f1', borderColor: '#d6f0e2', borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  actionText: { color: '#0a6c3f', fontWeight: '700', fontSize: 11 },
});
