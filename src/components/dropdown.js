/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/Dropdown.js
 * 
 *  @flow
 *  @prettier
 */

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Flex, Text, Label, ErrorContainer } from './';

const Select = styled.select`
  position: relative;
  transition: all 0.2s ease-in-out;
  font-family: "Roboto";
  background-color: ${prop('theme.colors.white')};
  height: 40px;
  outline: none;
  color: ${prop('theme.colors.text')};
  border-radius: 0;
  border: none;
  padding: 0px 12px;
  box-shadow: 0px 0px 8px 0px ${prop('theme.colors.gray_220')};
  line-height: 24px;
  font-size: 16px;

  :focus {
    box-shadow: 0px 0px 20px 2px ${prop('theme.colors.gray_200')};
  }

  ::placeholder {
    font-weight: 300;
  } 

  border-radius: 0;

  :not([multiple]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 50%;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
    padding: .5em;
    padding-right: 1.5em
}
`;

const Option = styled.option`

`;

type IProps = {
  input: Object,
  meta: Object,
  label: string,
  items: Array<Object>,
};

export const Dropdown = (props: IProps) => {
  const { 
    input: { value = '', onChange = () => {} } = { }, 
    meta: { touched, error } = { },
    label,
    items,
    ...params
  } = props;

  return (
    <Flex column>
      {label && <Label>{label}</Label>}
      <Select 
        defaultValue={value}
        onChange={(e) => {
          const v = e.target.value;

          onChange(v);
        }}
        {...params}
      >
        {items.map(({ value, text }) => 
          <Option
            key={value}
            value={value}
          >
            {text}
          </Option>
        )}
      </Select>
      <ErrorContainer>
        {touched && error && <Text red h5 weight={300}>{error}</Text>}
      </ErrorContainer>
    </Flex>
  );
};
