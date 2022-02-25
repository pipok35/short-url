import React from 'react'

function LinksList({ links }) {
  return (
    <>
      {links.map((link, index) => {
        return (
          <tr key={index}>
            <td className='p-25'>{index + 1}</td>
            <td colSpan='3' className='p-25'>
              <a href={link.full}>{link.full}</a>
            </td>
            <td colSpan='3' className='p-25'>
              <a href={link.short}>
                {link.domain}/{link.code}
              </a>
            </td>
            <td className='pt-25'>{link.clicks}</td>
          </tr>
        )
      })}
    </>
  )
}

export default LinksList
