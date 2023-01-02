import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export const DarkMode = (props) => {
  return (
    <div>
    {props.darkModeIcon ? <BsFillMoonFill onClick={props.toggleIcon}/> : <BsSun onClick={props.toggleIcon}/>}
    </div>
  )
};
