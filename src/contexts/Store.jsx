import React, {createContext, useMemo, useState, useCallback} from 'react'

const StoreContext = createContext({
  name: '',
  setName: () => {},
  address1: '',
  setAddress1: () => {},
  address2: '',
  setAddress2: () => {},
  city: '',
  setCity: () => {},
  state: '',
  setState: () => {},
  zip: '',
  setZip: () => {},
  accountNumbers: [],
  setAccountNumbers: () => {},
  clear: () => {},
})

export const Provider = ({children}) => {
  const [name, setName] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [accountNumbers, setAccountNumbers] = useState('')

  const clear = useCallback(() => {
    setName('')
    setAddress1('')
    setAddress2('')
    setCity('')
    setState('')
    setZip('')
    setAccountNumbers('')
  }, [setName, setAddress1, setAddress2, setCity, setState, setZip, setAccountNumbers])

  const value = useMemo(() => ({
    name,
    setName,
    address1,
    setAddress1,
    address2,
    setAddress2,
    city,
    setCity,
    state,
    setState,
    zip,
    setZip,
    accountNumbers,
    setAccountNumbers,
    clear,
  }), [name, setName, address1, setAddress1, address2, setAddress2, city, setCity, state, setState,
    zip, setZip, accountNumbers, setAccountNumbers, clear,
  ])

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext
