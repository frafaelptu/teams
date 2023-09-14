import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  color: ${(props) => props.theme.COLORS.WHITE};
  background-color: ${(props) => props.theme.COLORS.GRAY_700};

  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 16px;
`
