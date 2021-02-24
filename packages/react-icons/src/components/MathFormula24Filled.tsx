import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MathFormula24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.19 4.14a1.5 1.5 0 00-2.4 1.13L9.7 7H12a1 1 0 110 2H9.62l-.39 8.85a3.5 3.5 0 01-5.8 2.48l-.09-.08a1 1 0 011.32-1.5l.09.07c.94.83 2.43.2 2.48-1.06L7.63 9H6a1 1 0 010-2h1.71l.08-1.82a3.5 3.5 0 015.6-2.64l.21.16a1 1 0 11-1.2 1.6l-.21-.16z" fill={primaryFill} /><path d="M13.08 13.05a.5.5 0 01.7.22l.8 1.73-3.29 3.3a1 1 0 001.42 1.4l2.78-2.78.78 1.66a2.5 2.5 0 003.86.86l.5-.42a1 1 0 10-1.27-1.54l-.5.42a.5.5 0 01-.78-.17L17 15.42l2.7-2.71a1 1 0 10-1.4-1.42l-2.2 2.2-.52-1.07a2.5 2.5 0 00-3.46-1.13l-.6.33a1 1 0 00.96 1.76l.6-.33z" fill={primaryFill} /></svg>;
};

export default MathFormula24Filled;