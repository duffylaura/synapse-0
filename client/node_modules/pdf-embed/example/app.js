import React from 'react'
import { render } from 'react-dom'
import PDF from '../src'
import '../src/style.scss'

const App = () => (
  <div style={{maxWidth: '600px', margin: '2em auto'}}>
    <PDF
      page={null}
      url={'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf'}
      scale={1}
      previousButton={<div></div>}
      nextButton={<div></div>}
    />
  </div>
)
render(
  <App />,
  document.getElementById('root')
)
