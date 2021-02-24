import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PictureInPicture16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M5 6.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-4zm1 3.3l1.65-1.65c.2-.2.5-.2.7 0L10.21 10H12V7H6v2.8zm1.2.2h1.6L8 9.2l-.8.8z" fill={primaryFill} /><path d="M3.5 3A2.5 2.5 0 001 5.5v5A2.5 2.5 0 003.5 13h9a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0012.5 3h-9zM2 5.5C2 4.67 2.67 4 3.5 4h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 012 10.5v-5z" fill={primaryFill} /></svg>;
};

export default PictureInPicture16Regular;