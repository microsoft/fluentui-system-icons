import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextboxAlignMiddle24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 10h10c.55 0 1 .34 1 .75 0 .38-.38.7-.86.74l-.14.01H7c-.55 0-1-.34-1-.75 0-.38.38-.7.86-.74L7 10z" fill={primaryFill} /><path d="M17 13H6.86c-.48.06-.86.37-.86.75 0 .41.45.75 1 .75h10.14c.48-.06.86-.37.86-.75 0-.41-.45-.75-1-.75z" fill={primaryFill} /><path d="M21 5.75A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5A2.75 2.75 0 0021 18.25V5.75zM5.75 4.5h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /></svg>;
};

export default TextboxAlignMiddle24Regular;