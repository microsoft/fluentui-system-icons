import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClosedCaption28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4A4.25 4.25 0 002 8.25v11.5C2 22.1 3.9 24 6.25 24h15.5C24.1 24 26 22.1 26 19.75V8.25C26 5.9 24.1 4 21.75 4H6.25zm4.8 5.74c.62.1 1.23.32 1.67.67a.75.75 0 11-.94 1.18c-.18-.15-.52-.3-.95-.36a2.82 2.82 0 00-1.3.1c-.42.15-.78.4-1.05.8S8 13.11 8 14c0 .88.2 1.48.48 1.88.27.4.63.64 1.04.79.42.14.89.17 1.31.1.43-.06.77-.2.95-.36a.75.75 0 01.94 1.18c-.44.35-1.05.58-1.67.67-.63.1-1.34.06-2.01-.18a3.53 3.53 0 01-1.8-1.36c-.48-.7-.74-1.6-.74-2.72s.26-2.02.73-2.72a3.53 3.53 0 011.8-1.36 4.32 4.32 0 012.02-.18zm10.17.67a.75.75 0 11-.94 1.18c-.18-.15-.52-.3-.95-.36a2.82 2.82 0 00-1.3.1c-.42.15-.78.4-1.05.8s-.48.99-.48 1.87c0 .88.2 1.48.48 1.88.27.4.63.64 1.04.79.42.14.89.17 1.31.1.43-.06.77-.2.95-.36a.75.75 0 01.94 1.18c-.44.35-1.05.58-1.67.67-.63.1-1.34.06-2.01-.18a3.53 3.53 0 01-1.8-1.36c-.48-.7-.74-1.6-.74-2.72s.26-2.02.73-2.72a3.53 3.53 0 011.8-1.36 4.32 4.32 0 012.02-.18c.62.1 1.23.32 1.67.67z" fill={primaryFill} /></svg>;
};

export default ClosedCaption28Filled;