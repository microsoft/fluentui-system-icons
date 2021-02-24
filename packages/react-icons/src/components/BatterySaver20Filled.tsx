import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BatterySaver20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.59 5l3.91.01A2.5 2.5 0 0116 7.37v.98h1.17a.83.83 0 01.82.73l.01.1v1.67a.83.83 0 01-.72.82l-.11.01H16v.83a2.5 2.5 0 01-2.35 2.5h-.15L6 15c-.18 0-.5-.12-.5-.5s.3-.5.5-.5h.04C7.32 14 10 13.01 10 9.72c0-1.02-.45-2.68-.96-3.92a.58.58 0 01.47-.8h.08zm-2.42-.71C8.38 6.53 9 8.33 9 9.56c0 1.24-.58 2.28-1.14 2.77a.93.93 0 01-.15.1l-.1.05a.35.35 0 01-.46-.18.36.36 0 01-.02-.2l.02-.08c.47-1.19.7-2.36.68-3.5a.59.59 0 00-.59-.58.59.59 0 00-.57.56v.02c0 .29 0 .58-.04.88l-.05.37-.04.19-.05.26-.08.32-.03.12c-.13.48-.31.96-.53 1.44a5.55 5.55 0 01-3.04 2.86.58.58 0 01-.77-.32.6.6 0 01.32-.77 4.69 4.69 0 001.8-1.28c-1.29-.4-2.04-1.3-2.14-2.56-.12-1.42.41-2.39 1.76-3.47l.65-.5.29-.23a6.89 6.89 0 001.46-1.56c.23-.36.78-.37.99.02z" fill={primaryFill} /></svg>;
};

export default BatterySaver20Filled;