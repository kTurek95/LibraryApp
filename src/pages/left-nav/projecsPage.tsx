import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const Projects = () => {
    return (
        <DropdownButton title="Lista projektow">
            <Dropdown.Item href="#/action-1">Project 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Project 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Project 3</Dropdown.Item>
        </DropdownButton>
    )
}