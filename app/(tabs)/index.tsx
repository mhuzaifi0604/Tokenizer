import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'; // Import constants to get statusBarHeight
import { Platform, Pressable, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Manage StatusBar styling */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <LinearGradient colors={['#283048', '#859398']} style={styles.container}>
        <LinearGradient colors={['#dc2424', '#4a569d']} start={[0, 0]} end={[1, 0]} style={[styles.Flex1]}>
          <Image
            source={require('../../assets/images/logo.png')}
            alt='Logo'
            style={{ width: 60, height: 60 }} // Use numbers for width and height
          />
          <View style={{ flex: 8, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'transparent' }}>
            <Link style={styles.homebutton} href={"/(Auth)/LogIn"}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 4 }}>Login</Text>
            </Link>
          </View>
        </LinearGradient>
        <View style={[styles.Flex2]}>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
            Tokenize
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight, // Set paddingTop to the status bar height
    backgroundColor: '#283048', // Same background as your LinearGradient to blend
  },
  container: {
    flex: 2,
    flexDirection: 'column',
    borderColor: 'white',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  homebutton: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 'auto',
    padding: 5,
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    borderRadius: 5,
  },
  Flex1: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    flex: 0.8,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 6,
    width: '98%',
    marginTop: 2,
    borderRadius: 50,
  },
  Flex2: {
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 9.4,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 2,
    borderRadius: 50,
  },
});
