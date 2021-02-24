import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L5.29 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.35.13l3.87 3.6a1 1 0 001.68-.74v-4.28l5.15 5.14a.5.5 0 00.7-.7l-2.56-2.57L2.85 2.15z" fill={primaryFill} /><path d="M15.96 4.67a8 8 0 01.66 9.83l-.73-.73a7 7 0 00-.68-8.44.5.5 0 11.75-.66z" fill={primaryFill} /><path d="M14.76 7.25c1 1.74.95 3.8.04 5.43l-.74-.74a4.5 4.5 0 00-.17-4.19.5.5 0 11.87-.5z" fill={primaryFill} /><path d="M12 3v6.88L7.25 5.13l3.07-2.86a1 1 0 011.68.74z" fill={primaryFill} /></svg>;
};

export default SpeakerOff20Filled;