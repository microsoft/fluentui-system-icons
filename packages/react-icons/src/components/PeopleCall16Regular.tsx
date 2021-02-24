import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCall16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8c.82 0 1.5.67 1.5 1.5v.75C10.1 12.08 8.67 13 6.05 13 3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h5zm0 1h-5a.5.5 0 00-.5.5v.77C3 11.42 3.93 12 6.06 12c2.12 0 3-.57 2.94-1.72V9.5a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M11.71 12.41l-.51-.17-.08-.02a.76.76 0 00-.8.33l-.47.69-.05.07a.88.88 0 00.15 1.03l.3.31.09.08c.3.25.7.34 1.07.22.96-.3 1.85-1.2 2.65-2.67.81-1.48 1.1-2.74.86-3.78-.1-.43-.41-.78-.81-.9l-.41-.14-.08-.02a.78.78 0 00-.88.49l-.32.76-.03.09c-.1.31-.01.66.22.89l.72.68-.02.17a3.28 3.28 0 01-1.25 2.01l-.35-.12z" fill={primaryFill} /><path d="M11.81 11.4l.01-.01h-.02.01z" fill={primaryFill} /><path d="M11.43 8.48c-.05.17-.08.35-.08.52h-.92a2 2 0 00-.61-1h1.8l-.13.33-.05.13v.02z" fill={primaryFill} /><path d="M6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M11 3a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
};

export default PeopleCall16Regular;