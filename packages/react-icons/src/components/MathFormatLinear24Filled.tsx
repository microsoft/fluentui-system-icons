import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MathFormatLinear24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.44 4.95a.5.5 0 00-.72-.16l-.39.27a1 1 0 01-1.16-1.62l.38-.28a2.5 2.5 0 013.64.82l.5.9 1.6-1.59a1 1 0 111.42 1.42l-2 2 .8 1.41a.5.5 0 00.75.15l.36-.3a1 1 0 011.26 1.56l-.36.3c-1.21.97-3 .63-3.76-.73l-.52-.93-1.53 1.54a1 1 0 11-1.42-1.42l1.94-1.93-.79-1.4z" fill={primaryFill} /><path d="M8.4 14.14c-1.42.27-3 .34-4.53.36-.28 1.1-.16 1.9.1 2.43.3.62.88 1.06 1.7 1.27 1.7.42 4.18-.25 5.83-2.14a1 1 0 111.5 1.32c-2.1 2.4-5.32 3.38-7.81 2.76a4.44 4.44 0 01-3.03-2.34c-.6-1.25-.6-2.83.02-4.63a9.83 9.83 0 013.4-4.88A8.16 8.16 0 018.8 6.87c1.63-.33 3.08.13 3.9 1.2.83 1.08.8 2.56-.1 3.78-.97 1.34-2.57 1.97-4.2 2.29zm.8-5.31c-.55.11-1.47.37-2.44 1.07a7.17 7.17 0 00-2.13 2.58c1.21-.03 2.36-.1 3.38-.3 1.46-.29 2.45-.78 2.98-1.5.43-.6.35-1.1.12-1.4-.25-.32-.85-.67-1.9-.45z" fill={primaryFill} /></svg>;
};

export default MathFormatLinear24Filled;