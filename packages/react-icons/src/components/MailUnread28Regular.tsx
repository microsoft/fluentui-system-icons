import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailUnread28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 10.12l10.65 5.55c.22.1.48.1.7 0l7.58-3.95a4.5 4.5 0 003.07.02v8.01a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 19.75v-9.63zM6.25 5h13.5a4.48 4.48 0 00.7 5.8L14 14.15 3 8.43v-.18a3.25 3.25 0 013.07-3.24L6.25 5zM23.5 4a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
};

export default MailUnread28Regular;