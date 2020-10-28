import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <FormControl type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group controlId='forBasicPassword'>
            <Form.label>Password</Form.label>
            <FormControl type='password' placeholder='Enter password' />
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </form>
      </div>
    );
  }
}

export default App;
