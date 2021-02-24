import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextFont16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2c.2 0 .4.13.47.32l1.73 4.61-.55 1.4-.3-.83H3.4l-.44 1.18a.5.5 0 01-.94-.36l2.25-6A.5.5 0 014.75 2zm-.97 4.5h1.94l-.97-2.58-.97 2.58z" fill={primaryFill} /><path d="M6.7 10.31v.03L5.65 13H5.5a.5.5 0 000 1h2a.5.5 0 000-1h-.77l.78-2h3.98l.78 2h-.77a.5.5 0 100 1h2.01a.5.5 0 000-1h-.17L9.97 4.32a.5.5 0 00-.94 0l-2.33 6zm4.4-.3H7.9l1.6-4.13 1.6 4.13z" fill={primaryFill} /></svg>;
};

export default TextFont16Regular;