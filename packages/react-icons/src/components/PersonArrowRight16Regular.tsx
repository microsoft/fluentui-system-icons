import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonArrowRight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10c0 1.8 1.55 3.65 4.22 3.96a5.5 5.5 0 01-.72-1.16C3.88 12.33 3 11.13 3 10v-.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H3.5C2.67 8 2 8.67 2 9.5v.5z" fill={primaryFill} /><path d="M9.75 4.25c0 .29-.04.56-.12.82-.49.08-.95.22-1.39.41A1.74 1.74 0 007 2.5a1.75 1.75 0 10.4 3.45c-.4.28-.76.6-1.07.97a2.75 2.75 0 113.42-2.67z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L11.29 10H8.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /></svg>;
};

export default PersonArrowRight16Regular;