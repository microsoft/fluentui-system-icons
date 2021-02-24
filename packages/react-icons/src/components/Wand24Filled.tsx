import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wand24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.4 9.46l-8.7 8.72a2.27 2.27 0 003.2 3.2l8.71-8.7-3.2-3.22zm5.45 5.55l-.1-.01c-.38 0-.7.28-.74.65l-.01.1v.75h-.75c-.38 0-.7.28-.74.65l-.01.1c0 .38.28.7.65.74l.1.01H16v.75c0 .38.28.7.65.74l.1.01c.38 0 .7-.28.74-.65l.01-.1V18h.75c.38 0 .7-.28.74-.65l.01-.1c0-.38-.28-.7-.65-.74l-.1-.01h-.75v-.75c0-.38-.28-.7-.65-.74l-.1-.01h.1zm-3.54-7.44l-.13.12-.71.71 3.2 3.21.72-.71c.88-.88.88-2.3 0-3.18l-.16-.15a2.25 2.25 0 00-2.92 0zM6.85 5L6.75 5c-.38 0-.7.28-.74.65l-.01.1v.75h-.75c-.38 0-.7.28-.74.65l-.01.1c0 .38.28.7.65.74l.1.01H6v.75c0 .38.28.7.65.74l.1.01c.38 0 .7-.28.74-.65l.01-.1V8h.75c.38 0 .7-.28.74-.65l.01-.1c0-.38-.28-.7-.65-.74l-.1-.01H7.5v-.75c0-.38-.28-.7-.65-.74L6.75 5h.1zm12-2l-.1-.01c-.38 0-.7.28-.74.65l-.01.1v.75h-.75c-.38 0-.7.28-.74.65l-.01.1c0 .38.28.7.65.74l.1.01H18v.75c0 .38.28.7.65.74l.1.01c.38 0 .7-.28.74-.65l.01-.1V6h.75c.38 0 .7-.28.74-.65l.01-.1c0-.38-.28-.7-.65-.74l-.1-.01h-.75v-.75c0-.38-.28-.7-.65-.74l-.1-.01h.1z" fill={primaryFill} /></svg>;
};

export default Wand24Filled;