import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextClearFormatting20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2c.2 0 .4.13.47.32l3.5 8.95a.5.5 0 01-.94.37L8.01 9H4l-1.04 2.68a.5.5 0 11-.94-.36l3.5-9A.5.5 0 016 2zm0 1.88L4.4 8H7.6l-1.6-4.12z" fill={primaryFill} /><path d="M11.5 2c.28 0 .5.22.5.5v3.52a2.48 2.48 0 012.26-1.3c.89 0 1.6.34 2.15 1 .55.66.82 1.54.82 2.64l-.01.42-.05-.05a2.49 2.49 0 00-1.15-.65 2.86 2.86 0 00-.53-1.62c-.36-.47-.86-.7-1.48-.7-.6 0-1.09.24-1.47.72-.3.37-.47.83-.54 1.37v1.03c.05.43.18.8.37 1.12L11 11.37V2.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M9.44 16.47a1.5 1.5 0 010-2.13l4.9-4.9a1.5 1.5 0 012.13 0l2.1 2.1a1.5 1.5 0 01-.01 2.12L14.22 18h2.53a.5.5 0 110 1h-4.1a1.5 1.5 0 01-1.12-.44l-2.1-2.1zm5.61-6.32l-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 000-.7l-2.1-2.1a.5.5 0 00-.7 0zm-1.5 7.1l-2.8-2.8-.6.6a.5.5 0 000 .7l2.1 2.1c.19.2.5.2.7 0l.6-.6z" fill={primaryFill} /></svg>;
};

export default TextClearFormatting20Regular;