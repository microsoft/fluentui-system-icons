import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPageTopRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 5.5L12.53 7H11.3l.22-1.5h1.24z" fill={primaryFill} /><path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9zm4.57 6.44l.07-.44H9.5a.5.5 0 110-1h.78l.22-1.5H10a.5.5 0 110-1h.65l.16-1.07a.5.5 0 01.99.14l-.14.93h1.24l.16-1.07a.5.5 0 01.99.14l-.14.93h.59a.5.5 0 010 1h-.74L13.54 7H14a.5.5 0 010 1h-.6l-.09.59a.5.5 0 01-.99-.15L12.4 8h-1.24l-.09.59a.5.5 0 01-.99-.15z" fill={primaryFill} /></svg>;
};

export default DocumentPageTopRight20Filled;