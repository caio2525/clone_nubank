import styled from 'styled-components/native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  margin-top: ${`${statusBarHeight}px`}
`
