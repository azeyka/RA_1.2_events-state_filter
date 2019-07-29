import React from 'react'
import PropTypes from 'prop-types'


function ProjectList(props) {
    const {projects} = props;

    return (
        <div className='projects'>
            {projects.map((project, index) => (
                <img 
                    key={`${index}_${project.img}`} 
                    className='project_img' 
                    src={project.img} 
                    alt='project_img'
                />
            ))}    
        </div>
    )
}

export default ProjectList

ProjectList.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};