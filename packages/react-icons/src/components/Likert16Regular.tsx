import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Likert16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M9.25 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M11.25 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M13.25 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M6.5 11a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M8.5 11a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M10.5 11a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M12.5 11a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zM3.5 4C2.67 4 2 4.67 2 5.5v2h2V4h-.5zM5 4v3.5h9v-2c0-.83-.67-1.5-1.5-1.5H5zM4 8.5H2v2c0 .83.67 1.5 1.5 1.5H4V8.5zM5 12h7.5c.83 0 1.5-.67 1.5-1.5v-2H5V12z" fill={primaryFill} /></svg>;
};

export default Likert16Regular;