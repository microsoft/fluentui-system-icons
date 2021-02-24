import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextFontSize24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.97 16.17l4.59-12.51a1 1 0 011.83-.12l.05.12 5.5 15a1 1 0 01-1.83.79l-.05-.1-1.4-3.85h-6.31l-1.45 3.92-.04.08-.07.1-.08.1-.08.07-.08.06-.05.03-.09.05-.1.04-.1.03-.14.01h-.18l-.1-.01-.15-.05-.07-.03-.1-.05-.11-.08-.1-.09-.06-.08-.06-.09-.05-.1-.75-1.91H4.65l-.72 1.86a1 1 0 01-1.18.6l-.11-.03a1 1 0 01-.6-1.18l.03-.12 3.5-9a1 1 0 011.8-.1l.06.1 2.54 6.54 4.59-12.51-4.59 12.5zM6.5 12.76L5.43 15.5h2.13L6.5 12.76zm9-5.86l-2.42 6.6h4.84L15.5 6.9z" fill={primaryFill} /></svg>;
};

export default TextFontSize24Filled;