import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentArrowLeft16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1v3.5c0 .83.67 1.5 1.5 1.5H14v7.5c0 .83-.67 1.5-1.5 1.5H8.66A5.5 5.5 0 004 5.2V2.5C4 1.67 4.67 1 5.5 1H9z" fill={primaryFill} /><path d="M10 1.25V4.5c0 .28.22.5.5.5h3.25L10 1.25z" fill={primaryFill} /><path d="M10 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L4.71 11H7.5a.5.5 0 000-1H4.7l1.15-1.15a.5.5 0 10-.7-.7l-2 2z" fill={primaryFill} /></svg>;
};

export default DocumentArrowLeft16Filled;