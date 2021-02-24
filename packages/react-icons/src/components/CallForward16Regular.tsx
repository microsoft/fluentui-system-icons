import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallForward16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.38 1.07l-.16-.03c-.89-.15-1.8.15-2.4.82C2.58 3.19 2 5.24 2 8s.6 4.8 1.8 6.14a2.66 2.66 0 002.59.79l.57-.14a1.93 1.93 0 001.48-2.07l-.12-1.22a1.93 1.93 0 00-1.5-1.68l-1.25-.28-.03-.01-.03-.07A4.52 4.52 0 015.3 8c0-.74.08-1.24.22-1.47a.18.18 0 01.11-.08l1.2-.27A1.93 1.93 0 008.31 4.5l.12-1.23c.1-.96-.54-1.84-1.49-2.07l-.57-.13zM3.06 8c0-2.52.52-4.33 1.54-5.43.36-.4.9-.58 1.42-.5l.12.02.57.14c.43.1.72.5.68.94l-.13 1.22a.88.88 0 01-.68.77l-1.19.27c-.32.07-.6.27-.77.56-.27.43-.38 1.09-.38 2.01 0 1.4.26 2.26.96 2.52l.1.03 1.28.3c.37.08.64.39.68.76l.13 1.22a.88.88 0 01-.67.94l-.58.14a1.6 1.6 0 01-1.55-.48C3.58 12.33 3.06 10.52 3.06 8z" fill={primaryFill} /><path d="M11.85 4.15a.5.5 0 00-.7.7L13.29 7H8.5a.5.5 0 000 1h4.8l-2.15 2.15a.5.5 0 00.7.7l3-3a.5.5 0 000-.7l-3-3z" fill={primaryFill} /></svg>;
};

export default CallForward16Regular;