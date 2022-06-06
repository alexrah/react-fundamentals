// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)
  const [focus, setFocus] = React.useState<string|undefined>(undefined);

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items]);
    const addedItem = allItems.find(i => !itemIds.includes(i.id));
    if (typeof addedItem !== 'undefined' ){
      setItems([...items,addedItem]);
    }
  }

  function removeItem(item:{id:string,value:string}) {
    setItems(items.filter(i => i.id !== item.id))
  }

  React.useEffect(()=>{
    // console.log('%ctypeof items','color: yellow',typeof items)
    // console.dir(items);
    if(focus){
      const focusElem = document.getElementById(`${focus}-input`);
      if(focusElem){
        focusElem.focus();
      } else {
        setFocus(undefined);
      }
    }
  })

  return (
      <div className="keys">
        <button disabled={items.length >= allItems.length} onClick={addItem}>
          add item
        </button>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          {items.map(item => {
            const inputID = `${item.id}-input`;
            // 🐨 add a key prop to the <li> below. Set it to item.id
            return (<li key={item.id}>
              <button onClick={() => removeItem(item)}>remove</button>
              {' '}
              <label htmlFor={inputID}>{item.value}</label>{' '}
              <input onFocus={() => {
                setFocus(item.id)
              }} id={inputID} defaultValue={item.value}/>
            </li>);
          })}
        </ul>
      </div>
  )
}

export default App
