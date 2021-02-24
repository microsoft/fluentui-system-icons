import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCommunity28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 18c1.24 0 2.25 1 2.25 2.25v1.61c-.32 2.13-2.23 3.15-5.43 3.15-3.2 0-5.14-1.01-5.56-3.11l-.01-.15v-1.5c0-1.24 1-2.25 2.25-2.25h6.5zm0 1.5h-6.5a.75.75 0 00-.75.75v1.42c.28 1.2 1.55 1.84 4.07 1.84 2.51 0 3.73-.63 3.93-1.82v-1.44a.75.75 0 00-.75-.75zm1-7.5h5.5c1.24 0 2.25 1 2.25 2.25v1.61c-.32 2.13-2.23 3.15-5.43 3.15h-.32c-.3-.72-.83-1.3-1.52-1.65.52.1 1.13.15 1.84.15 2.51 0 3.73-.63 3.93-1.82v-1.44a.75.75 0 00-.75-.75H18.5a4.5 4.5 0 00-.26-1.5zm-14 0h5.5c-.13.39-.22.8-.24 1.24l-.01.26H4.25a.75.75 0 00-.75.75v1.42c.28 1.2 1.55 1.84 4.07 1.84.62 0 1.16-.04 1.63-.12-.65.36-1.17.93-1.45 1.62h-.18C4.37 19 2.43 18 2 15.9L2 15.75v-1.5C2 13.01 3 12 4.25 12zM14 10a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1.5a2 2 0 100 4 2 2 0 000-4zM20.5 4a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-13 0a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm13 1.5a2 2 0 100 4 2 2 0 000-4zm-13 0a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /></svg>;
};

export default PeopleCommunity28Regular;