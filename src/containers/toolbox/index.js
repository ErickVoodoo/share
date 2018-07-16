/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/containers/toolbox/index.js
 * 
 *  @flow
 *  @prettier
 */

import React from 'react';

import { Flex, Button, Input, Text, Dropdown, Loader } from '../../components';
import { FadeList } from '../../components/animations';

export const Toolbox = () => (
  <Flex column size={1}>
    <Flex column kit>
      <FadeList duration={0.7}>
        <div style={{ height: 50, backgroundColor: `rgb(${Math.random()* 100}, ${Math.random()* 100}, ${Math.random()* 100})`}}>{Math.random()}</div>
        <div style={{ height: 50, backgroundColor: `rgb(${Math.random()* 100}, ${Math.random()* 100}, ${Math.random()* 100})`}}>{Math.random()}</div>
        <div style={{ height: 50, backgroundColor: `rgb(${Math.random()* 100}, ${Math.random()* 100}, ${Math.random()* 100})`}}>{Math.random()}</div>
        <div style={{ height: 50, backgroundColor: `rgb(${Math.random()* 100}, ${Math.random()* 100}, ${Math.random()* 100})`}}>{Math.random()}</div>
      </FadeList>
    </Flex>
    <Flex row kit>
      <Button>Default</Button>
      <Button primary>Primary</Button>
      <Button primary round>Primary Round</Button>
      <Button secondary>Secondary</Button>
      <Button secondary round>Secondary Round</Button>
      <Button disabled>Disabled</Button>
      <Button disabled round>Disabled Round</Button>
      <Button red>Red</Button>
    </Flex>
    <Flex column kit>
      <Text>Default</Text>
      <Text h1>h1</Text>
      <Text h2>h2</Text>
      <Text h3>h3</Text>
      <Text h4>Lorem ispum</Text>
      <Text h5>h5</Text>
      <Text h6>h6</Text>
      <Text red>red</Text>
      <Text primary>primary</Text>
      <Text secondary>secondary</Text>
      <Text secondary weight={800}>secondary bold</Text>
      <Text secondary weight={200}>secondary thin</Text>
    </Flex>
    <Flex column kit>
      <Input />
      <Input textarea />
      <Input label={'Input'} placeholder={'Input'} />
      <Input label={'Input'} maxLength={100} />
      <Input label={'Input'} maxLength={100} meta={{ touched: true, error: 'Field error' }} />
    </Flex>
    <Flex column kit>
      <Dropdown 
        items={[{ text: 'First', value: '1' }, { text: 'Second', value: '2' }, { text: 'Third', value: '3' }]}
      />
      <Dropdown 
        label={'Drowdown'}
        items={[{ text: 'First', value: '1' }, { text: 'Second', value: '2' }, { text: 'Third', value: '3' }]}
      />
      <Dropdown 
        label={'Drowdown'}
        items={[{ text: 'First', value: '1' }, { text: 'Second', value: '2' }, { text: 'Third', value: '3' }]}
        meta={{ touched: true, error: 'Field error' }}
      />
    </Flex>
    <Flex column kit>
      <Loader />
    </Flex>
  </Flex>
);