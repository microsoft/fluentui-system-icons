import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Chat48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 20.25c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 010 2.5h-13.5c-.7 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M17.25 26.48a1.25 1.25 0 000 2.5h9.5a1.25 1.25 0 000-2.5h-9.5z" fill={primaryFill} /><path d="M16.54 5.45C33.82-1.47 50.88 16.9 41.59 33.61c-4.22 7.6-14.7 13.7-26.9 7.92L6.2 43.96a1.75 1.75 0 01-2.16-2.16c.5-1.8 1.7-6.06 2.4-8.37-5.26-9.38-1.7-23.25 10.1-27.98zM39.4 32.4c8.08-14.55-6.73-30.7-21.95-24.62C7 11.97 3.94 24.47 8.87 32.63l.3.48-.18.54c-.53 1.7-1.53 5.23-2.18 7.53l8.11-2.31.44.21c11 5.46 20.32.03 24.05-6.69z" fill={primaryFill} /></svg>;
};

export default Chat48Regular;