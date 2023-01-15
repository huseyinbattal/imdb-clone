import React from 'react'

const Results = ({results}) => {
  return (
      <div>
      {results.map(result => {
        return (
          <h1 key={result}>{ result.title}</h1>
            )
          })}
    </div>
  )
}

export default Results;