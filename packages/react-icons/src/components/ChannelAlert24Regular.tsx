import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelAlert24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-13-2.63v8.38c0 .92.7 1.67 1.6 1.74l.15.01h5.06c.18.53.42 1.04.71 1.5H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V9.37a2.25 2.25 0 001.5 0zM18.5 20h-2v.12a1 1 0 002-.12zm-1-6h-.16c-.94.1-1.67.77-1.81 1.64l-.02.16v1.5l-.86.85a.5.5 0 00.26.84L15 19h5a.5.5 0 00.41-.79l-.06-.06-.85-.85v-1.5a1.98 1.98 0 00-2-1.8zm-4.7-1c-.42.45-.78.95-1.07 1.5H8.75a.75.75 0 01-.1-1.49H12.8zm4.95-10A3.25 3.25 0 0121 6.07V12.02c-.46-.3-.97-.53-1.5-.7V6.24c0-.92-.7-1.67-1.6-1.74l-.15-.01H6.25c-.6 0-1.13.3-1.44.76a2.23 2.23 0 00-1.59-.2 3.25 3.25 0 012.85-2.05L6.25 3h11.5zm-2.5 6.5a.75.75 0 01.1 1.49h-6.6a.75.75 0 01-.1-1.49h6.6zM3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
};

export default ChannelAlert24Regular;