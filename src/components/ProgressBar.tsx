import { FC } from "react";

interface ProgressBarProps {
  label?: string;
  color?: "blue" | "red" | "green";
  fill?:
   string | number; // percentage of the progress bar
}

const ProgressBar: FC<ProgressBarProps> = ({ label, color, fill }) => {
  return (
    <div className="w-full flex flex-col justify-center whitespace-nowrap">
      <label>{label ? label : "Progress:"}</label>
      <div className="rpgui-progress" data-rpguitype="progress">
        <div className=" rpgui-progress-track">
          <div
            className={`rpgui-progress-fill ${color ? color : ""}`}
            style={{ left: "0px", width: `${fill ? fill : "100"}%` }}
          ></div>
        </div>
        <div className=" rpgui-progress-left-edge"></div>
        <div className=" rpgui-progress-right-edge"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
