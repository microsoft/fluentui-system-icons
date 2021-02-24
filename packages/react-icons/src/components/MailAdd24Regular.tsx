import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zm.25-12a3.25 3.25 0 013.24 3.07l.01.18v6.77c-.46-.3-.97-.53-1.5-.7V7.36l-8.15 4.3c-.19.1-.4.1-.6.04l-.1-.05L2.5 7.37v7.38c0 .92.7 1.67 1.6 1.74l.15.01h6.83a6.55 6.55 0 00-.06 1.5H4.25a3.25 3.25 0 01-3.24-3.07L1 14.75v-9.5a3.25 3.25 0 013.07-3.24L4.25 2h13.5zm0 1.5H4.25c-.92 0-1.67.7-1.74 1.6l-.01.15v.43l8.5 4.47 8.5-4.47v-.43c0-.92-.7-1.67-1.6-1.74l-.15-.01z" fill={primaryFill} /></svg>;
};

export default MailAdd24Regular;