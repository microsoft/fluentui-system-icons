import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextSuperscript24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.74 3.75c-.4 0-.74.36-.74.77a1 1 0 11-2 0 2.78 2.78 0 015.1-1.54c.54.84.54 1.92-.06 2.94-.3.52-.72.9-1.1 1.2-.2.16-.39.3-.57.42l-.08.06-.42.3c-.16.13-.3.24-.41.35h2a1 1 0 010 2H17a1 1 0 01-1-1c0-1.52.9-2.37 1.66-2.94l.48-.35.08-.05.48-.35c.3-.24.5-.44.62-.66.27-.46.18-.71.1-.83a.81.81 0 00-.68-.32z" fill={primaryFill} /><path d="M11.32 12l4.4-5.13c.13-.2.27-.38.42-.54A2 2 0 0115 4.63l-5 5.83-5.24-6.11a1 1 0 10-1.52 1.3L8.68 12l-5.44 6.35a1 1 0 001.52 1.3L10 13.54l5.24 6.11a1 1 0 001.52-1.3L11.32 12z" fill={primaryFill} /></svg>;
};

export default TextSuperscript24Filled;