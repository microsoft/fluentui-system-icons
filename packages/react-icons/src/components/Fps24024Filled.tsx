import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps24024Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.15 6.18a1 1 0 001.29-.54l.03-.05c.03-.06.1-.14.19-.23.17-.15.5-.36 1.1-.36.43 0 .75.13.95.3.18.15.3.37.3.7 0 .55-.17.86-.42 1.12-.3.32-.72.56-1.32.9a6.9 6.9 0 00-1.8 1.33A3.83 3.83 0 001.53 12a1 1 0 001 1h4.5a1 1 0 000-2H3.74c.07-.12.14-.22.23-.32.3-.33.71-.6 1.3-.92l.1-.06c.5-.3 1.15-.66 1.66-1.19.6-.61.98-1.42.98-2.51 0-.91-.38-1.7-1-2.23A3.44 3.44 0 004.76 3c-1.14 0-1.94.42-2.45.89a3.11 3.11 0 00-.72.97v.01s-.22.53 0 0a1 1 0 00.55 1.3zM16 6A3 3 0 1122 6v4a3 3 0 11-6 0V6zm3-1a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1zM4.76 15a.75.75 0 00-.75.75v5.48a.75.75 0 101.5 0V19.5h1.75a.75.75 0 000-1.5H5.52v-1.5h2.24a.75.75 0 000-1.5h-3zm4.74.75c0-.41.34-.75.75-.75h1.5a2.25 2.25 0 010 4.5h-.75v1.75a.75.75 0 11-1.5 0v-5.5zm1.5 2.25h.75a.75.75 0 000-1.5h-.75V18zm6.37-3a2.12 2.12 0 000 4.25h.5a.62.62 0 010 1.25h-.63a.5.5 0 01-.5-.5.75.75 0 10-1.5 0c0 1.1.9 2 2 2h.63a2.12 2.12 0 000-4.25h-.5a.62.62 0 010-1.25H18c.28 0 .5.22.5.5a.75.75 0 101.5 0 2 2 0 00-2-2h-.62zM15.01 4a1 1 0 10-2 0l.02 3H11V4a1 1 0 10-2 0v4a1 1 0 001 1h3.02v3a1 1 0 102 0V7.4a1 1 0 000-.09L15 4z" fill={primaryFill} /></svg>;
};

export default Fps24024Filled;