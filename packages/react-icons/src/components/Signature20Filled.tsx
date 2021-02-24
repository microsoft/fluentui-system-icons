import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Signature20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 2.77a2.44 2.44 0 113.46 3.46L14.2 7.5l.08.09a2 2 0 010 2.82l-1.44 1.44a.5.5 0 01-.7-.7l1.44-1.44a1 1 0 000-1.42l-.09-.08-6.65 6.64a.5.5 0 01-.23.14l-4 1a.5.5 0 01-.6-.65l1.26-3.75a.5.5 0 01.12-.2l8.62-8.62z" fill={primaryFill} /><path d="M3.27 16.9c-.02 0-.04-.02-.05-.03l1.35-.34c.53.27 1.18.47 1.93.47.5 0 1.01-.18 1.53-.47.53-.3 1.03-.7 1.53-1.1l.13-.11c.44-.36.9-.74 1.34-1 .47-.27 1.04-.49 1.63-.3.82.28 1.08 1.04 1.32 1.84.05.18.15.36.26.49.11.12.2.15.26.15.19 0 .46-.1.8-.3a9.43 9.43 0 00.93-.62 5.6 5.6 0 011.1-.55h.03l.14.47-.14-.48a.5.5 0 01.28.96 2.74 2.74 0 00-.21.08 4.6 4.6 0 00-.92.54l-.7.46a2.7 2.7 0 01-1.31.44c-.44 0-.78-.23-1-.49a2.33 2.33 0 01-.48-.87c-.26-.87-.41-1.08-.68-1.17-.16-.05-.4-.02-.8.22-.37.21-.77.54-1.23.92l-.12.1c-.5.4-1.06.84-1.66 1.19-.6.34-1.29.6-2.03.6a5.49 5.49 0 01-3.23-1.1z" fill={primaryFill} /></svg>;
};

export default Signature20Filled;