import React from 'react';
import { NavigationInterface } from '../types';
import FastImage from 'react-native-fast-image';
import TwitterIcon from '../../../assets/icons/twitter';
import GoogleIcon from '../../../assets/icons/google';
import FacebookIcon from '../../../assets/icons/facebook';
import hexToRGB from '../../utils/hexToRGB';
import { signupBackgroundLink } from '../../constants';

import {
  Container,
  WelcomeText,
  SignupText,
  SignupButton,
  SignupOptionContainer,
  OptionText
} from './styles';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SignupScreen(props: SignupScreenProp) {
  const handleSignup = () => {
    props.navigation.replace('ProfileSetup');
  };

  return (
    <Container>
      <FastImage
        style={{ flex: 1, justifyContent: 'center' }}
        source={{
          uri: signupBackgroundLink,
          priority: FastImage.priority.high
        }}
        resizeMode={FastImage.resizeMode.stretch}
      >
        <WelcomeText>Welcome</WelcomeText>
        <SignupText>SIGN UP OR LOG IN</SignupText>

        <SignupOptionContainer>
          <SignupButton
            onPress={handleSignup}
            style={{ borderWidth: 1.2, borderColor: hexToRGB('#3C5998', 0.3) }}
          >
            <FacebookIcon />
            <OptionText style={{ color: '#3C5998' }}>
              Continue with Facebook
            </OptionText>
          </SignupButton>
          <SignupButton
            onPress={handleSignup}
            style={{ borderWidth: 1.2, borderColor: hexToRGB('#D44639', 0.3) }}
          >
            <GoogleIcon />
            <OptionText style={{ color: '#D44639' }}>
              Continue with Google
            </OptionText>
          </SignupButton>
          <SignupButton
            onPress={handleSignup}
            style={{ borderWidth: 1.2, borderColor: hexToRGB('#1DA1F2', 0.3) }}
          >
            <TwitterIcon />
            <OptionText style={{ color: '#1DA1F2' }}>
              Continue with Twitter
            </OptionText>
          </SignupButton>
        </SignupOptionContainer>
      </FastImage>
    </Container>
  );
}
