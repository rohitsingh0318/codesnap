import react from 'react'
import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const[qrcode, setQurcode ] = useState('')

  const generateQRCode = ()=>{
    if(err) return console.error(err)

      console.log(url)
  }

  return (
    <>
      <div className='app'>
          <h1>QR Code Generator</h1>
          <input type="text" placeholder='Enter your '/>
          <button>Generator</button> 
          <img src="" className='img' alt="" />
      </div>
    </>
  )
}

export default App
