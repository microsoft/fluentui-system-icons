import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Screenshot24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 3A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V6.75A3.75 3.75 0 016.75 3h10.5zm0 1.5H6.75c-1.24 0-2.25 1-2.25 2.25v10.5c0 1.24 1 2.25 2.25 2.25h10.5c1.24 0 2.25-1 2.25-2.25V6.75c0-1.24-1-2.25-2.25-2.25zm0 8.5c.41 0 .75.34.75.75V16a2 2 0 01-2 2h-2.25a.75.75 0 010-1.5H16a.5.5 0 00.5-.5v-2.25c0-.41.34-.75.75-.75zm-10.5 0c.41 0 .75.34.75.75V16c0 .28.22.5.5.5h2.25a.75.75 0 010 1.5H8a2 2 0 01-2-2v-2.25c0-.41.34-.75.75-.75zM8 6h2.25a.75.75 0 01.1 1.5H8a.5.5 0 00-.5.41v2.34a.75.75 0 01-1.5.1V8a2 2 0 011.85-2h2.4H8zm8 0a2 2 0 012 2v2.25a.75.75 0 01-1.5 0V8a.5.5 0 00-.5-.5h-2.25a.75.75 0 010-1.5H16z" fill={primaryFill} /></svg>;
};

export default Screenshot24Regular;