import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CameraSwitch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 7a1 1 0 011 .88v8.62a3.5 3.5 0 01-3.3 3.5H6.4l.3.3a1 1 0 01.08 1.31l-.08.1a1 1 0 01-1.32.08l-.1-.08-2-2-.01-.02a1 1 0 01-.07-.07l.08.09A1.01 1.01 0 013 19v-.04a1 1 0 010-.06V19a1 1 0 01.3-.7l2-2a1 1 0 011.49 1.31l-.08.1-.3.29H18.5c.78 0 1.42-.6 1.5-1.36V8a1 1 0 011-1zm-2.39-4.79l.1.08 2 2a1 1 0 01.08.1l-.08-.1a1.02 1.02 0 01.28.56.98.98 0 01.01.12v.06a1 1 0 010 .06V5a1.02 1.02 0 01-.21.61l-.01.02-.07.08-2 2a1 1 0 01-1.5-1.32l.08-.1.3-.29H5.5c-.78 0-1.42.6-1.5 1.36V16a1 1 0 01-2 .12V7.5A3.5 3.5 0 015.3 4H17.6l-.3-.3a1 1 0 01-.08-1.31l.08-.1a1 1 0 011.32-.08zM12 8a4 4 0 110 8 4 4 0 010-8z" fill={primaryFill} /></svg>;
};

export default CameraSwitch24Filled;