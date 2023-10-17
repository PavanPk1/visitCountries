import './index.css'
//  import {Component} from 'react'

const CountryItem = props => {
  const {details, onClickVisitBtn} = props
  const {id, isVisited, name} = details
  return (
    <li className="countryList" key={id}>
      <p className="countryName">{name}</p>
      {isVisited ? (
        <p className="visitedPara">Visited</p>
      ) : (
        <button
          type="button"
          className="btn"
          onClick={() => onClickVisitBtn(id)}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
