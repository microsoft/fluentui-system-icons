import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneUpdate24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm0 1.5h-7.5a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 00-.75-.75zM12 7.03c.38 0 .7.28.74.65l.01.1v6.71l.96-.96a.75.75 0 01.98-.07l.08.07c.27.27.3.68.07.98l-.07.08-2.24 2.24-.04.04-.06.05-.07.04-.06.03-.1.04-.06.01-.1.01h-.09l-.09-.01-.1-.02-.1-.05-.08-.05-.11-.09-2.24-2.24a.75.75 0 01.97-1.13l.09.07.96.96V7.8c0-.35.23-.64.55-.73l.1-.02h.1z" fill={primaryFill} /></svg>;
};

export default PhoneUpdate24Regular;