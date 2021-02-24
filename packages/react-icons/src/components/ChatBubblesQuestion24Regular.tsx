import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChatBubblesQuestion24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.14 6.3a2.83 2.83 0 013 .28c.5.42.86 1.07.86 1.92 0 .97-.69 1.5-1.08 1.8l-.08.07c-.43.33-.59.51-.59.88a.75.75 0 01-1.5 0c0-1.13.71-1.7 1.16-2.06.51-.4.59-.5.59-.69 0-.4-.15-.62-.32-.76-.2-.16-.46-.24-.68-.24-.3 0-.5.05-.65.13-.14.08-.3.21-.44.48a.75.75 0 11-1.32-.71c.26-.49.61-.86 1.05-1.1z" fill={primaryFill} /><path d="M9.5 15a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M9.5 3a7.5 7.5 0 00-6.8 10.67l-.72 2.84c-.23.92.59 1.75 1.5 1.53l2.93-.7A7.5 7.5 0 109.5 3zm-6 7.5a6 6 0 113.33 5.37l-.24-.12-.27.07-2.79.66.7-2.7.06-.28-.13-.25a5.97 5.97 0 01-.66-2.75z" fill={primaryFill} /><path d="M14.5 21a7.47 7.47 0 01-5.1-2 8.28 8.28 0 002.18-.26 5.97 5.97 0 005.59.13l.24-.12.27.07c.92.22 1.96.44 2.74.6a142 142 0 00-.64-2.64l-.07-.28.13-.25a5.97 5.97 0 00-2.09-7.8 8.44 8.44 0 00-.8-2.04 7.5 7.5 0 014.35 10.26l.67 2.8c.2.9-.58 1.7-1.47 1.5-.73-.15-1.87-.39-2.91-.63-.94.42-1.99.66-3.09.66z" fill={primaryFill} /></svg>;
};

export default ChatBubblesQuestion24Regular;