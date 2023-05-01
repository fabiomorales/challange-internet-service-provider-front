import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Card as CardAtom, Flex, Tag as TagAtom } from '../../atoms';
import { IEditWrapperProps, IServices } from './interfaces';

export const Card = styled(CardAtom)`
  position: relative;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const Tag = styled(TagAtom)`
  position: absolute;
  background-color: ${colors.white};
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageCard = styled(Flex)`
  width: 50px;
  height: 50px;
  padding: 4px;
  border: 1px solid ${colors.primary600};
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;

const editCase = {
  exclude: colors.quartenary300,
  edit: colors.primary300,
  include: colors.tertiary300,
};

export const EditWrapper = styled.span<IEditWrapperProps>`
  position: absolute;
  justify-content: center;
  display: flex;
  background-color: ${(props) => editCase[props.case]};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  right: 0;
  transform: ${(props) => `translate(50%, calc(-50% + 45px * ${props.position - 1}))`};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

export const PlanFormWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const LiServices = styled(Flex)<Pick<IServices, 'variant'>>`
  position: relative;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  border-bottom: ${(props) => (props.variant === 'editing' ? `1px solid ${colors.secondary300}` : 'none')};
`;

export const LiApps = styled(Flex)<Pick<IServices, 'variant'>>`
  position: relative;
  width: 100%;
  align-items: center;
  gap: 10px;
  border-bottom: ${(props) => (props.variant === 'editing' ? `1px solid ${colors.secondary300}` : 'none')};
`;

const imageServiceCase = {
  include: colors.tertiary400,
  remove: colors.quartenary400,
};

export interface IImageServices {
  case: 'include' | 'remove';
}

export const ImageServices = styled(Flex)<IImageServices>`
  background-color: ${(props) => imageServiceCase[props.case]};
  border-radius: 5px;
  cursor: pointer;
`;
