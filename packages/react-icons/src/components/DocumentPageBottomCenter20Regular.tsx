import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPageBottomCenter20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.07 15.44l.07-.44H7.5a.5.5 0 110-1h.78l.22-1.5H8a.5.5 0 110-1h.65l.16-1.07a.5.5 0 01.99.14l-.14.93h1.24l.16-1.07a.5.5 0 01.99.14l-.14.93h.59a.5.5 0 010 1h-.74l-.22 1.5H12a.5.5 0 010 1h-.6l-.09.59a.5.5 0 11-.99-.15l.07-.44H9.15l-.09.59a.5.5 0 11-.99-.15zm2.68-2.94H9.51L9.3 14h1.24l.22-1.5z" fill={primaryFill} /><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default DocumentPageBottomCenter20Regular;