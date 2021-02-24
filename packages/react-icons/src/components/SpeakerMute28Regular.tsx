import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerMute28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.4 3.9c.8-.75 2.1-.18 2.1.91v18.37c0 1.1-1.3 1.66-2.1.92l-4.94-4.63c-.33-.3-.75-.47-1.2-.47H5.25A3.25 3.25 0 012 15.75v-3.5c0-1.79 1.46-3.24 3.25-3.24h3.01c.45 0 .87-.17 1.2-.48l4.93-4.63zm.6 1.5l-4.52 4.23c-.6.56-1.4.88-2.22.88H5.25c-.97 0-1.75.78-1.75 1.75v3.49c0 .96.78 1.75 1.75 1.75h3.01c.83 0 1.62.31 2.22.88L15 22.6V5.39z" fill={primaryFill} /><path d="M19.78 10.72a.75.75 0 00-1.06 1.06L20.94 14l-2.22 2.2a.75.75 0 001.06 1.07l2.22-2.2 2.22 2.2a.75.75 0 101.06-1.06l-2.22-2.2 2.22-2.24a.75.75 0 00-1.06-1.06L22 12.95l-2.22-2.23z" fill={primaryFill} /></svg>;
};

export default SpeakerMute28Regular;