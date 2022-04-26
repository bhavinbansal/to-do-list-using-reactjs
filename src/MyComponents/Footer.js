import React from 'react'
// import './footer.css'

export const Footer = () => {
  let footerStyle={
    width:"100%",
    marginTop:"20px"
  }
  return (
    <footer className='text-center text-light bg-dark py-3' style={footerStyle}>
       <p> Copyright &copy; My TodoList.com </p>
    </footer>
  )
}
