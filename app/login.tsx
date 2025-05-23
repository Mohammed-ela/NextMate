import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Input from '../components/ui/Input';
import GradientButton from '../components/ui/GradientButton';
import LinkText from '../components/ui/LinkText';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to find your Next Mate.</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Input
            icon="mail-outline"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          
          <Text style={styles.label}>Password</Text>
          <Input
            icon="lock-closed-outline"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <View style={styles.forgotRow}>
            <View style={{ flex: 1 }} />
            <LinkText onPress={() => router.push('/forgot-password')}>Forgot Password?</LinkText>
          </View>
        </View>
        
        <GradientButton title="Login" onPress={() => {}} style={styles.loginButton} />
        
        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Don't have an account? </Text>
          <LinkText onPress={() => router.push('/register')} style={styles.signUpLink}>Sign Up</LinkText>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A0A49',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#C1B6DD',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginBottom: 50,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
    marginTop: 16,
  },
  forgotRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  loginButton: {
    marginBottom: 40,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: '#C1B6DD',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  signUpLink: {
    color: '#FF8C42',
    marginLeft: 2,
  },
});

export default LoginScreen; 