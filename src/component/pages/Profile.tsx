import ProfileImg from "../asset/910619205005.jpg";
import { BiLogoGithub,BiLogoLinkedin} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';

export default function Profile() {

  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <div className=" p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded shadow-md w-5/6  ">
          <h1 className="text-center text-purple-950 text-white"> <b className="text-black">About Me</b></h1>
            <div className="text-center">
              <p className="pt-3 text-white">
                I am a Front End <b>developer</b> I am worked with real time Project and i have skill for
                <p className="text-white"><b  className="text-black">TECH STACK</b> HTML CSS JAVASCRIPT </p>
                <p className="text-white"><b  className="text-black">DESIGNING</b>  BOOTSTRAP TAILWINDCSS </p>
                <p className="text-white"><b className="text-black">lIBRARY</b> REACTJS REDUX-TOOLKIT TYPESCRIPT</p>
            
              </p>

              <div>
                <h1 className="text-center pt-3"><b>Experience</b></h1>
                <div className="flex items-center justify-evenly">
                  <h1 className="text-white">
                    <b className="text-black">InternShip:   </b>
                    3months
                  </h1>
                  <h1 className="text-white"> 
                  <b className="text-black"> Experience:    </b>
                   2months+
                  </h1>
                </div>
              </div>
              <h1 className="text-white pt-5">Socials media</h1>
              <div className="flex pt-5   justify-evenly ">
                <a href="https://github.com/npanand"  className="text-green"> <BiLogoGithub /> </a>
                <a href="https://www.linkedin.com/in/anandan-np-637a25212"> <BiLogoLinkedin /> </a>
                <a href=""> <AiOutlineMail/> </a>
              </div>         
          </div>
        </div>
      </div>
    </>
  )
}
