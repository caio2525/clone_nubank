import styled from 'styled-components/native';

export const Container = styled.View`
  height: 120px;
  margin-top: 20px;
`

export const TabsContainer = styled.ScrollView.attrs({
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
  horizontal: true,
  showsHorizontalScrollIndicator: false,

})``

export const TabItem = styled.View`
  width: 120px;
  height: 120px;
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;

`

export const TabText = styled.Text`
  color: #fff;
  font-size: 15px;
`