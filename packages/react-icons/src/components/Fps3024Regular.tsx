import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps3024Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.13 4.5h-.25c-.45 0-.85.22-1.1.55-.18.24-.44.45-.74.45-.54 0-.96-.49-.7-.97A2.87 2.87 0 017.87 3h.25a2.88 2.88 0 011.93 5 2.87 2.87 0 01-1.93 5h-.25c-1.1 0-2.07-.62-2.55-1.53-.25-.48.17-.97.71-.97.3 0 .56.21.74.45.25.34.65.55 1.1.55h.25a1.37 1.37 0 100-2.75H8a.75.75 0 010-1.5h.13a1.38 1.38 0 000-2.75z" fill={primaryFill} /><path d="M14 17.25c0-1.24-1-2.25-2.25-2.25h-1.6a.75.75 0 00-.65.75v5.6c.06.37.37.65.75.65h.1a.75.75 0 00.65-.75V19.5h.9a2.25 2.25 0 002.1-2.25zm-3-.75h.85a.75.75 0 01-.1 1.5H11v-1.5z" fill={primaryFill} /><path d="M20 17a2 2 0 00-2-2h-.78a2.13 2.13 0 00.16 4.25h.59a.63.63 0 01-.1 1.25h-.71a.5.5 0 01-.41-.5v-.1a.75.75 0 00-1.5.1c0 1.1.9 2 2 2h.78a2.13 2.13 0 00-.16-4.25h-.59a.63.63 0 01.1-1.25h.71a.5.5 0 01.41.5v.1A.75.75 0 0020 17z" fill={primaryFill} /><path d="M8.5 15.75a.75.75 0 00-.75-.75h-3.1a.75.75 0 00-.65.75v5.58c.06.37.37.65.75.65h.1a.75.75 0 00.65-.75V19.5h1.85a.75.75 0 00-.1-1.5H5.5v-1.5h2.35a.75.75 0 00.65-.75z" fill={primaryFill} /><path d="M18 5.82A3 3 0 0015 3h-.18A3 3 0 0012 6v4.18A3 3 0 0014.83 13L15 13h.17A3 3 0 0018 10V5.83zM15 4.5c.83 0 1.5.67 1.5 1.5v4.15a1.5 1.5 0 01-1.35 1.34l-.16.01h-.14A1.5 1.5 0 0113.5 10V5.86A1.5 1.5 0 0115 4.5z" fill={primaryFill} /></svg>;
};

export default Fps3024Regular;