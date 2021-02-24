import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobePerson24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 019.81 11.94 3.01 3.01 0 00-1.32-1.56 8.73 8.73 0 00-.23-2.38h-3.35a20.85 20.85 0 01.08 2.76 3 3 0 00-.52 3.83l-.1.4a2.5 2.5 0 00-2.08 1.33c.25-.53.47-1.14.65-1.82H9.06c.65 2.41 1.79 4 2.94 4 .8 0 1.58-.75 2.2-2.02-.13.3-.2.65-.2 1 0 .82.2 1.56.56 2.2A10.02 10.02 0 012 12 10 10 0 0112 2zM7.5 16.5H4.8a8.53 8.53 0 004.09 3.41c-.52-.82-.95-1.84-1.27-3.01l-.1-.4zM7.1 10H3.73v.02a8.52 8.52 0 00.3 4.98h3.18a20.3 20.3 0 01-.13-5zm1.5 0a18.97 18.97 0 00.14 5h6.52a18.5 18.5 0 00.14-5H8.6zm.28-5.91h-.02A8.53 8.53 0 004.25 8.5H7.3c.31-1.75.86-3.28 1.58-4.41zm3.12-.6l-.12.01c-1.26.12-2.48 2.12-3.05 5h6.34c-.56-2.87-1.78-4.87-3.04-5H12zm3.12.6l.1.17A12.64 12.64 0 0116.7 8.5h3.05a8.53 8.53 0 00-4.34-4.29l-.29-.12zm6.38 13.9c.83 0 1.5.67 1.5 1.5 0 1.11-.46 2-1.21 2.6-.74.6-1.74.9-2.79.9a4.43 4.43 0 01-2.79-.9A3.22 3.22 0 0115 19.5a1.5 1.5 0 011.5-1.5h5zm-.5-3a2 2 0 01-4 .01v-.02a2 2 0 014 0z" fill={primaryFill} /></svg>;
};

export default GlobePerson24Regular;