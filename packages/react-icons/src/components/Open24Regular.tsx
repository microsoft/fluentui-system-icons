import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 4.5h3.5a.75.75 0 01.1 1.5h-3.6c-1.18 0-2.15.9-2.24 2.06L5 8.22v8.53c0 1.2.93 2.17 2.1 2.24l.15.01 8.5-.01c1.2 0 2.16-.93 2.24-2.1v-3.65a.75.75 0 011.5-.11v3.6c0 2.01-1.56 3.65-3.54 3.75h-.2l-8.5.02h-.2a3.75 3.75 0 01-3.54-3.55V8.05a3.75 3.75 0 013.54-3.54l.2-.01h3.5-3.5zm6.5-1.5h6.55l.1.02.1.02.06.03.15.09.07.06.08.1.06.09.04.1.02.05.01.07v.1l.01 6.53a.75.75 0 01-1.5.1v-4.8l-7.22 7.22a.75.75 0 01-.98.08l-.08-.08a.75.75 0 01-.07-.97l.07-.09 7.22-7.22h-4.7a.75.75 0 01-.73-.65l-.01-.1c0-.38.28-.7.65-.74h.1z" fill={primaryFill} /></svg>;
};

export default Open24Regular;