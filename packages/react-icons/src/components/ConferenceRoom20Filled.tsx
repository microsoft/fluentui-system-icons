import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ConferenceRoom20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.18 2.11a.5.5 0 01.42-.1l7 1.5c.23.05.4.25.4.49v12a.5.5 0 01-.4.49l-7 1.5a.5.5 0 01-.6-.49v-15c0-.15.07-.3.18-.39zM12.5 10a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" fill={primaryFill} /><path d="M8 3H3.5a.5.5 0 00-.5.5v13c0 .27.22.5.5.5H8V3z" fill={primaryFill} /></svg>;
};

export default ConferenceRoom20Filled;