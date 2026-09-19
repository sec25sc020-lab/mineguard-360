import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

const demoAccounts = [
  { label: 'Admin', value: 'ADMIN001 / admin123' },
  { label: 'Worker', value: 'WORKER001 / worker123' },
  { label: 'Officer', value: 'OFFICER001 / officer123' },
];

export default function HomeScreen() {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (employeeId === 'ADMIN001' && password === 'admin123') {
      router.push('/admin');
    } else if (employeeId === 'WORKER001' && password === 'worker123') {
      router.push('/worker');
    } else if (employeeId === 'OFFICER001' && password === 'officer123') {
      router.push('/officer');
    } else {
      Alert.alert('Login Failed', 'Invalid Employee ID or Password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
          }}
          style={styles.heroImage}
          resizeMode="cover"
        >
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <View style={styles.brandRow}>
              <View style={styles.brandMark}>
                <Text style={styles.brandMarkText}>M</Text>
              </View>
              <Text style={styles.brandText}>MineGuard 360</Text>
            </View>
            <Text style={styles.tagline}>{`Safer Mines
Cleaner Environment
Stronger India`}</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.rightPanel}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.badge}>Welcome Back</Text>
              <Text style={styles.heading}>Sign in to continue</Text>
            </View>
            <View style={styles.statusDot} />
          </View>

          <Text style={styles.label}>Employee ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter employee ID"
            placeholderTextColor="#8AA3A0"
            value={employeeId}
            onChangeText={setEmployeeId}
            autoCapitalize="characters"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#8AA3A0"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={login}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.demoSection}>
            <Text style={styles.demoTitle}>Demo Accounts</Text>
            <View style={styles.demoRow}>
              {demoAccounts.map((account) => (
                <View key={account.label} style={styles.demoChip}>
                  <Text style={styles.demoLabel}>{account.label}</Text>
                  <Text style={styles.demoValue}>{account.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f4f7f8',
  },

  leftPanel: {
    flex: 1.2,
    minWidth: 360,
    backgroundColor: '#0d1f2a',
  },

  heroImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  heroOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(8, 17, 22, 0.5)',
  },

  heroContent: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    zIndex: 1,
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  brandMark: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#18A957',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  brandMarkText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 20,
  },

  brandText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  tagline: {
    color: '#f2f8f6',
    fontSize: 26,
    lineHeight: 34,
    fontWeight: '700',
    maxWidth: 260,
  },

  rightPanel: {
    flex: 0.8,
    minWidth: 360,
    backgroundColor: '#edf2f2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 38,
  },

  card: {
    width: '100%',
    maxWidth: 430,
    padding: 26,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e6ebee',
    shadowColor: '#0d1f2a',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  badge: {
    color: '#18A957',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
  },

  heading: {
    fontSize: 27,
    fontWeight: '800',
    color: '#17202A',
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#18A957',
    shadowColor: '#18A957',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },

  label: {
    color: '#4d5d67',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    height: 52,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#f4f7f7',
    color: '#17202A',
    borderWidth: 1,
    borderColor: '#dfe7ea',
    marginBottom: 8,
    fontSize: 15,
  },

  loginButton: {
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18A957',
    marginTop: 22,
    shadowColor: '#18A957',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },

  loginText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },

  forgotText: {
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 13,
    fontWeight: '600',
  },

  demoSection: {
    marginTop: 26,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#edf1f2',
  },

  demoTitle: {
    color: '#465562',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },

  demoRow: {
    gap: 10,
  },

  demoChip: {
    backgroundColor: '#f5f8f8',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e9ecee',
  },

  demoLabel: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  demoValue: {
    color: '#17202A',
    fontSize: 12,
    fontWeight: '700',
  },
});