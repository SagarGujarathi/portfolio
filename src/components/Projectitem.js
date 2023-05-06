import { Button } from '@mui/material'
import '../css/ProjectItem.css'
import GitHubIcon from '@mui/icons-material/GitHub';
function Projectitem(props) {
    return (
        <a href={props.link} target='_blank'>
            <div className="project-item">
                <img src={props.pic} />
                <p className='project-name'>{props.name}</p>
                <p className="project-info">
                    {props.content}
                </p>
                <a href={props.repo} style={{ zInded: 2, padding: '0 1rem' }}>
                    <Button
                        variant='contained'
                        size='small'
                    >
                        Repo Link &nbsp; <GitHubIcon />
                    </Button>
                </a>
                <div className="tech-used">
                    {props.tech.map((item) => {
                        return (
                            <div className="tech-item">
                                <img src={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </a>
    )
}

export default Projectitem