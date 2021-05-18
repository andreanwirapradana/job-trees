import React from 'react';
import {Text} from 'react-native';
import { Container, Button, Header, Body, Title, Right, Left } from 'native-base';

export default function Headers(props) {
    return (
        <Header>
            <Left></Left>
            <Body>
                <Title>{props.title}</Title>
            </Body>
            <Right></Right>
        </Header>
    )
}
