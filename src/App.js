import React from 'react';
import { Header, Input, Form, Grid } from 'semantic-ui-react';
import './App.scss';
import { Formik } from 'formik';

function App() {
  return (
    <Grid centered columns={2}>
      <Grid.Row centered>
        <Grid.Column>
          <Header.Content as="h1">
            React Formik
          </Header.Content>


          <Formik
            initialValues={{
              name: '',
              address: '',
              phone: '',
              occupation: ''
            }}

            onSubmit={(values) => {
              console.log(values);
            }}

            render={({
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            }) => {
              return (<Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label>Name</label>
                  <Input
                    name="name"
                    placeholder='Name'
                    values={values.name}
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Phone Number</label>
                  <Input
                    name="phone"
                    placeholder='Mobile'
                    type='number'
                    min={0}
                    values={values.phone}
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Address</label>
                  <Input
                    name="address"
                    placeholder='Address'
                    values={values.address}
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Occupation</label>
                  <Input
                    name="occupation"
                    placeholder='Occupation'
                    values={values.occupation}
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Button type="submit" disabled={false}>
                  Submit
                </Form.Button>
              </Form>)
            }}
          >
          </Formik>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
