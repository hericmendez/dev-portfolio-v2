import { FC } from "react";
import Card from "@/components/Card";

const About: FC = () => (
  <div className="p-5 mb-4">
    <Card>
      <h2>About</h2>
      <hr  className="golden mb-4"/>
      <p>
        RPGUI Documentation:
        <a
          href="https://github.com/RonenNess/RPGUI/blob/master/README.md"
          rel="noreferreer"
          target="_blank"
        >
           https://github.com/RonenNess/RPGUI/blob/master/README.md
        </a>
      </p>
    </Card>
  </div>
);

export default About;
