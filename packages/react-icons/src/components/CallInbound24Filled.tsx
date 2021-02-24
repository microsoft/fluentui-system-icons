import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallInbound24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.37 3.31l.86 2.03c.37.88.16 1.92-.52 2.57l-1.9 1.8a8.68 8.68 0 003.36 5.77l2.28-.76c.86-.29 1.8.04 2.33.82l1.23 1.81c.62.9.5 2.15-.26 2.92l-.81.82a3.02 3.02 0 01-3.06.77c-2.53-.79-4.87-3.14-7-7.05C3.75 10.9 3 7.57 3.62 4.84a3.26 3.26 0 012.15-2.4l1.08-.34c1-.33 2.09.2 2.52 1.21zm5.13 5.13l6.22-6.22a.75.75 0 011.13.97l-.07.09-6.22 6.22h4.69c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74H13.6l-.1-.03-.07-.03a.72.72 0 01-.21-.15l-.04-.04-.03-.04-.04-.06-.05-.1-.03-.09-.02-.07-.01-.08V3.75a.75.75 0 011.5-.1v4.79l6.22-6.22-6.22 6.22z" fill={primaryFill} /></svg>;
};

export default CallInbound24Filled;