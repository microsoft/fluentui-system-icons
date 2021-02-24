import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Options24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 13.5a3.25 3.25 0 013.16 2.5h9.34a.75.75 0 01.1 1.5h-9.44a3.25 3.25 0 01-6.32 0H2.75a.75.75 0 01-.1-1.5h2.94a3.25 3.25 0 013.16-2.5zm0 1.5c-.76 0-1.41.49-1.65 1.17l-.02.07-.04.14a1.76 1.76 0 00.02.82l.04.13.02.07a1.75 1.75 0 003.28-.07l.04-.13-.01.06a1.75 1.75 0 00.04-.82l-.03-.13-.02-.07-.04-.14A1.75 1.75 0 008.75 15zm6.5-11a3.25 3.25 0 013.16 2.5h2.84a.75.75 0 01.1 1.5h-2.94a3.25 3.25 0 01-6.32 0H2.75a.75.75 0 01-.1-1.5h9.44A3.25 3.25 0 0115.25 4zm0 1.5c-.76 0-1.41.49-1.65 1.17l-.02.07-.04.14a1.76 1.76 0 00.02.82l.04.13.02.07a1.75 1.75 0 003.28-.07l.04-.13-.01.06a1.75 1.75 0 00.04-.82l-.03-.13-.02-.07-.04-.14a1.75 1.75 0 00-1.63-1.1z" fill={primaryFill} /></svg>;
};

export default Options24Regular;