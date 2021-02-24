import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardLayoutResize24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 10.5c.38 0 .7.28.74.65l.01.1v8.5c0 1.2-.93 2.17-2.1 2.24l-.15.01h-2a.75.75 0 01-.1-1.5h2.1c.38 0 .7-.28.74-.65l.01-.1v-8.5c0-.41.34-.75.75-.75zm0-8.5h.07l.1.02.07.02.06.02.07.04.08.05.08.07.05.06.05.06.05.09.01.04.03.06.02.12.01.1v5a.75.75 0 01-1.5.1V4.56l-4.47 4.47a.75.75 0 01-1.13-.98l.07-.08 4.47-4.47h-3.19a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h5zm-8 8.5c1.2 0 2.17.93 2.24 2.1l.01.15v7c0 1.2-.93 2.17-2.1 2.24l-.15.01h-9c-1.2 0-2.17-.93-2.24-2.1L2 19.75v-7c0-1.2.93-2.17 2.1-2.24l.15-.01h9zm-2.5 7h-4a.78.78 0 00-.75.75c0 .38.28.7.65.74l.1.01h4c.41 0 .75-.37.75-.75s-.28-.7-.65-.74l-.1-.01zM6 13.5a1 1 0 100 2 1 1 0 000-2zm5.5 0a1 1 0 100 2 1 1 0 000-2zm-2.75 0a1 1 0 100 2 1 1 0 000-2zm4-11.5a.75.75 0 01.1 1.5h-8.6c-.38 0-.7.28-.74.65l-.01.1v4a.75.75 0 01-1.5.1v-4.1c0-1.2.93-2.17 2.1-2.24L4.25 2h8.5z" fill={primaryFill} /></svg>;
};

export default KeyboardLayoutResize24Filled;