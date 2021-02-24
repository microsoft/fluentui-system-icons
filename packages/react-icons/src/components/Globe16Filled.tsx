import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Globe16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8c0-.7.04-1.38.12-2h3.76a15.73 15.73 0 010 4H6.12C6.04 9.38 6 8.7 6 8z" fill={primaryFill} /><path d="M5.12 10a16.83 16.83 0 010-4H2.34a5.99 5.99 0 000 4h2.78z" fill={primaryFill} /><path d="M2.8 11h2.47c.13.66.3 1.25.5 1.78.13.35.28.67.45.95A6.02 6.02 0 012.8 11z" fill={primaryFill} /><path d="M6.3 11h3.4c-.1.53-.24 1-.4 1.42-.21.55-.45.97-.7 1.23-.24.27-.44.35-.6.35-.16 0-.36-.08-.6-.35a3.99 3.99 0 01-.7-1.23c-.16-.42-.3-.9-.4-1.42z" fill={primaryFill} /><path d="M10.73 11c-.13.66-.3 1.25-.5 1.78-.13.35-.28.67-.45.95A6.02 6.02 0 0013.2 11h-2.47z" fill={primaryFill} /><path d="M13.66 10a5.99 5.99 0 000-4h-2.78a16.82 16.82 0 010 4h2.78z" fill={primaryFill} /><path d="M9.3 3.58c.16.42.3.9.4 1.42H6.3c.1-.53.24-1 .4-1.42.21-.55.45-.97.7-1.23.24-.27.44-.35.6-.35.16 0 .36.08.6.35.25.26.49.68.7 1.23z" fill={primaryFill} /><path d="M10.73 5h2.47a6.02 6.02 0 00-3.42-2.73c.17.28.32.6.45.95.2.53.37 1.12.5 1.78z" fill={primaryFill} /><path d="M2.8 5h2.47c.13-.66.3-1.25.5-1.78.13-.34.28-.67.45-.95A6.02 6.02 0 002.8 5z" fill={primaryFill} /></svg>;
};

export default Globe16Filled;