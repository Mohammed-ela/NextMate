import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Input from '../components/ui/Input';
import GradientButton from '../components/ui/GradientButton';
import LinkText from '../components/ui/LinkText';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={32} color="#fff" />
      </TouchableOpacity>
      
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Next Mate</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Create Your Account</Text>
        
        <View style={styles.inputContainer}>
          <Input
            icon="person-outline"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Input
            icon="mail-outline"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Input
            icon="lock-closed-outline"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Input
            icon="lock-closed-outline"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
        
        <GradientButton title="Create Account" onPress={() => {}} style={styles.createButton} />
        
        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Already have an account? </Text>
          <LinkText onPress={() => router.back()} style={styles.signInLink}>Sign In</LinkText>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  header: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 30,
  },
  createButton: {
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
  signInLink: {
    color: '#FF8C42',
    marginLeft: 2,
  },
});

export default RegisterScreen; 