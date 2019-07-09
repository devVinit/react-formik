import React from 'react';
import { Header, Input, Form, Grid } from 'semantic-ui-react';
import './App.scss';

function App() {
  return (
    <Grid centered columns={2}>
      <Grid.Row centered>
        <Grid.Column>
          <Header.Content as="h1">
            React Formik
          </Header.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <Input placeholder='Name' />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <Input placeholder='Mobile' type='number' min={0} />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <Input placeholder='Address' />
            </Form.Field>
            <Form.Field>
              <label>Occupation</label>
              <Input placeholder='Occupation' />
            </Form.Field>
            <Form.Button>
              Submit
          </Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
