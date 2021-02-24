import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BluetoothSearching24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9.1V4a1 1 0 011.66-.76l.08.08 4.57 4.95a1 1 0 010 1.37l-.1.08L13.49 12l2.74 2.28a1 1 0 01.17 1.35l-.08.1-4.57 4.95a1 1 0 01-1.73-.57V14.9l-.64.53a1 1 0 01-1.38-1.45l.1-.09L10 12.3v-.59l-1.93-1.6a1 1 0 011.18-1.61l.1.07.65.54V4v5.1zm2 4.27v4.07l2.13-2.3L12 13.37zm7.88-6.13a1 1 0 011.41.11 7.14 7.14 0 010 9.3 1 1 0 01-1.53-1.3 5.14 5.14 0 000-6.7 1 1 0 01.12-1.41zm-2.26 2a1 1 0 011.4.11 4.07 4.07 0 010 5.3 1 1 0 01-1.52-1.3 2.07 2.07 0 000-2.7 1 1 0 01.12-1.41zM12 6.56v4.07l2.12-1.77L12 6.56z" fill={primaryFill} /></svg>;
};

export default BluetoothSearching24Filled;