import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailUnread28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 5h13.5c-.3.45-.52.96-.64 1.5H6.25c-.92 0-1.67.7-1.74 1.6l-.01.15v.96l9.5 4.94 6.44-3.35c.43.4.94.71 1.5.92l-7.6 3.95a.75.75 0 01-.57.04l-.12-.04L4.5 10.9v8.85c0 .92.7 1.67 1.6 1.74l.15.01h15.5c.92 0 1.67-.7 1.74-1.6l.01-.15V12a4.5 4.5 0 001.5-.26v8.01a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 19.75V8.25a3.25 3.25 0 013.07-3.24L6.25 5zM23.5 4a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
};

export default MailUnread28Filled;