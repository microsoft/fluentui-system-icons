import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorBackgroundAccent24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.86 8.54c0-.77-.3-1.53-.88-2.12l-.92-.92h7.44a1 1 0 011 1v11a1 1 0 01-1 1h-15a1 1 0 01-1-1v-3.59l1 1a3 3 0 004.23 0l1.28-1.28A3.53 3.53 0 0013.5 17c2.1 0 3.5-1.77 3.5-3.63 0-.69-.21-1.32-.43-1.8-.23-.49-.51-.93-.77-1.3a11.4 11.4 0 00-.72-.88v-.01l-.33-.35-.01-.02c-.25-.25-.56-.4-.88-.47z" fill={primaryFill} /></svg>;
};

export default ColorBackgroundAccent24Regular;