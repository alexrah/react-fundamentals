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
    console.log('%ctypeof items','color: yellow',typeof items)
    console.dir(items);
  })

  return (
      <div className="keys">
        <button disabled={items.length >= allItems.length} onClick={addItem}>
          add item
        </button>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          {items.map(item => (
              // 🐨 add a key prop to the <li> below. Set it to item.id
              <li key={item.id}>
                <button onClick={() => removeItem(item)}>remove</button>{' '}
                <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
                <input id={`${item.id}-input`} defaultValue={item.value} />
              </li>
          ))}
        </ul>
      </div>
  )
}

export default App
