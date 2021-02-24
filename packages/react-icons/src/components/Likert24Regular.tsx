import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Likert24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 8.25a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13.5 8.25a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M16.5 8.25a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M19.5 8.25a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M9.75 16.75a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M12.5 16.75a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M15.5 16.75a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M18.5 16.75a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3H5zm14 1.5c.83 0 1.5.67 1.5 1.5v4.25h-13V5.5H19zm1.5 7.25V17c0 .83-.67 1.5-1.5 1.5H7.5v-5.75h13zM6 11.25H3.5V7c0-.83.67-1.5 1.5-1.5h1v5.75zm-2.5 1.5H6v5.75H5A1.5 1.5 0 013.5 17v-4.25z" fill={primaryFill} /></svg>;
};

export default Likert24Regular;