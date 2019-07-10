import React from 'react';
import { Header, Input, Form, Grid, Message } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './App.scss';

function App() {

  const _renderForn = ({
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  }) => (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <Input
            name="name"
            placeholder='Name'
            values={values.name}
            error={errors.name && touched.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && <Message color="red">{errors.name}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <Input
            name="phone"
            placeholder='Mobile'
            type='number'
            min={0}
            values={values.phone}
            error={errors.phone && touched.phone}
            onChange={handleChange}
          />
          {errors.phone && touched.phone && <Message color="red">{errors.phone}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <Input
            name="address"
            placeholder='Address'
            values={values.address}
            error={errors.address && touched.address}
            onChange={handleChange}
          />
          {errors.address && touched.address && <Message color="red">{errors.address}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Occupation</label>
          <Input
            name="occupation"
            placeholder='Occupation'
            values={values.occupation}
            error={errors.occupation && touched.occupation}
            onChange={handleChange}
          />
          {errors.occupation && touched.occupation && <Message color="red">{errors.occupation}</Message>}
        </Form.Field>
        <Form.Button type="submit" disabled={false}>
          Submit
      </Form.Button>
      </Form>
    );

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

            validationSchema={Yup.object().shape({
              name: Yup.string().required('Required'),
              address: Yup.string().required('Required'),
              phone: Yup.number().required('Required'),
              occupation: Yup.string().required('Required'),
            })}

            onSubmit={(values) => {
              console.log(values);
            }}
            render={_renderForn}
          >
          </Formik>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
