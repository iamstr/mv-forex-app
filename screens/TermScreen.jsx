import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import _themeColor from '../colorScheme.json';

export default function TermScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <ScrollView>
          <Text style={styles.header}>One last thing</Text>
          <Text style={styles.sub}>Terms of Use</Text>
          <Text style={styles.text}>
            Welcome to MV Global Currency Xchange App! These terms of use (the "Terms") govern your
            use of our app and the services we provide through it (the "Services"). By accessing or
            using our Services, you agree to be bound by these Terms. If you do not agree to these
            Terms, do not use our Services. Scope of Services Our Services allow you to buy and sell
            foreign currency and other financial instruments. You are responsible for understanding
            the risks associated with trading in foreign currency and other financial instruments,
            and you should consult with a financial advisor before making any trades. We do not
            provide financial advice, and our Services should not be relied upon as such. Account
            Registration To use our Services, you must create an account and provide certain
            personal and financial information.
          </Text>
          <Text style={styles.text}>
            You agree to provide accurate and complete information when creating your account and to
            update your information as necessary to keep it accurate and complete. You are solely
            responsible for the activity that occurs on your account, and you must keep your account
            login information secure. User Conduct You agree to use our Services only for lawful
            purposes and in compliance with all applicable laws and regulations. You may not use our
            Services to engage in any illegal or fraudulent activity. You may not use our Services
            to transmit any viruses, malware, or other harmful code. You may not use our Services to
            send unsolicited messages or spam. You may not use our Services to engage in any
            activity that is discriminatory, harassing, or otherwise inappropriate. Intellectual
            Property Our Services and the content and materials provided through them, including but
            not limited to text, graphics, logos, images, and software, are the property of MV
            GLOBAL XCHANGE and are protected by intellectual property laws.
          </Text>
          <Text style={[styles.text, { marginBottom: 200 }]}>
            You may not use our content or materials for any purpose other than as expressly
            permitted by these Terms. Disclaimer of Warranties OUR SERVICES ARE PROVIDED "AS IS" AND
            "AS AVAILABLE," AND WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
            TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO
            NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. Limitation of
            Liability WE SHALL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES THAT ARE NOT REASONABLY
            FORESEEABLE. IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL,
            OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOSS OF DATA, OR LOSS OF
            BUSINESS OPPORTUNITIES. Termination We reserve the right to terminate your access to our
            Services at any time, for any reason, and without notice. Governing Law These Terms
            shall be governed by and construed in accordance with the laws of Kenya, without giving
            effect to any principles of conflicts of law.
          </Text>
        </ScrollView>
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,.8)']}
          style={styles.buttonBackground}
        >
          <TouchableOpacity style={styles.transparentButton}>
            <Text style={styles.danger}>Disagree</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Verify');
            }}
          >
            <Text style={styles.loginText}>Agree Terms</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: _themeColor.primary,

    borderRadius: 25,
    elevation: 12,
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    shadowColor: _themeColor.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    width: '80%',
  },
  buttonBackground: {
    alignItems: 'center',
    backgroundColor: _themeColor.white,
    bottom: 0,
    // height: 100,
    left: 0,
    paddingVertical: 20,
    position: 'absolute',
    right: 0,
  },

  container: {
    alignItems: 'center',
    backgroundColor: _themeColor.white,
    flex: 1,
    height: 2000, // Increase the height of the container
    justifyContent: 'center',
    // paddingBottom: 300,
    paddingTop: 0,
    position: 'relative',
  },
  danger: {
    color: _themeColor.danger,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    textAlign: 'center',
  },

  header: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 20,
    margin: 12,
    marginBottom: 15,
    marginTop: 30,
    padding: 10,
  },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    height: 2000,
    // paddingVertical: 40
  },

  sub: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: _themeColor.green,
    flex: 1,
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    height: '100%',
    lineHeight: 36,

    marginBottom: 20,
    marginLeft: 12,
    paddingLeft: 10,
    paddingTop: 20,
  },
  transparentButton: {
    backgroundColor: 'transparent',
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    width: '80%',
  },
});
