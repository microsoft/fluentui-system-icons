import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerEdit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4.25v11.1l-2.51 2.51c-.45.45-.77 1-.94 1.6L8.43 16.7a.75.75 0 00-.5-.2H4.25c-1.24 0-2.25-1-2.25-2.24v-4.5C2 8.51 3 7.5 4.25 7.5h3.68c.18 0 .36-.07.5-.19l4.49-4c.8-.7 2.08-.14 2.08.94zm3.4 7.71c.17-.18.37-.34.58-.47a6.96 6.96 0 00-.82-2.82.75.75 0 00-1.32.72 5.47 5.47 0 01.58 3.54l.97-.97zm2.04-.95a3.3 3.3 0 011.53.24 9.95 9.95 0 00-1.93-5.2.75.75 0 00-1.2.9 8.45 8.45 0 011.6 4.06zm-1.34 1.66l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.28 2.28 0 10-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default SpeakerEdit24Filled;