import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InkingTool24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.82 20.04c-.12.46-.31.88-.56 1.27a1.5 1.5 0 01-2.47.08l-.08-.12-.13-.22a5.63 5.63 0 01-.55-3.05h3.94c.07.72.02 1.4-.15 2.04zM18.48 9L15 16.09c-.22.45-.62.78-1.1.91h-3.73l-.1-.03c-.38-.13-.7-.38-.92-.72l-.08-.15L5.54 9h12.94zm1.77-7c.38 0 .7.28.74.65l.01.1v3.5c0 .92-.7 1.67-1.6 1.74H4.74c-.92 0-1.67-.7-1.74-1.6V2.75c0-.38.27-.7.64-.75h16.6z" fill={primaryFill} /></svg>;
};

export default InkingTool24Filled;