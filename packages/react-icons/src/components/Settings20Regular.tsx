import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Settings20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.91 7.38A8.5 8.5 0 013.7 4.3a.5.5 0 01.54-.13l1.92.68a1 1 0 001.32-.76l.36-2a.5.5 0 01.4-.4 8.53 8.53 0 013.55 0c.2.04.35.2.38.4l.37 2a1 1 0 001.32.76l1.92-.68a.5.5 0 01.54.13 8.5 8.5 0 011.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 000 1.52l1.56 1.32a.5.5 0 01.15.54 8.5 8.5 0 01-1.78 3.08.5.5 0 01-.54.13l-1.92-.68a1 1 0 00-1.32.76l-.37 2a.5.5 0 01-.38.4 8.53 8.53 0 01-3.56 0 .5.5 0 01-.39-.4l-.36-2a1 1 0 00-1.32-.76l-1.92.68a.5.5 0 01-.54-.13 8.5 8.5 0 01-1.78-3.08.5.5 0 01.15-.54l1.56-1.32a1 1 0 000-1.52L2.06 7.92a.5.5 0 01-.15-.54zm1.06 0l1.3 1.1a2 2 0 010 3.04l-1.3 1.1c.3.79.71 1.51 1.25 2.16l1.6-.58a2 2 0 012.63 1.53l.3 1.67a7.56 7.56 0 002.5 0l.3-1.67a2 2 0 012.64-1.53l1.6.58a7.5 7.5 0 001.24-2.16l-1.3-1.1a2 2 0 010-3.04l1.3-1.1a7.5 7.5 0 00-1.25-2.16l-1.6.58a2 2 0 01-2.63-1.53l-.3-1.67a7.55 7.55 0 00-2.5 0l-.3 1.67A2 2 0 015.81 5.8l-1.6-.58a7.5 7.5 0 00-1.24 2.16zM7.5 10a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm1 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /></svg>;
};

export default Settings20Regular;