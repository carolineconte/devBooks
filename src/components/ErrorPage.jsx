import { SlSocialGithub } from "react-icons/sl";
import { ErrorIlustration } from "./svg/ErrorIlustration";

export const ErrorPage = () => {
  return (
    <div className='errorPage'>
     <ErrorIlustration/>
      <h1>Something went wrong</h1>
      <p>Please, refresh the page or try again later</p>
      <button>Go back to Home</button>
      <div className="gitContainer">
        <a href=""><SlSocialGithub /></a>
        <span>You are Dev? If yes, you can register one issue on github, if you want contribe to this project.</span>
      </div>
    </div>
  )
}