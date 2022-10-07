// Write your code here
import './index.css'

const PlaneItem = props => {
  const {planeDetails} = props
  const {name, imageUrl, description} = planeDetails

  return (
    <div className="plane-container">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlaneItem
