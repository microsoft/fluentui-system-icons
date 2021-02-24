import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextSortDescending16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a.5.5 0 100 1h2.54L2.59 6.21A.5.5 0 003 7h3.5a.5.5 0 100-1H3.96l2.95-4.21A.5.5 0 006.5 1H3zm2 7c.2 0 .38.12.46.3l2.5 6a.5.5 0 11-.92.4l-.7-1.7H3.66l-.7 1.7a.5.5 0 01-.93-.4l2.5-6A.5.5 0 015 8zm0 1.8L4.08 12h1.84L5 9.8zm3.15 1.35c.2-.2.5-.2.7 0L11 13.29V1.5a.5.5 0 011 0v11.8l2.15-2.15a.5.5 0 01.7.7l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
};

export default TextSortDescending16Regular;