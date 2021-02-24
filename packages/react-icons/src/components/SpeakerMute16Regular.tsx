import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerMute16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.7 2.04c.18.08.3.26.3.46v11a.5.5 0 01-.85.36l-2.93-2.88H3.5A1.5 1.5 0 012 9.48V6.5C2 5.66 2.67 5 3.5 5h1.72l2.93-2.85a.5.5 0 01.54-.1zM8 3.69L5.78 5.85a.5.5 0 01-.35.14H3.5a.5.5 0 00-.5.5v3c0 .27.22.5.5.5h1.93a.5.5 0 01.35.13L8 12.31V3.69z" fill={primaryFill} /><path d="M10.15 6.15c.2-.2.5-.2.7 0L12 7.29l1.15-1.14a.5.5 0 01.7.7L12.71 8l1.14 1.15a.5.5 0 01-.7.7L12 8.71l-1.15 1.14a.5.5 0 01-.7-.7L11.29 8l-1.14-1.15a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
};

export default SpeakerMute16Regular;