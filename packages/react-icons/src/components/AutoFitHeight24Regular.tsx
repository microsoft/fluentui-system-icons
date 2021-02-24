import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AutoFitHeight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H5.75z" fill={primaryFill} /><path d="M9.22 14.22a.75.75 0 01.98-.07l.08.07 1.22 1.22V8.56l-1.22 1.22-.08.07A.75.75 0 019.15 8.8l.07-.08 2.37-2.37c.12-.2.37-.35.66-.35.25 0 .48.1.61.28l.05.07 2.37 2.37.07.08c.2.27.2.62.01.89l-.08.1-.08.06c-.26.2-.62.2-.88.01l-.1-.08L13 8.56V15.44l1.22-1.22a.75.75 0 01.98-.07l.08.07c.27.27.3.68.08.98l-.08.08-2.36 2.37a.77.77 0 01-.67.35.77.77 0 01-.66-.35l-2.37-2.37a.75.75 0 010-1.06z" fill={primaryFill} /><path d="M5 20.25c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default AutoFitHeight24Regular;