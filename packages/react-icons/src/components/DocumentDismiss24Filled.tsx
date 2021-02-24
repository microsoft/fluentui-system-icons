import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-6.81A6.5 6.5 0 004 11.5V4c0-1.1.9-2 2-2h6z" fill={primaryFill} /><path d="M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6z" fill={primaryFill} /><path d="M6.5 12a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm2.48 3.73L7.2 17.5l1.77 1.77a.5.5 0 11-.7.7L6.5 18.22l-1.77 1.76a.5.5 0 11-.7-.7l1.76-1.77-1.76-1.77a.5.5 0 11.7-.7l1.77 1.76 1.77-1.77a.5.5 0 01.7.71z" fill={primaryFill} /></svg>;
};

export default DocumentDismiss24Filled;