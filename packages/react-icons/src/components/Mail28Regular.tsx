import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Mail28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 5h15.5a3.25 3.25 0 013.24 3.07l.01.18v11.5a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 19.75V8.25a3.25 3.25 0 013.07-3.24L6.25 5h15.5-15.5zm17.25 5.9l-9.15 4.77a.75.75 0 01-.58.04l-.12-.04L4.5 10.9v8.85c0 .92.7 1.67 1.6 1.74l.15.01h15.5c.92 0 1.67-.7 1.74-1.6l.01-.15V10.9zm-1.75-4.4H6.25c-.92 0-1.67.7-1.74 1.6l-.01.15v.96l9.5 4.94 9.5-4.94v-.96c0-.92-.7-1.67-1.6-1.74l-.15-.01z" fill={primaryFill} /></svg>;
};

export default Mail28Regular;