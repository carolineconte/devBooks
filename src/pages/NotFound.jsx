import { SlSocialGithub } from "react-icons/sl";
import { Link } from "react-router-dom";
import { ErrorIlustration } from "../components/svg/ErrorIlustration";

export const NotFound = () => {
  return (
    <div className='errorPage'>
      <ErrorIlustration/>
      <h1>Opps! This page don’t exist</h1>
      <p>Please, return to one page existent</p>
      <Link to='/'>Go back to Home</Link>
      <div className="gitContainer">
        <a href=""><SlSocialGithub /></a>
        <span>You are Dev? If yes, you can register one issue on github, if you want contribe to this project.</span>
      </div>
    </div>
  )
}
