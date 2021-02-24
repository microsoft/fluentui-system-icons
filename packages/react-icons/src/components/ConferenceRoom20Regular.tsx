import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ConferenceRoom20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.48 10a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M9.6 2.01a.5.5 0 00-.6.5V17.5a.5.5 0 00.6.49l7-1.5A.5.5 0 0017 16V4a.5.5 0 00-.4-.49l-7-1.5zm.4 14.87V3.12l6 1.28v11.2l-6 1.28z" fill={primaryFill} /><path d="M8 17v-1H4V4h4V3H3.5a.5.5 0 00-.5.5v13c0 .27.22.5.5.5H8z" fill={primaryFill} /></svg>;
};

export default ConferenceRoom20Regular;