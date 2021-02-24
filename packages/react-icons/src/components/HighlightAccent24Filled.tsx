import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HighlightAccent24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 4h-3v4h2.29c.36-.02.66-.3.7-.65l.01-.1V4zM5.25 8H15V4H4.5v3.25c0 .38.28.7.65.74l.09.01zM9 14h6v2.89a.75.75 0 01-.43.58L9 20.07V14z" fill={primaryFill} /></svg>;
};

export default HighlightAccent24Filled;