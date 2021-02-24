import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerMute16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.5a.5.5 0 00-.85-.36L5.22 5H3.5C2.67 5 2 5.66 2 6.5v3c0 .82.67 1.5 1.5 1.5h1.72l2.93 2.87A.5.5 0 009 13.5v-11z" fill={primaryFill} /><path d="M10.15 6.15c.2-.2.5-.2.7 0L12 7.29l1.15-1.14a.5.5 0 01.7.7L12.71 8l1.14 1.15a.5.5 0 01-.7.7L12 8.71l-1.15 1.14a.5.5 0 01-.7-.7L11.29 8l-1.14-1.15a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
};

export default SpeakerMute16Filled;