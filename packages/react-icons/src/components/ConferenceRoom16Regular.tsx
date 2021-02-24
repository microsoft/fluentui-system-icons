import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ConferenceRoom16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 8a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M7.6 2.01a.5.5 0 00-.6.49v11a.5.5 0 00.6.49l5-1a.5.5 0 00.4-.5V3.5a.5.5 0 00-.4-.49l-5-1zM8 12.89V3.1l4 .8v8.18l-4 .8z" fill={primaryFill} /><path d="M6 13v-1H4V4h2V3H3.5a.5.5 0 00-.5.5v9c0 .27.22.5.5.5H6z" fill={primaryFill} /></svg>;
};

export default ConferenceRoom16Regular;