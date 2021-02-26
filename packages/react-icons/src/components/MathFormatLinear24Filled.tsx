import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MathFormatLinear24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.7 3.3a1 1 0 00-1.4 0l-2 2a1 1 0 001.4 1.4L11 5.42l1.3 1.3a1 1 0 101.4-1.42l-2-2zm2.77 6.43a.5.5 0 01.77.15l1.11 2.1-3.56 3.56a1 1 0 001.42 1.42l3.11-3.12 1.17 2.21a2.5 2.5 0 003.84.74l.32-.28a1 1 0 00-1.3-1.52l-.32.28a.5.5 0 01-.77-.15l-1.45-2.76 2.9-2.9a1 1 0 00-1.42-1.42l-2.46 2.47-.82-1.56a2.5 2.5 0 00-3.84-.74l-.32.28a1 1 0 101.3 1.52l.32-.28zM3.04 13.72c.88-.02 1.78-.08 2.61-.26a4.4 4.4 0 002.87-1.74c.62-.92.64-2.05.06-2.9-.6-.88-1.7-1.25-2.87-.98-.44.1-1.28.31-2.15 1-.87.7-1.7 1.8-2.26 3.58a4.8 4.8 0 000 3.38 3.2 3.2 0 002.14 1.8c1.76.5 3.93-.29 5.31-2.03a1 1 0 00-1.56-1.24c-.97 1.22-2.36 1.59-3.22 1.35a1.2 1.2 0 01-.83-.69 2.29 2.29 0 01-.1-1.27zm3.89-3.77c.07.1.14.35-.08.67-.26.4-.77.7-1.62.89-.45.1-.94.15-1.46.18.34-.63.7-1.02 1.03-1.28a3.18 3.18 0 011.36-.62c.5-.12.7.06.77.16z" fill={primaryFill} /></svg>;
};

export default MathFormatLinear24Filled;