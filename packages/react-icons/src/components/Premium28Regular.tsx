import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Premium28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 3c.24 0 .47.12.6.31l.06.09 4.01 7.51.04.1.01.04.02.08.01.09v.1-.07c0 .1-.02.2-.06.3l-.03.06-.04.06-.05.07L14.6 24.7a.73.73 0 01-.38.27l-.06.01-.1.02h-.16l-.08-.02-.1-.04h-.03a.7.7 0 01-.25-.19L2.17 11.73l-.06-.1-.05-.08-.03-.1-.03-.13v-.13l.02-.1v-.04l.04-.1.03-.05 4-7.5a.75.75 0 01.56-.4h14.6zm-3.34 9h-7.82L14 22.16 17.9 12zm-9.42 0h-4.1l7.37 8.52L8.5 12zm15.12 0h-4.1l-3.27 8.51L23.61 12zM10.03 4.5H7.2l-3.2 6h4.42l1.6-6zm6.4 0h-4.85l-1.6 6h8.04l-1.6-6zm4.37 0h-2.82l1.6 6H24l-3.2-6z" fill={primaryFill} /></svg>;
};

export default Premium28Regular;