import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoPerson24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 20.99 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5zm0 1.5H4.25a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75H7v-2.75c0-.92.7-1.67 1.6-1.74l.15-.01h6.5c.91 0 1.67.7 1.74 1.6v2.9h2.76c.41 0 .75-.33.75-.75V6.25a.75.75 0 00-.75-.75zm-4.5 10h-6.5a.25.25 0 00-.24.2l-.01.05v2.75h7v-2.75a.25.25 0 00-.2-.24l-.06-.01zM12 7a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default VideoPerson24Regular;