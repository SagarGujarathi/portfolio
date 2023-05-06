import '../css/MyProjects.css'
import Projectitem from './Projectitem'
import { techStack } from '../App'
import todolist from '../images/todolist.jpeg'
import chessify from '../images/chessify.jpeg'
import boldify from '../images/boldify.jpeg'
import mazeSolver from '../images/mazesolver.jpeg'
import Heading from './Heading'
import build from '../images/build.gif'
function MyProjects() {
    return (
        <div className="my-projects-main-container">
            <Heading
                heading={'My Projects'}
                sticker={build}
            />
            <div className="projects-wrap">
                <Projectitem
                    name={'Task Management Tool'}
                    content={'Build by react technology, Your tasks are stored in local storage permanently as long as you are not done with them. Managing your task priority is also available.'}
                    tech={[techStack.html, techStack.css, techStack.js, techStack.react]}
                    pic={todolist}
                    link={'https://todolist.sagargujarathi.me/'}
                    repo={'https://github.com/SagarGujarathi/Task_Management_tool'}
                />
                <Projectitem
                    name={'Chessify'}
                    content={'Chessify helps beginners learn chess. It assists the players in moving the pieces. The algorithm is designed such that it can find the safest and best paths.'}
                    tech={[techStack.html, techStack.css, techStack.js]}
                    pic={chessify}
                    link={'https://chess.sagargujarathi.repl.co/'}
                />
                <Projectitem
                    name={'Boldify'}
                    content={'Boldify is a font changer, It has over 53 unique fonts. Just a click on required font to copy it!'}
                    tech={[techStack.html, techStack.css, techStack.js]}
                    pic={boldify}
                    link={'https://todolist.sagargujarathi.me/'}
                />

                <Projectitem
                    content={'Maze solver is a web version of famous rat in maze problem, Make the maze and challenge the algorithm to solve it!'}
                    tech={[techStack.html, techStack.css, techStack.js]}
                    pic={mazeSolver}
                    link={'https://maze-solver.sagargujarathi.repl.co/'}
                    name={'Maze Solver'}
                />
            </div>
        </div>
    )
}

export default MyProjects