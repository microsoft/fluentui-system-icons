import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Edit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.03 2.97a3.58 3.58 0 010 5.06L9.06 20c-.27.28-.62.48-1 .58l-5.11 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.72.57-1L15.97 2.97a3.58 3.58 0 015.06 0zM15 6.07L5.06 16c-.09.1-.16.2-.2.33l-1.04 3.85 3.85-1.05c.12-.03.24-.1.33-.2L17.94 9 15 6.06zm2.03-2.04l-.97.97L19 7.94l.97-.97a2.08 2.08 0 00-2.94-2.94z" fill={primaryFill} /></svg>;
};

export default Edit24Regular;