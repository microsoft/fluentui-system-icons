import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallInbound28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.78 3.28a.75.75 0 10-1.06-1.06l-8.22 8.22V4.25a.75.75 0 00-1.5 0v8c0 .41.34.75.75.75h8a.75.75 0 000-1.5h-6.19l8.22-8.22z" fill={primaryFill} /><path d="M4.1 2.88c1.11-.72 2.54-1 3.96-.8l.24.03c.9.13 1.69.69 2.1 1.5l1.28 2.58a3.25 3.25 0 01-1.1 4.16l-1.7 1.14c-.4.26-.52.63-.43.9a15.3 15.3 0 003.17 5.05c.23.24.65.3 1.08.07l1.3-.72c1.82-1 4.1-.33 5.1 1.5l1.04 1.9c.45.82.45 1.8.02 2.61-1.45 2.73-4.76 4.24-7.57 2.4a24.42 24.42 0 01-7.74-8.32c-2.44-4.23-2.93-7.9-2.78-10.56a4.3 4.3 0 012.02-3.44z" fill={primaryFill} /></svg>;
};

export default CallInbound28Filled;