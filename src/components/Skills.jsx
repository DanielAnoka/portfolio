import { SKILLS } from "../constants";
import { skills } from "./icons";

const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h2 id="skills" className="text-[#bdc3c7]">My Skills</h2>
        <main className="md:items-center">
          {SKILLS.map((item, index) => (
            <p key={index}>
              {item}
              <span>{skills[item]}</span>
            </p>
          ))}
        </main>
      </div>
    </div>
  );
};
export default Skills;
