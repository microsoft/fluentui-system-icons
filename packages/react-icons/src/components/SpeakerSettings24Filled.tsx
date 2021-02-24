import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 11c.3 0 .58.02.86.07l.17.72a2 2 0 002.42 1.47l.1-.02.6-.18c.36.47.65 1 .85 1.57l-.45.43a2 2 0 00-.05 2.83l.05.05.45.43c-.2.58-.5 1.1-.85 1.57l-.6-.18a2 2 0 00-2.49 1.35l-.03.1-.17.72a5.18 5.18 0 01-1.72 0l-.17-.72a2 2 0 00-2.42-1.47l-.1.02-.6.18c-.36-.47-.65-1-.85-1.57l.45-.43a2 2 0 00.05-2.83l-.05-.05-.45-.43c.2-.57.5-1.1.85-1.57l.6.18a2 2 0 002.49-1.35l.03-.1.17-.72c.28-.05.57-.07.86-.07zm0 4c-.8 0-1.45.67-1.45 1.5S15.7 18 16.5 18c.8 0 1.45-.67 1.45-1.5S17.3 15 16.5 15zM12.63 2.5c.24.24.37.56.37.9v7.62a6.5 6.5 0 00-3 5.48v.11L6.94 13.5H4.25c-1.24 0-2.25-1-2.25-2.25v-2.5C2 7.51 3 6.5 4.25 6.5h2.69l3.92-3.98c.48-.5 1.28-.5 1.77-.02z" fill={primaryFill} /></svg>;
};

export default SpeakerSettings24Filled;