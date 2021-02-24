import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ConferenceRoom24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.6 2.01l9 2c.23.05.4.25.4.49v15a.5.5 0 01-.4.5l-9 2a.5.5 0 01-.6-.5v-19a.5.5 0 01.6-.49zM9 4v16H4.75a.75.75 0 01-.74-.65l-.01-.1V4.75c0-.38.28-.7.65-.74l.1-.01H9zm4 7a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
};

export default ConferenceRoom24Filled;