import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bluetooth24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.22 9.72a1 1 0 00.1-1.45l-4.58-4.95a1 1 0 00-1.73.68v5.1l-.64-.54a1 1 0 10-1.29 1.54l1.93 1.6v.6l-1.92 1.6a1 1 0 101.28 1.53l.64-.54V20a1 1 0 001.73.68l4.57-4.96a1 1 0 00-.1-1.44L13.49 12l2.74-2.28zM12 13.37l2.12 1.77-2.12 2.3v-4.07zm0-2.74V6.56l2.12 2.3L12 10.63z" fill={primaryFill} /></svg>;
};

export default Bluetooth24Filled;