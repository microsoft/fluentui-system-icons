import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SendCopy24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 11.5c.38 0 .7.28.74.65l.01.1v5A4.75 4.75 0 0115.97 22H8.25c-.98 0-1.81-.63-2.12-1.5H15.93A3.25 3.25 0 0019 17.42l.01-.18v-5c0-.41.34-.75.75-.75zm-2.5-2c.38 0 .7.28.74.65l.01.1v7c0 1.2-.93 2.17-2.1 2.24l-.15.01h-10c-1.2 0-2.17-.93-2.24-2.1l-.01-.15v-7a.75.75 0 011.5-.1v7.1c0 .38.28.7.65.74l.1.01h10c.38 0 .7-.28.74-.65l.01-.1v-7c0-.41.34-.75.75-.75zM6.22 6.22l4-4a.75.75 0 01.97-.07l.09.07 4 4a.75.75 0 01-.98 1.13l-.08-.07-2.72-2.72v9.7c0 .37-.28.69-.65.74h-.1a.75.75 0 01-.74-.64l-.01-.1v-9.7L7.28 7.28a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08 4-4-4 4z" fill={primaryFill} /></svg>;
};

export default SendCopy24Regular;