import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

function ProjectCard({item}) {
  return (
    <>
      <div className="img-box flex justify-center relative overflow-hidden">
              <img src={item.img} alt="" className='rounded-[2%]'/>
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
                <div className="icon pt-5 text-lg flex flex-row justify-center gap-4  lg:gap-8 lg:my-10">
                        <a href={item.deployPage} rel="noreferrer" target='_blank'>
                            <i className="border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black">
                                <FontAwesomeIcon icon={faRocket} />
                            </i>
                        </a>
                        <a href={item.githubPage} target='_blank' rel="noreferrer">
                            <i className=" border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black">
                                <FontAwesomeIcon icon={faGithub} />
                            </i>
                        </a>
                    </div>
              </div>
            </div>
    </>
  )
}

export default ProjectCard