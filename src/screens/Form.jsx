import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Input, FormGroup, Label, Button } from 'reactstrap'

import StoreContext from '../contexts/Store'

export default () => {
  const { name, setName, address1, setAddress1, address2, setAddress2, city, setCity,
    state, setState, zip, setZip, accountNumbers, setAccountNumbers, clear
  } = useContext(StoreContext)

  return (
    <div>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input name="name" value={name} onChange={e => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="address1">Address Line 1</Label>
        <Input name="address1" value={address1} onChange={e => setAddress1(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="address2">Address Line 2</Label>
        <Input name="address2" value={address2} onChange={e => setAddress2(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="city">City</Label>
        <Input name="city" value={city} onChange={e => setCity(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="state">State</Label>
        <Input name="state" value={state} onChange={e => setState(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="zip">Zip</Label>
        <Input name="zip" value={zip} onChange={e => setZip(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="accountNumbers">Account Numbers</Label>
        <Input name="accountNumbers" value={accountNumbers} onChange={e => setAccountNumbers(e.target.value)} />
      </FormGroup>
      <Button className="mr-2" onClick={clear}>Clear</Button>
      <Link to="/print" className="btn btn-success">Generate Letter</Link>
    </div>
  )
}
