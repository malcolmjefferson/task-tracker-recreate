import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, addButtonStatus }) => {
    const location = useLocation()
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
            <Button 
            color={addButtonStatus ? 'red' : 'green'}
            text ={addButtonStatus ? 'Close' : 'Add'}
            onClick={onAdd}/> 
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'To Do',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;