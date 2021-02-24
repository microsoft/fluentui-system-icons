import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CompassNorthwest24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.7 7.08c-1.01-.4-2.02.6-1.62 1.63l1.6 4.03a4.75 4.75 0 002.55 2.6l4.33 1.86c1.03.44 2.08-.6 1.64-1.64l-1.86-4.33a4.75 4.75 0 00-2.6-2.54L8.7 7.09zm1.38 5.1L8.7 8.69l3.49 1.4c.8.31 1.44.94 1.78 1.73l1.61 3.75-3.75-1.6a3.25 3.25 0 01-1.74-1.79z" fill={primaryFill} /><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-7.75 9h-.7A8.5 8.5 0 0111 3.56v.69a.75.75 0 001.5 0v-.74A8.5 8.5 0 0120.44 11h-.69a.75.75 0 000 1.5h.74a8.5 8.5 0 01-7.99 7.99v-.74a.75.75 0 00-1.5 0v.7a8.5 8.5 0 01-7.49-7.95h.74a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
};

export default CompassNorthwest24Regular;