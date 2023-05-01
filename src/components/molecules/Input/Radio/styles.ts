import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const InputCheckboxWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const InputCheckboxLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InputCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  height: 24px;
  font-size: 16px;
  line-height: 12px;
  color: ${colors.secondary500};
  cursor: pointer;

  &:before {
    content: '';
    height: 18px;
    width: 18px;
    margin-right: 7px;
    border-radius: 7px;
    border-style: solid;
    border-width: 1px;
    border-color: ${colors.secondary100};
    background-color: ${colors.secondary100};
    transition: background-color 0.2s, border-color 0.2s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 9px;
    left: 5px;
    height: 4px;
    width: 8px;
    border-style: solid;
    border-width: 0 0 2px 2px;
    border-color: ${colors.secondary100};
    transform: rotate(-45deg);
    transition: opacity 0.2s;
    opacity: 0;
  }
`;

export const InputCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${InputCheckboxLabelWrapper} {
    ${InputCheckboxLabel}:before {
      background-color: ${colors.linkBase};
      border-color: ${colors.linkBase};
    }

    ${InputCheckboxLabel}:after {
      opacity: 1;
    }
  }

  &:not(:disabled):is(:hover, :active, :focus-visible) + ${InputCheckboxLabelWrapper} ${InputCheckboxLabel}:before {
    border-color: ${colors.primary100};
  }

  &:disabled + ${InputCheckboxLabelWrapper} {
    opacity: 0.5;

    ${InputCheckboxLabel} {
      cursor: not-allowed;
    }
  }
`;
