import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerBluetooth24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 3.44c.2.23.3.51.3.81v15.5a1.25 1.25 0 01-2.06.96L7.98 16.5H4.25c-1.24 0-2.25-1-2.25-2.25v-4.5C2 8.51 3 7.5 4.25 7.5h3.73l4.96-4.2a1.25 1.25 0 011.76.14zm2.8 6.46V6.75c0-.65.75-.98 1.23-.58l.07.07 3 3.25c.27.29.26.73 0 1.01l-.07.08-1.7 1.42 1.7 1.42c.3.26.35.7.14 1l-.07.09-3 3.25a.75.75 0 01-1.3-.4V14.1l-.27.22a.75.75 0 01-1.04-1.07l.08-.08 1.23-1.02v-.3l-1.23-1.02a.75.75 0 01.87-1.22l.1.06.26.23V6.75 9.9zm1.5 3.2v2.23l1.16-1.26L19 13.1zm0-4.43v2.23l1.16-.97L19 8.67z" fill={primaryFill} /></svg>;
};

export default SpeakerBluetooth24Filled;