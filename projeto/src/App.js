import React, { useState } from 'react';
import './App.css';
import Slider from './slider'
import Sidebaritem from './Sidebaritem';

const DEFAULT_OPTIONS = [
  {
    name: 'Claridade',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contraste',
    property: 'Contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturação',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Nível de cinza',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'Sepia',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Rotação Hue ',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]



function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }
   
  function getImageStyle() {
   const filters = options.map(option =>{
    return `${option.property}(${option.value}${option.unit})`
   })

   return { filter: filters.join('') }
  }

  return (<div className='container'>
    <div className='main-image' style={getImageStyle()} />
    <div className='sidebar'>
      {options.map((option, index) => {
        return (<Sidebaritem
          key={index}
          name={option.name}
          active={index === selectedOptionIndex}
          handleCick={() => setSelectedOptionIndex(index)}
        />
        )

      })}
    </div>
    <Slider
      min={selectedOption.range.min}
      max={selectedOption.range.max}
      value={selectedOption.value}
      handleChange={handleSliderChange}
    />
  </div>
  )
}

export default App;