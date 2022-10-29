import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareXing, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Help = () => {
  return (
    <div>
      <form className="formPart">
          <h2>Help?</h2>
          <h3>To add a new Task do this:</h3>
          <ol>
            <li>Write in the input Field with the placeholder text " Write a new Task" the name of your new Task</li>
            <li>Then set in the field next to it a date until you have to suffer your task</li>
            <li>If you filled out the two fields before, click on "Add Task" to add the new task in your "ToDo-List"</li>
            <li>Now you have all your Tasks in your "ToDo-List". With click on the "x" in the right edge you can remove the task. If you set a hook in the box below, you mark your task as "Done" and it will moved from the "ToDo" to the "Done" List</li>
            <li>Thats it....have fun!</li>
          </ol>
      </form>
      <div className="profileLinksOuterDiv">
        <h2>Have a look at my Profiles and at my other Projects on Github</h2>
        <div className="profileLinksInnerDiv">
          <div className="profileLink">
            <a
              href="https://github.com/BreffJaun"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size='2x'
              />
            </a>
            <p>GitHub</p>
          </div>

          <div className="profileLink">
            <a
              href="https://www.xing.com/profile/Jeff_Braun2/cv"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faSquareXing}
                size='2x'
              />
            </a>
            <p>Xing</p>
          </div>

          <div className="profileLink">
            <a
              href="https://www.linkedin.com/in/jeff-braun-0959091a4/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                size='2x'
              />
            </a>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

