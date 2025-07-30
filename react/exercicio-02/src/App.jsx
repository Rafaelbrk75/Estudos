import Img from './components/Img.jsx'
import Title from './components/Title.jsx'
import Subtitle from './components/Subtitle.jsx'
import Buttons from './components/Buttons.jsx'
import { Fragment } from 'react'

export default function App() {
  return (
    <Fragment>
      <div className='card'>
        <Img />
        <div className='card-body'>
          <Title />
          <Subtitle />
          <Buttons />
      </div>
    </div>
    </Fragment>
  )
}
