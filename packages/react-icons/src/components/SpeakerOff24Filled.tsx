import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L6.44 7.5H4.25C3.01 7.5 2 8.5 2 9.75v4.5c0 1.24 1 2.25 2.25 2.25h3.68c.18 0 .36.06.5.19l4.49 3.99c.8.72 2.08.14 2.08-.93v-3.69l5.72 5.72a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M17.14 13.96l1.14 1.14a6.97 6.97 0 00-.12-6.43.75.75 0 00-1.32.72 5.47 5.47 0 01.3 4.57z" fill={primaryFill} /><path d="M19.39 16.2l1.1 1.1a9.96 9.96 0 00-.45-11.25.75.75 0 00-1.2.9 8.46 8.46 0 01.55 9.26z" fill={primaryFill} /><path d="M9.52 6.34L15 11.82V4.25a1.25 1.25 0 00-2.08-.93l-3.4 3.02z" fill={primaryFill} /></svg>;
};

export default SpeakerOff24Filled;