import PropTypes from 'prop-types'
const Detail = ({detail}) => {
    const {title} = detail
  return (
    <div>
        <ol type="1">
            <li>{title}</li>
        </ol>
    </div>
  )
}

Detail.propTypes = {
    detail:PropTypes.object
}

export default Detail