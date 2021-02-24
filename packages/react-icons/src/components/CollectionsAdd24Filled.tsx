import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CollectionsAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.78 2.45c.82.44 1.47 1.2 1.78 2.14l.52 1.91h-6.04a3.75 3.75 0 00-3.54 3.75v7.71c.02.25.06.5.12.73a3.74 3.74 0 01-3.5-2.6l-2-7.43A3.74 3.74 0 014.6 4.13l7.43-2a3.74 3.74 0 012.76.32z" fill={primaryFill} /><path d="M11.26 7.5h-.17a2.75 2.75 0 00-2.59 2.75v7.66a2.75 2.75 0 002.75 2.59h.48a6.5 6.5 0 019.77-8.12v-2.29a2.75 2.75 0 00-2.75-2.59h-7.5z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM17.41 14h.18c.2.04.36.2.4.4l.01.1V17h2.6c.2.05.36.2.4.41v.18a.5.5 0 01-.4.4l-.1.01H18v2.6a.5.5 0 01-.4.4h-.19a.5.5 0 01-.4-.4V18H14.4a.5.5 0 01-.4-.41v-.18a.5.5 0 01.4-.4l.1-.01H17v-2.6a.5.5 0 01.41-.4z" fill={primaryFill} /></svg>;
};

export default CollectionsAdd24Filled;