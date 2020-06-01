import React from 'react';
import { NavigationInterface } from '../types';
import { TouchableOpacity } from 'react-native';
import TwitterIcon from '../../../assets/icons/twitter';
import GoogleIcon from '../../../assets/icons/google';
import FacebookIcon from '../../../assets/icons/facebook';

import {
  Container,
  WelcomeText,
  SignupText,
  OptionContainer,
  SignupOptionContainer,
  OptionText
} from './styles';

import { ImageBackground } from 'react-native';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

const handleFacebookSignup = () => {};
const handleTwitterSignup = () => {};
const handleGoogleSignup = () => {};

export default function SignupScreen(props: SignupScreenProp) {
  return (
    <Container>
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center' }}
        source={require('../../../assets/signup_bg.png')}
      >
        <WelcomeText>Welcome</WelcomeText>
        <SignupText>SIGN UP OR LOG IN</SignupText>
        <SignupOptionContainer>
          <TouchableOpacity
            onPress={handleFacebookSignup}
            style={{
              width: '100%',
              height: 54,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              marginTop: 16
            }}
          >
            <OptionContainer style={{ borderColor: '#3C5998' }}>
              <FacebookIcon />
              <OptionText style={{ color: '#3C5998' }}>
                Continue with Facebook
              </OptionText>
            </OptionContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGoogleSignup}
            style={{
              width: '100%',
              height: 54,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              marginTop: 16
            }}
          >
            <OptionContainer style={{ borderColor: '#F2C8C5' }}>
              <GoogleIcon />
              <OptionText style={{ color: '#D44639' }}>
                Continue with Google
              </OptionText>
            </OptionContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleTwitterSignup}
            style={{
              width: '100%',
              height: 54,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              marginTop: 16
            }}
          >
            <OptionContainer style={{ borderColor: '#BBE4FB' }}>
              <TwitterIcon />
              <OptionText style={{ color: '#1DA1F2' }}>
                Continue with Twitter
              </OptionText>
            </OptionContainer>
          </TouchableOpacity>
        </SignupOptionContainer>
      </ImageBackground>
    </Container>
  );
}
