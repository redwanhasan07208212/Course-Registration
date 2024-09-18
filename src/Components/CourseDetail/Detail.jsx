import PropTypes from 'prop-types'
const Detail = ({detail}) => {
    const {title} = detail
  return (
    <div>
      <li>{title}</li>
    </div>
  )
}

Detail.propTypes = {
    detail:PropTypes.object.isRequired
}

export default Detail