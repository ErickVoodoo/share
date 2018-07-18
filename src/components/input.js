/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/Input.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';

import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Flex, Label, Text, ErrorContainer } from './';

const InputComponent = styled.input`
  height: 40px;
  padding: 0px 8px;

  transition: all 0.2s ease-in-out;
  font-family: 'Roboto';
  height: 40px;
  outline: none;
  border: none;
  color: ${prop('theme.colors.text')};
  box-shadow: 0px 0px 8px 0px ${prop('theme.colors.gray_220')};
  line-height: 24px;
  font-size: 16px;
  padding: 0px 8px;

  :focus {
    box-shadow: 0px 0px 20px 2px ${prop('theme.colors.gray_200')};
  }
  resize: none;

  ::placeholder {
    font-weight: 300;
  }
`;

const TextareaComponent = styled.textarea`
  height: autopx;
  padding: 8px;

  transition: all 0.2s ease-in-out;
  font-family: "Roboto";
  height: 40px;
  outline: none;
  border: none;
  color: ${prop('theme.colors.text')};
  box-shadow: 0px 0px 8px 0px ${prop('theme.colors.gray_220')};
  line-height: 24px;
  font-size: 16px;
  padding: 0px 8px;

  :focus {
    box-shadow: 0px 0px 20px 2px ${prop('theme.colors.gray_200')};
  }
  resize: none;

  ::placeholder {
    font-weight: 300;
  }1
`;

type IProps = {
  input: Object,
  meta: Object,
  maxLength: number | string,
  textarea: boolean,
  label: string,
};

export const Input = (props: IProps) => {
  const {
    input: { value = '', onChange = () => {} } = {},
    meta: { touched, error } = {},
    maxLength,
    textarea,
    label,
    ...params
  } = props;

  const commonProps = {
    value,
    onChange: (e) => {
      const v = e.target.value;

      if (maxLength) {
        if (v.length <= parseInt(maxLength, 10)) {
          onChange(v);
        }
      } else {
        onChange(v);
      }
    },
  };

  return (
    <Flex column>
      <Flex row>
        {label && <Label>{label}</Label>}
        {maxLength && <Label right>{`${value.length} / ${maxLength}`}</Label>}
      </Flex>
      {textarea ? (
        <TextareaComponent {...commonProps} rows={10} {...params} />
      ) : (
        <InputComponent {...commonProps} {...params} />
      )}

      <ErrorContainer>
        {touched &&
          error && (
            <Text green h5 weight={300}>
              {error}
            </Text>
          )}
      </ErrorContainer>
    </Flex>
  );
};
