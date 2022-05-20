// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className='box box--small'>small lightblue box</div>
const mediumBox = <div className='box box--medium'>medium pink box</div>
const largeBox = <div className='box box--large'>large orange box</div>


const Box = ({size,color, style, className, ...rest}) => {

    const sSizeClass = size ? `box--${size}`:'';
    const sBoxColor = color ? color : 'transparent';
    const sClassName = className?className:'';

    return <div className={`box ${sClassName} ${sSizeClass}`} style={{backgroundColor: sBoxColor, fontStyle: "italic", ...style}} {...rest}>{size} {color} box</div>

}

function AppOLD() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

function App() {
  return (
      <div>
        <Box size='small' style={{color: "white"}} color='lightblue'></Box>
        <Box size='medium' color='pink' className="foobar"></Box>
        <Box size='large' color='orange' id='custom-id'></Box>
      </div>
  )
}

export default App
