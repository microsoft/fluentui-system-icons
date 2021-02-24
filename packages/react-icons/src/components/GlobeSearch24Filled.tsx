import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeSearch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.44 9.96a4.93 4.93 0 006.23 7.57l4.26 4.25a.77.77 0 001.17-1l-.08-.1-4.21-4.2a4.93 4.93 0 00-7.37-6.52zm13.21 6.54a17.14 17.14 0 01-.95 3.45l.03.03.13.14c.22.3.34.63.37.95a10.03 10.03 0 004.73-4.57h-4.3zm-4.4 0l2.28 2.29c.2-.6.39-1.27.53-2l.06-.29h-2.87zm-2.94-5.45a3.38 3.38 0 11-4.78 4.78 3.38 3.38 0 014.78-4.78zM15.45 10h-3.7a5.94 5.94 0 01.9 5h2.7a25.37 25.37 0 00.13-4.51l-.03-.5zm1.5 0a28.17 28.17 0 01-.03 4.42l-.05.58h4.7a10 10 0 00.26-5h-4.87zm-2.09-7.6a14.56 14.56 0 011.89 5.66l.06.44h4.59a10.03 10.03 0 00-6.11-5.96l-.3-.1-.13-.03zM12.03 2c-1.28 0-2.57 2.38-3.16 5.84.46.16.91.38 1.33.66h5.09c-.54-3.81-1.9-6.5-3.26-6.5zm-2.84.4c-3.02.9-5.44 3.17-6.54 6.1h1a5.92 5.92 0 013.74-.97c.32-1.86.85-3.47 1.53-4.68l.16-.27.1-.17z" fill={primaryFill} /></svg>;
};

export default GlobeSearch24Filled;