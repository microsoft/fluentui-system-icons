import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PreviewLink24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.02 7v2h11.96V7H6.02z" fill={primaryFill} /><path d="M14.98 13.48v3h3v-3h-3z" fill={primaryFill} /><path d="M2 5.75A2.75 2.75 0 014.75 3h14.5A2.75 2.75 0 0122 5.75v12.5A2.75 2.75 0 0119.25 21H4.75A2.75 2.75 0 012 18.25V5.75zm2.52.5v3.5c0 .41.34.75.75.75h13.46c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75H5.27a.75.75 0 00-.75.75zm8.96 6.48v4.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75zm-8.2-.23a.75.75 0 000 1.5h5.97a.75.75 0 000-1.5H5.27zm-.76 4.25c0 .41.34.75.75.75h5.98a.75.75 0 000-1.5H5.27a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
};

export default PreviewLink24Filled;