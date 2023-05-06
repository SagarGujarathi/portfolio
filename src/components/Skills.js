import '../css/Skills.css'
import Skillitem from './Skillitem'
import { techStack } from '../App'
import Heading from './Heading'
import diamond from '../images/diamond.gif'

function Skills() {
    return (
        <div className="skills-main-container">
            <Heading
                heading={'My Skills'}
                sticker={diamond}
            />
            <div className="skills-wrap-container">
                <Skillitem name={'HTML'} image={techStack.html} percentage={90} />
                <Skillitem name={'CSS'} image={techStack.css} percentage={85} />
                <Skillitem name={'JavaScript'} image={techStack.js} percentage={85} />
                <Skillitem name={'C++'} image={techStack.cpp} percentage={85} />
                <Skillitem name={'MongoDB'} image={techStack.mongoDB} percentage={75} />
                <Skillitem name={'Express.js'} image={techStack.express} percentage={75} />
                <Skillitem name={'React.js'} image={techStack.react} percentage={85} />
                <Skillitem name={'Node.js'} image={techStack.node} percentage={85} />

            </div>
        </div>
    )
}

export default Skills