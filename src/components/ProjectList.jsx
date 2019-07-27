import React from 'react'

function ProjectList(props) {
    const {projects} = props,
        {fileName} = project => project.img.split('\\').pop().split('/').pop();

    return (
        <div className='projects'>
            {projects.map(project => <img key={fileName} className='project_img' src={project.img} alt='project_img'></img>)}    
        </div>
    )
}

export default ProjectList
