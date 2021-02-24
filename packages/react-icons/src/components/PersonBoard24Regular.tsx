import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonBoard24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 12.25c0-.97-.78-1.75-1.75-1.75h-6c-.97 0-1.75.78-1.75 1.75v.5c0 1.08.52 1.66 1.38 2.2.85.54 2.02.8 3.37.8 1.59 0 2.77-.26 3.57-.8.81-.56 1.18-1.15 1.18-2.2v-.5zm-8 0c0-.14.11-.25.25-.25h6c.14 0 .25.11.25.25v.5c0 .27-.03.33-.1.45l-.06.1c-.1.21-.26.38-.5.52-.5.29-1.31.43-2.59.43a5.41 5.41 0 01-2.41-.43 1.6 1.6 0 01-.62-.54 1.98 1.98 0 00-.1-.12c-.07-.1-.12-.17-.12-.41v-.5z" fill={primaryFill} /><path d="M13 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1.5 0a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M3 6.25C3 4.45 4.46 3 6.25 3h8.5C16.55 3 18 4.46 18 6.25v8.5c0 1.8-1.46 3.25-3.25 3.25h-8.5A3.25 3.25 0 013 14.75v-8.5zM6.25 4.5c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75v-8.5c0-.97-.78-1.75-1.75-1.75h-8.5z" fill={primaryFill} /><path d="M8.75 20.5c-1.15 0-2.16-.6-2.74-1.5h9.24A3.75 3.75 0 0019 15.25V6.01c.9.58 1.5 1.59 1.5 2.74v6.5c0 2.9-2.35 5.25-5.25 5.25h-6.5z" fill={primaryFill} /></svg>;
};

export default PersonBoard24Regular;