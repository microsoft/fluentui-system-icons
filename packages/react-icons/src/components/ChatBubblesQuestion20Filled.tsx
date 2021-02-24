import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChatBubblesQuestion20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 1a6.5 6.5 0 00-5.67 9.67l-.8 2.08a1 1 0 001.2 1.32l2.5-.7A6.5 6.5 0 108.5 1zm0 3.9c-.37.07-.76.3-1.07.85a.5.5 0 11-.86-.5A2.57 2.57 0 018.3 3.92c.65-.13 1.3.04 1.8.36.48.32.87.84.88 1.47.01.66-.39 1.25-1.12 1.68-.5.3-.7.5-.77.63-.07.11-.09.21-.09.44a.5.5 0 01-1 0c0-.27.01-.61.24-.97.2-.34.57-.64 1.11-.96.54-.32.63-.62.63-.8 0-.2-.14-.46-.44-.65-.29-.2-.67-.3-1.05-.22zm.25 6.6a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /><path d="M6.54 14.74a6.49 6.49 0 007.7 1.64l2.49.7a1 1 0 001.2-1.33l-.8-2.08a6.47 6.47 0 00-1.37-8.04c.15.56.23 1.15.24 1.76a5.47 5.47 0 01.16 5.98l-.13.2.97 2.54-2.86-.8-.18.09A5.47 5.47 0 018.3 15a7.5 7.5 0 01-1.76-.26z" fill={primaryFill} /></svg>;
};

export default ChatBubblesQuestion20Filled;