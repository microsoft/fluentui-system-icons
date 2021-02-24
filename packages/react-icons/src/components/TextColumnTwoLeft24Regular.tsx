import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnTwoLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 5.75a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h9.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M8 5.75A.75.75 0 007.25 5h-3.5a.75.75 0 000 1.5h3.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M21 9.75a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h9.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M8 9.75A.75.75 0 007.25 9h-3.5a.75.75 0 000 1.5h3.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M21 13.75a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h9.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M8 13.75a.75.75 0 00-.75-.75h-3.5a.75.75 0 000 1.5h3.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M21 17.75a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h9.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M8 17.75a.75.75 0 00-.75-.75h-3.5a.75.75 0 000 1.5h3.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
};

export default TextColumnTwoLeft24Regular;