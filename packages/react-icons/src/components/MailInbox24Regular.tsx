import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailInbox24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3h11.5a3.25 3.25 0 013.24 3.07l.01.18v11.5a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V6.25a3.25 3.25 0 013.07-3.24L6.25 3h11.5-11.5zM4.5 14.5v3.25c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15V14.5h-3.82a3.75 3.75 0 01-3.48 3H12a3.75 3.75 0 01-3.63-2.81l-.04-.19H4.5v3.25-3.25zm13.25-10H6.25c-.92 0-1.67.7-1.74 1.6l-.01.15V13H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5.15v-.15c0-.38.28-.7.65-.74L15 13h4.5V6.25c0-.92-.7-1.67-1.6-1.74l-.15-.01z" fill={primaryFill} /></svg>;
};

export default MailInbox24Regular;