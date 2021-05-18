import React, {useState} from 'react';
import { useDispatch, } from 'react-redux';
import { View, Text } from 'react-native';
import {Container, Content, Form, Input, Item, Label, Toast, Button } from 'native-base'
import Headers from '../../components/Header';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native'

// Icons
import {forest_logo} from '../../assets';

// Actions
import {jsLogin} from '../../store/actions/authActions';

export default function Login() {
    const dispacth = useDispatch();
    const navigation = useNavigation();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const submitLogin = () => {
        if (!user.email || !user.password) {
            Toast.show({
                text: 'Please input username and password',
            })
        } else {
            dispacth(jsLogin(user))
            navigation.navigate('Home')
            setUser({
                email: '',
                password: ''
            })
        }
    };

    return (
        <Container>
            <Headers title={"Welcome!"} />
            <Content>
                <SvgXml xml={forest_logo} width={200} height={200} style={{alignSelf: 'center', marginTop: 100}} />
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input onChangeText={value => setUser({...user, email: value})} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} onChangeText={value => setUser({...user, password: value})} />
                    </Item>
                </Form>
                <Button primary rounded style={{alignSelf: 'center', marginTop: 50, paddingLeft: 50, paddingRight: 50}} onPress={submitLogin}><Text style={{color: 'white'}}> Login </Text></Button>
                <Text style={{textAlign: 'center', marginTop: 50}}>Already have an account?</Text>
            </Content>
        </Container>
    );
};