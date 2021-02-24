import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingListAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zm-6.48 4c.05.7.22 1.38.48 2H7a1 1 0 01-.12-2h4.14zm.48-3c-.26.62-.43 1.3-.48 2H4a1 1 0 01-.12-2h7.62zm2.54-3c-.81.51-1.5 1.2-2.02 2H7a1 1 0 01-.12-2h7.16zM6 5a3 3 0 012.78 1.87 1 1 0 01-1.8.86l-.05-.1A1 1 0 106 9h11.5a1 1 0 01.12 2H6a3 3 0 010-6zm14 1a1 1 0 01.12 2H11a1 1 0 01-.12-2H20z" fill={primaryFill} /></svg>;
};

export default ReadingListAdd24Filled;