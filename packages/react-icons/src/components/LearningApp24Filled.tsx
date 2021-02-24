import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LearningApp24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2H17a2.5 2.5 0 012.5 2.5v6.81a6.5 6.5 0 00-8.19 8.19H4.5a1 1 0 001 1h6.23c.29.55.65 1.06 1.08 1.5H5.5A2.5 2.5 0 013 19.5v-15A2.5 2.5 0 015.5 2zM7 5a1 1 0 00-1 1v1a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H7z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-6.09-2.4l2.81 1.84a.6.6 0 01.28.52c0 .1-.02.2-.07.3a.57.57 0 01-.2.22l-2.8 1.92a.64.64 0 01-.17.07.55.55 0 01-.4-.02.69.69 0 01-.18-.13.61.61 0 01-.18-.44v-3.76a.62.62 0 01.37-.57.55.55 0 01.55.05z" fill={primaryFill} /></svg>;
};

export default LearningApp24Filled;