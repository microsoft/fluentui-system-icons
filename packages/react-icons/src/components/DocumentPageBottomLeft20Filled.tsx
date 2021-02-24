import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPageBottomLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 14.5l.22-1.5H8.7l-.22 1.5H7.25z" fill={primaryFill} /><path d="M14.5 18c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9zm-4.57-6.44l-.07.44h.64a.5.5 0 010 1h-.78l-.22 1.5h.5a.5.5 0 010 1h-.65l-.16 1.07a.5.5 0 01-.99-.14l.14-.93H7.1l-.16 1.07a.5.5 0 01-.99-.14l.14-.93H5.5a.5.5 0 010-1h.74l.22-1.5H6a.5.5 0 010-1h.6l.09-.59a.5.5 0 01.99.15L7.6 12h1.24l.09-.59a.5.5 0 01.99.15z" fill={primaryFill} /></svg>;
};

export default DocumentPageBottomLeft20Filled;