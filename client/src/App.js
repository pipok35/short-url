import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Button, Container, Navbar } from 'react-bootstrap'
import LinksList from './components/LinksList'
import Alert from './components/Alert'

function App() {
  const [link, setLink] = useState('')
  const [domain, setDomain] = useState('')
  const [linksList, setLinkslist] = useState([])
  const [isSuccsess, setIsSuccsess] = useState(true)
  const [isClicked, setIsClicked] = useState(false)

  const isValidURL = (string) => {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    )
    return res !== null
  }

  const closeAlert = () => {
    setIsClicked(false)
  }

  const getLinks = async () => {
    try {
      await axios
        .get('http://localhost:5000/api')
        .then((response) => setLinkslist(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLinks()
  }, [])

  const createShortUrl = async () => {
    setIsClicked(true)
    if (!isValidURL(link) || !domain) {
      setIsSuccsess(false)
      setLink('')
      setDomain('')
      return null
    }
    try {
      await axios
        .post('http://localhost:5000/api/shorturls', {
          fullUrl: link,
          domainUrl: domain,
        })
        .then((response) => {
          setLink('')
          setDomain('')
          getLinks()
          setIsSuccsess(true)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Navbar bg='light'>
            <Container>
              <Navbar.Brand href='/'>Сократи ссылку</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </div>
      {isClicked ? (
        <Alert done={isSuccsess} links={linksList} close={closeAlert} />
      ) : null}
      <div className='row my-4'>
        <div className='col-md-7'>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder='Вставьте вашу ссылку'
            type='url'
            className='form-control'
          />
        </div>
        <div className='col-md-3'>
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder='Вставьте домен'
            type='text'
            className='form-control'
          />
        </div>
        <div className='col-md-2'>
          <div className='d-grid'>
            <Button variant='primary' onClick={createShortUrl} type='submit'>
              Сократить
            </Button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h4>Список ссылок</h4>
          <table className='table fix-table table-bordered'>
            <thead className='text-center'>
              <tr>
                <th className='p-15'>№</th>
                <th colSpan='3' className='p-15'>
                  Полная ссылка
                </th>
                <th colSpan='3' className='p-15'>
                  Короткая ссылка
                </th>
                <th className='p-15'>Клики</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <LinksList links={linksList}></LinksList>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
