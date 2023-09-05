import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Navigate = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="/users">Action</Dropdown.Item>
          <Dropdown.Item href="/products">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      );
};

export default Navigate;
