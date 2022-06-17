import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    const onClick = () => {
        console.log('Click')
    }

  return (
    <header className='header'>
        
        <h1>{title}</h1>
        <Button color='green' text='Hello' onClick={onClick}/>
        <Button color='blue' text='Good Evening' onClick={onClick}/>
        <Button color='purple' text='Good Night' onClick={onClick}/>

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

//CSS in js
// 
// <h1 style={headingStyle}>{title}</h1>
//
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header