import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideSize24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.78 7.22c.14.14.22.33.22.53v2.5a.75.75 0 01-1.5 0v-.69l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72h-.7a.75.75 0 010-1.5h2.51c.2 0 .39.08.53.22z" fill={primaryFill} /><path d="M7 16.25a.75.75 0 00.75.75h2.5a.75.75 0 000-1.5h-.69l1.72-1.72a.75.75 0 00-1.06-1.06L8.5 14.44v-.69a.75.75 0 00-1.5 0v2.5z" fill={primaryFill} /><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zM4.75 5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H4.75z" fill={primaryFill} /></svg>;
};

export default SlideSize24Regular;