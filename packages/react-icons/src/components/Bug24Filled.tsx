import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bug24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.25 2c.38 0 .7.28.74.65l.01.1v.75c0 .64-.2 1.22-.53 1.7a3.75 3.75 0 012.52 3.3h.26a2.25 2.25 0 002.24-2.26V4.75a.75.75 0 011.5 0v1.48c0 2-1.56 3.65-3.54 3.76H17v1.5l4.25.01c.38 0 .7.28.75.65v.1c0 .38-.28.7-.65.74l-.1.01H17v2H17.45a3.75 3.75 0 013.53 3.57v1.68a.75.75 0 01-1.5.1v-1.6c.01-1.18-.9-2.16-2.08-2.24l-.15-.01h-.48a5 5 0 01-9.54 0h-.49a2.25 2.25 0 00-2.24 2.26v1.48a.75.75 0 11-1.5.01v-1.48c0-2 1.56-3.65 3.54-3.76l.21-.01H7v-2H2.75a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01H7V10H6.54A3.75 3.75 0 013 6.42V4.75a.75.75 0 011.5-.1v1.59c0 1.19.92 2.17 2.09 2.25H7a3.75 3.75 0 012.52-3.28c-.3-.43-.48-.94-.52-1.5L9 3.51v-.76a.75.75 0 011.5-.1v.85a1.5 1.5 0 003 .15v-.9c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default Bug24Filled;