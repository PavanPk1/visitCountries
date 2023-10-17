import './index.css'

const VisitedCountries = props => {
  const {countryDetails, onClickRemove} = props
  const {id, name, imageUrl} = countryDetails

  const removeBtn = () => {
    onClickRemove(id)
  }
  return (
    <li className="visitContainer">
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
      <div className="removeContainer">
        <p className="countryName">{name}</p>
        <button type="button" onClick={removeBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
