import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TagQuestionMark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03a6.48 6.48 0 00-1.43-.7l.4-.4c.33-.32.51-.76.51-1.23V4.25a.75.75 0 00-.75-.75h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.64.64 1.64.68 2.33.13.17.49.39.95.65 1.38-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 010-4.6l8.5-8.5a3.25 3.25 0 012.3-.96h5.46z" fill={primaryFill} /><path d="M17 5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-6.12 3a.62.62 0 111.24 0 .62.62 0 01-1.24 0zm-1.23-4.54c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .57-.18.92-.66 1.45l-.27.3-.1.1c-.24.3-.32.47-.32.7a.5.5 0 11-1 0c0-.57.19-.93.67-1.47l.27-.29.1-.11c.24-.29.31-.45.31-.68 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 11-1 0z" fill={primaryFill} /></svg>;
};

export default TagQuestionMark24Regular;