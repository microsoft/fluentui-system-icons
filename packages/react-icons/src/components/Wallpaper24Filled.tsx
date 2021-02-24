import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wallpaper24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.76 13.13l.14.13 5.6 5.88v-5.4a.75.75 0 011.5-.1V19.26A2.75 2.75 0 0119.42 22h-5.67a.75.75 0 01-.1-1.5h5.38l-5.58-5.86a2 2 0 00-2.77-.12l-.12.12-5.58 5.86H10.35a.75.75 0 010 1.5H4.58a2.75 2.75 0 01-2.57-2.57L2 19.25v-5.6a.75.75 0 011.5 0v5.5l5.6-5.88a4 4 0 015.66-.14zM10.25 2a.75.75 0 01.1 1.5h-5.6c-.65 0-1.18.5-1.24 1.12l-.01.13v5.5a.75.75 0 01-1.5.1v-5.6A2.75 2.75 0 014.58 2h5.67zm9 0h.17a2.75 2.75 0 012.57 2.57l.01.18v5.6a.75.75 0 01-1.5 0V4.62a1.25 1.25 0 00-1.12-1.11l-.13-.01h-5.6a.75.75 0 010-1.5h5.6zM16 6a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /></svg>;
};

export default Wallpaper24Filled;