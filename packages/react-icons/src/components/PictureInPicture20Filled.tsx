import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PictureInPicture20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 10a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm7 1a1 1 0 00-1 1v4a1 1 0 00.03.26l2.62-2.61a.5.5 0 01.72.01l3.1 3.34H15a1 1 0 001-1V9a1 1 0 00-1-1H9zm4.1 6L11 11.72l-2.25 2.25A1 1 0 009 14h4.1z" fill={primaryFill} /></svg>;
};

export default PictureInPicture20Filled;