import react from 'react'
import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const[qrcode, setQurcode ] = useState('')

  const generateQRCode = ()=>{
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2
    },(err, url)=>{
      if(err) return console.error(err)

        console.log(url)
        setQurcode(url)
    })  
  }

  return (
    <div className="center">
      <div className='app'>
          <h1>QR Code Generator</h1>
          <input value={url} onChange={(e)=> setUrl(e.target.value)} type="text" placeholder='Enter your '/>
          <button onClick={generateQRCode}>Generator</button> 
          {qrcode &&<>
             <img src={qrcode}  />
              <a href={qrcode} download>Download</a>
          </>}
      </div>
    </div>
  )
}

export default App
