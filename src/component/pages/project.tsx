import React from 'react'
import ph1 from "../asset/project1/project1.jpg";
import ph2 from "../asset/project1/project1dataadded.jpg";
import ph3 from "../asset/project1/project1delete.jpg";
import ph4 from "../asset/project1/project1signup.jpg";
import ph5 from "../asset/project1/project1todmainpage.jpg";
import ph6 from "../asset/project1/project2.jpg";

import { BiLogoGithub } from 'react-icons/bi';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Project() {

    const products = [
        {
            id: 1,
            name: 'LOGIN PAGE WITH JWT AUTHENTICATION',
            href: 'https://github.com/npanand/REACTTODO.git',
            imageSrc: [ph1, ph2, ph3, ph4, ph5, ph6],
            imageAlt: "Front of men's Basic Tee in black.",
            github: "https://github.com/npanand/REACTTODO.git",
            frontend: ["jwt LOGIN AUTHENTICATION", "LOGIN PAGE","CRUD OPERATION", "TODO LIST PAGE", "USER BASED TODOLIST SHOWING", "EACH API CALL NOTIFICATION SHOW", "TEXT FIELD VALIDATION"],
            BACKEND: ["API ROUTING", "JWT AUTHENTICATION", "MONGODB CONNECTION ESTABLISHED", "CORS ENABLED SPECIFIED PORT ONLY RUN", "MONGO DBSCHEMA", "MVC PATTERN BASE CODE BUILD"]
        }, {
            id: 2,
            name: 'TODOLIST PAGE WITH REDUX-TOOLKIT',
            href: '#',
            imageSrc: [ph1, ph2, ph3, ph4, ph5, ph6],
            imageAlt: "Front of men's Basic Tee in black.",
            github: "https://github.com/npanand/REACTTODO.git",
            frontend: ["jwt LOGIN AUTHENTICATION", "LOGIN PAGE", "TODO LIST PAGE", "USER BASED TODOLIST SHOWING", "EACH API CALL NOTIFICATION SHOW", "TEXT FIELD VALIDATION"],
        }
    ]
    return (

        <div className="bg-white ">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900 text-blue-600">REACTJS LIBRARY BASED CREATED PROJECT </h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
                    {products.map((project) => (
                        <div key={project.id} >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 md:h-80 lg:h-80">
                                <AwesomeSlider>
                                    {
                                        project.imageSrc && project.imageSrc.length !== 0 &&
                                        project.imageSrc.map((val, index) => (
                                            <div className="h-full w-full object-cover object-center lg:h-full lg:w-full" >
                                                <img
                                                    src={val}
                                                    alt={project.imageAlt}
                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                />
                                            </div>
                                        ))
                                    }
                                </AwesomeSlider>

                            </div>
                            <div className="mt-4 flex justify-between group relative">
                                <div>
                                    <h3 className="text-sm text-gray-700 p-1">
                                        <p>Project Name:</p>
                                        <a href={project.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            <b>{project.name}</b>
                                        </a>
                                    </h3>
                                </div>
                                <p>
                                    <p className='text-center'>Project respoistory Link: 
                                    <a href={project.github} className="" title={project.github}><BiLogoGithub className='ml-2' /></a></p>
                                </p>
                            </div>
                            <div className='pt-2'>
                            {project.frontend!==undefined&& <p className=""><b>FRONTEND</b></p>}
                                {
                                    project.frontend!==undefined&& project.frontend.map((value, index) => (
                                        <h6 key={index}>{`${++index}  ${value}`}</h6>
                                    ))
                                }
                                {project.BACKEND!==undefined&&<p><b>BACKEND</b></p>}
                                {
                                    project.BACKEND!==undefined&&project.BACKEND.map((value, index) => (
                                        <h6 key={index}>{`${++index}  ${value}`}</h6>
                                    ))
                                }
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}
export default Project;