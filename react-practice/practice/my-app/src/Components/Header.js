import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
        
        <h1>{title}</h1>

    </header>
  )
}

Header.defaultProps = {
    title: 'Instatutor',
}

Header.propTypes = {

    //This little bit throws up an error (warning if isRequired is not there) if title is not a string.
    //Since we declared the title to be a string and then put the isrequired modifier on it,
    //The program expects a string and won't go without one.
    title: PropTypes.string.isRequired,
}

export default Header