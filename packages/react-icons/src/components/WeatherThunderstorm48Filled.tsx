import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherThunderstorm48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27.36 25.4c.7.57.84 1.59.34 2.33l-.1.13-2.16 2.64h4.8a1.75 1.75 0 011.44 2.76l-.1.11-7.5 9a1.75 1.75 0 01-2.78-2.11l.1-.13L26.5 34h-4.75a1.75 1.75 0 01-1.44-2.74l.08-.11 4.5-5.5a1.75 1.75 0 012.47-.25zM26 10.02c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73h-3.06a3.75 3.75 0 00-3.3-5.5h-.7l.07-.14a3.75 3.75 0 00-6.27-4l-4.5 5.51-.14.17-.1.15a3.77 3.77 0 00-.17 3.8h-3.06a7.37 7.37 0 01-.24-14.72h.4c.53-5.1 4.12-9.26 10.46-9.26zM20 4a9.43 9.43 0 017.78 4.1C27.2 8.04 26.61 8 26 8c-6.08 0-10.48 3.44-11.96 8.62l-.08.29-.12.48-.41.07c-3.22.68-5.84 3-6.91 6.07a6.55 6.55 0 014.04-11.74h.14A9.44 9.44 0 0120 4z" fill={primaryFill} /></svg>;
};

export default WeatherThunderstorm48Filled;