import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CurrencyDollarRupee16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2.5a.5.5 0 10-1 0v.33a2.7 2.7 0 00-2 2.6v.1c0 1.1.65 2.1 1.65 2.55l.35.16v3.87a1.7 1.7 0 01-1-1.55v-.72a.5.5 0 00-1 0v.72c0 1.25.85 2.3 2 2.61v.34a.5.5 0 001 0v-.26a2.7 2.7 0 002.4-2.69v-.09c0-1.1-.64-2.1-1.65-2.54L5 7.59V3.76c.8.14 1.4.84 1.4 1.67v.74a.5.5 0 001 0v-.74A2.7 2.7 0 005 2.75V2.5zM4 3.88v3.26c-.61-.3-1-.93-1-1.61v-.1c0-.68.41-1.28 1-1.55zm1 4.8l.34.16c.65.29 1.06.93 1.06 1.63v.09c0 .84-.6 1.53-1.4 1.68V8.68z" fill={primaryFill} /><path d="M8 3.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-1c.22.29.37.63.45 1h.55a.5.5 0 010 1h-.55a2.5 2.5 0 01-2.45 2h-.93l4.31 5.18a.5.5 0 01-.76.64l-5-6A.5.5 0 018.5 7h2c.65 0 1.2-.42 1.41-1H8.5a.5.5 0 110-1h3.41c-.2-.58-.76-1-1.41-1h-2a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default CurrencyDollarRupee16Regular;