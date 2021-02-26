import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HandRight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2a.5.5 0 00-.5.5v4a.5.5 0 11-1 0v-3a.5.5 0 00-1 0v4a.5.5 0 01-1 0v-2a.5.5 0 00-1 0v4c0 .57.25 1.3.63 2.04.38.73.84 1.43 1.2 1.92.25.34.66.54 1.1.54h1.84c.72 0 1.4-.56 1.74-1.36a10.95 10.95 0 012.28-3.3c.39-.4.74-.7 1-.91v-.01a1.3 1.3 0 00-.3-.24.7.7 0 00-.45-.09c-.34.05-.74.32-1.19.76A.5.5 0 0110 8.5v-5a.5.5 0 00-1 0v3a.5.5 0 01-1 0v-3-1a.5.5 0 00-.5-.5zM4 4.09V3.5a1.5 1.5 0 012.05-1.4 1.5 1.5 0 012.9 0A1.5 1.5 0 0111 3.5v3.95c.28-.17.58-.3.9-.35.35-.05.72 0 1.08.2.35.2.66.5.94.92a.5.5 0 01-.13.69l-.02.01a5.02 5.02 0 00-.35.28c-.23.2-.56.48-.91.84a9.96 9.96 0 00-2.08 2.99C10 14.06 9.03 15 7.77 15H5.94c-.74 0-1.46-.33-1.91-.95-.38-.52-.88-1.26-1.29-2.06A5.83 5.83 0 012 9.5v-4a1.5 1.5 0 012-1.41zM4 7.5z" fill={primaryFill} /></svg>;
};

export default HandRight16Regular;