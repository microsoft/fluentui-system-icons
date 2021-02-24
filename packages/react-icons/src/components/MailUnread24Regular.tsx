import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailUnread24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 6.5H5.25c-.92 0-1.67.7-1.74 1.6v.1L11 12.16l6.03-3.17a3.49 3.49 0 002.97.98v6.79a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 16.75v-8.5a3.25 3.25 0 013.07-3.24L5.25 5h11.09c-.22.45-.34.96-.34 1.5zm2.5 3.4l-7.15 3.76c-.19.1-.4.12-.6.05l-.1-.05L3.5 9.9v6.85c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15V9.9zm1-5.9a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
};

export default MailUnread24Regular;