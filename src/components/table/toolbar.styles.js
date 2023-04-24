import styled from '@emotion/styled';
import { Search } from '@carbon/icons-react';
import { typography, colors, Button, Text } from '@digital-u/digital-ui';

export const ToolbarButton = styled(Button)`
  background-color: ${({ open }) => open && colors.galaxy[200]} !important;
  border-radius: 0px !important;
  &:hover {
    background-color: ${colors.galaxy[200]} !important;
  }
`;

export const AddButton = styled(Button)`
  border-radius: 0px !important;
  font-weight: 500 !important;
`;

export const ToolbarText = styled(Button)`
  font-family: ${typography.fontFamily.ibm} !important;
  font-size: ${typography.sizes[3.5]} !important;
  font-weight: ${typography.weights.regular} !important;
`;

export const ToolbarStaticText = styled(Text)`
  font-family: ${typography.fontFamily.ibm};
  font-weight: ${typography.weights.regular};
  font-size: ${typography.sizes[3.5]};
`;

export const SearchTool = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 300px;
  min-height: 44px;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: ${colors.galaxy[500]};
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  margin: 2px;
  padding: 0 10px 0 30px;
  &:focus {
    outline: 1px solid ${colors.galaxy[500]};
  }
`;
