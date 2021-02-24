import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PictureInPicture20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 10.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M8 9a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V9zm1 0v3.3l1.65-1.65c.2-.2.5-.2.7 0L13.71 13H15V9H9zm.7 4h2.6L11 11.7 9.7 13z" fill={primaryFill} /><path d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zM3 7c0-1.1.9-2 2-2h10a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" fill={primaryFill} /></svg>;
};

export default PictureInPicture20Regular;