import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkDismiss20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4a.5.5 0 01.09 1H6a3 3 0 00-.2 6H8a.5.5 0 01.09 1H6a4 4 0 01-.22-8H8z" fill={primaryFill} /><path d="M14 4a4 4 0 013.52 5.9 5.49 5.49 0 00-.88-.47 3 3 0 00-2.44-4.42L14 5h-2a.5.5 0 01-.09-1H14z" fill={primaryFill} /><path d="M6 7.5h8a.5.5 0 01.09 1H6a.5.5 0 01-.09-1H6z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.73-1.06a.5.5 0 00-.7-.7l-1.07 1.05-1.06-1.06a.5.5 0 00-.7.7l1.05 1.07-1.06 1.06a.5.5 0 00.7.7l1.07-1.05 1.06 1.06a.5.5 0 00.7-.7l-1.05-1.07 1.06-1.06z" fill={primaryFill} /></svg>;
};

export default LinkDismiss20Regular;