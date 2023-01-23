import React from 'react';
import Button from 'react-bootstrap/Button';

import {Card, Stack} from 'react-bootstrap';

class Task extends React.Component {
    
    
    render() {
        return <Card>
            <Card.Title>Task</Card.Title>
            <Card.Text>Do Something</Card.Text>
            <Button variant="primary">Do it</Button>
        </Card>
    }
}


export default class ToDo extends React.Component {

    render() {

        return <Stack gap={3}>
            <Task></Task>
            <Task></Task>
            <Task></Task>
            </Stack>

    }

}