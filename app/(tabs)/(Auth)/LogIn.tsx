import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link, useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';

const LogIn = () => {
  const route = useRoute();
  const router = useRouter()
  console.log("Current route: ", route.name);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LogIn Screen.</Text>
      <Link style={styles.homebutton} href={'/SignUp'}>
          Sign Up
      </Link>
      <Link style={styles.homebutton} href={'/(Customers)/Organizations'}>
          Customers
      </Link>
      <Pressable style={styles.homebutton} onPress={() => router.push('/')}>
          <Text>Landing Page</Text>
      </Pressable>
      <Link href={"/"}>
      Something
      </Link>
    </View>
  );
}

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  homebutton:{
    display: 'flex',
    flexWrap: 'wrap',
    width: 'auto',
    padding: 5,
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    borderRadius: 5
  }
});
