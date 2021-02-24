import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Beach24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.57 2.85a6.75 6.75 0 00-9.22 2.47l-.25.43c-.2.36-.08.82.28 1.03L13.9 9.4l-2.8 4.9a7.76 7.76 0 00-4.79 2.61 2 2 0 011.58 1.37c.24.73.73.95 1.12.96.4 0 .86-.22 1.08-.87a2 2 0 013.8 0c.22.65.68.87 1.08.87s.88-.23 1.12-.96a2 2 0 011.58-1.37 7.75 7.75 0 00-4.84-2.61l2.37-4.15 4.56 2.63c.36.2.81.08 1.02-.28l.25-.43a6.75 6.75 0 00-2.47-9.22zM6.71 18.65a.75.75 0 00-1.44.07c-.21.89-.6 1.36-1.04 1.63-.46.28-1.05.4-1.73.4a.75.75 0 000 1.5c.82 0 1.73-.13 2.52-.63.41-.25.77-.6 1.06-1.03a3.81 3.81 0 005.92-.02 3.82 3.82 0 006-.08 4.46 4.46 0 003.5 1.76.75.75 0 000-1.5c-1.18 0-2.38-.8-2.78-2.08a.75.75 0 00-1.43-.01c-.79 2.44-3.81 2.4-4.58.1a.75.75 0 00-1.42 0c-.77 2.3-3.8 2.34-4.58-.1z" fill={primaryFill} /></svg>;
};

export default Beach24Filled;