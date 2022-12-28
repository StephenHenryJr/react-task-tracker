import PropTypes from 'prop-types'
import { Button } from "./Button";

// Create our Header component
export const Header = (props) => {

  return (
    <>
      <header className="header">
        <h1>{props.title}</h1>
        <Button text={props.showAdd ? "Add" : "Close"} color={props.showAdd ? "Green" : "Red"} onClick={props.onAdd} />
      </header>
    </>
  );
};

// Assign Default Props
Header.defaultProps = {
  title: "...You did not assign anything to props.title",
};

Header.propTypes = {
  title: PropTypes.string,
}



