import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BatterySaver20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 4.3C8.38 6.58 9 8.3 9 9.57c0 1.33-.48 2.35-1.42 2.99-.27.18-.53.09-.7-.18-.18-.27-.05-.62.22-.8.6-.41.9-1.06.9-2 0-.84-.37-2.05-1.12-3.61l-.28-.54-.4.53c-.27.28-.57.56-.9.84l-.27.2-.7.56c-1.07.84-1.41 1.4-1.33 2.4.08.9.72 1.5 1.77 1.73a7.9 7.9 0 00.77-3.16c0-.33.26-.6.59-.6.32 0 .54.27.54.6a8.34 8.34 0 01-.82 3.58 5.55 5.55 0 01-3.04 2.86c-.3.12-.64-.04-.76-.32-.13-.28.05-.62.35-.75a5.08 5.08 0 001.87-1.34c-1.3-.41-2.14-1.25-2.25-2.57-.13-1.48.41-2.35 1.76-3.43l.65-.5.3-.23a6.9 6.9 0 001.45-1.55.58.58 0 011 .04zm6.32.7A2.5 2.5 0 0116 7.35v.98l1.17.02a.83.83 0 01.82.73l.01.1v1.67a.83.83 0 01-.72.82l-.11.01H16v.82a2.5 2.5 0 01-2.35 2.5H6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.76c.65 0 1.18-.5 1.24-1.13V7.25c0-.66-.49-1.19-1.12-1.25H9.54C9.2 6 9 5.85 9 5.5s.22-.5.54-.5h3.96z" fill={primaryFill} /></svg>;
};

export default BatterySaver20Regular;