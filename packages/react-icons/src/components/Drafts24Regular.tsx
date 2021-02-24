import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Drafts24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.88 2.83l.15.14.14.15a3.58 3.58 0 01-.14 4.91L9.06 20c-.28.28-.62.48-1 .58l-5.11 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.72.57-1L15.97 2.97a3.58 3.58 0 014.9-.14zM15 6.06L5.06 16c-.09.1-.16.2-.2.33l-1.04 3.85 3.85-1.05c.12-.03.24-.1.33-.2L17.94 9 15 6.06zM6.52 11l-1.5 1.5H2.75a.75.75 0 010-1.5h3.77zm4-4l-1.5 1.5H2.75a.75.75 0 110-1.5h7.77zm6.51-2.97l-.97.97L19 7.94l.97-.97a2.08 2.08 0 10-2.94-2.94zM14.53 3l-1.5 1.5H2.74a.75.75 0 110-1.5h11.77z" fill={primaryFill} /></svg>;
};

export default Drafts24Regular;