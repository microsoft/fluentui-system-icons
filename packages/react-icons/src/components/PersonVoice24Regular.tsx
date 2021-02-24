import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonVoice24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 15C16 15 17 16 17 17.25v.57c0 .9-.32 1.76-.9 2.44C14.53 22.1 12.15 23 9 23c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.43v-.58C1 16 2.01 15 3.25 15h11.5zm0 1.5H3.25a.75.75 0 00-.75.75v.58c0 .53.2 1.05.54 1.46C4.3 20.76 6.26 21.5 9 21.5c2.74 0 4.7-.74 5.96-2.21.35-.41.54-.93.54-1.47v-.57a.75.75 0 00-.75-.75zm4.3-15.1a.75.75 0 011.03.28 12.7 12.7 0 01-.01 12.66.75.75 0 11-1.3-.75 11.2 11.2 0 000-11.16.75.75 0 01.28-1.03zM9 3a5 5 0 110 10A5 5 0 019 3zm6.59.4a.75.75 0 011.02.28 8.71 8.71 0 010 8.65.75.75 0 11-1.3-.74 7.21 7.21 0 000-7.17.75.75 0 01.28-1.02zM9 4.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /></svg>;
};

export default PersonVoice24Regular;