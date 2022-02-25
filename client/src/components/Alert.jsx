import React from 'react'
import '../App.css'

function Alert({ done, links, close }) {
  if (done) {
    return (
      <div className='col-md-4'>
        <div className='alert alert-success mt-20' role='alert'>
          Ссылка создана
          <button className='removeBtn' onClick={close}>
            <i class='bi bi-x'></i>
          </button>
          <p className='m-0'>
            Ваша ссылка:
            <a href={links[links.length - 1].short}>
              {links[links.length - 1].domain}/{links[links.length - 1].code}
            </a>
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='col-md-4'>
        <div className='alert alert-danger mt-20' role='alert'>
          Что-то пошло не так
          <button className='removeBtn' onClick={close}>
            <i class='bi bi-x'></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Alert
