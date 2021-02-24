import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabInPrivate28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v15.5C3 23.55 4.46 25 6.25 25h15.5A3.25 3.25 0 0025 21.75V6.25C25 4.45 23.54 3 21.75 3H6.25zm17.25 7.65L12.72 23.5H9.55L23.5 6.87v3.78zM14.68 23.5l8.82-10.52v3.78l-5.65 6.74h-3.17zm8.82-4.4v2.65c0 .97-.78 1.75-1.75 1.75H19.8l3.7-4.4zM7.59 23.5H6.25c-.53 0-1-.23-1.32-.6L20.36 4.5h1.39c.51 0 .98.22 1.3.58L7.59 23.5zM4.5 21.07v-3.78L15.23 4.5h3.17L4.5 21.07zm0-6.12v-3.78l5.6-6.67h3.17L4.5 14.95zm0-6.1v-2.6c0-.97.78-1.75 1.75-1.75h1.9L4.5 8.84z" fill={primaryFill} /></svg>;
};

export default TabInPrivate28Regular;