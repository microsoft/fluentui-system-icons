import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EditOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.94 10L2.22 3.28a.75.75 0 111.06-1.06l18.5 18.5a.75.75 0 01-1.06 1.06L14 15.06 9.06 20c-.27.28-.62.48-1 .58l-5.11 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.72.57-1L8.94 10zm4 4L10 11.06 5.06 16c-.09.1-.16.2-.2.33l-1.04 3.85 3.85-1.05c.12-.03.24-.1.33-.2L12.94 14z" fill={primaryFill} /><path d="M17.94 9l-2.88 2.88 1.06 1.06 4.91-4.9a3.58 3.58 0 10-5.06-5.07l-4.91 4.91 1.06 1.06L15 6.06 17.94 9zm-.91-4.97a2.08 2.08 0 012.94 2.94l-.97.97L16.06 5l.97-.97z" fill={primaryFill} /></svg>;
};

export default EditOff24Regular;