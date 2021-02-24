import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EditSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.03 2.97a3.58 3.58 0 010 5.06l-2.64 2.64a6.45 6.45 0 00-1.58-.54L17.94 9 15 6.06 5.06 16c-.09.1-.16.2-.2.33l-1.04 3.85 3.85-1.05c.12-.03.24-.1.33-.2l1.13-1.12c.11.55.3 1.08.54 1.58l-.6.6c-.28.29-.63.49-1 .59l-5.12 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.72.57-1L15.97 2.97a3.58 3.58 0 015.06 0zM15.5 11c.3 0 .58.02.86.07l.17.72a2 2 0 002.42 1.47l.1-.02.6-.18c.36.47.65 1 .85 1.57l-.45.43a2 2 0 00-.17 2.7l.15.15.47.46c-.2.58-.5 1.1-.85 1.57l-.6-.18a2 2 0 00-2.49 1.35l-.03.1-.17.72a5.18 5.18 0 01-1.72 0l-.17-.72a2 2 0 00-2.42-1.47l-.1.02-.6.18c-.36-.47-.65-1-.85-1.57l.45-.43a2 2 0 00.05-2.83l-.05-.05-.45-.43c.2-.57.5-1.1.85-1.57l.6.18a2 2 0 002.49-1.35l.03-.1.17-.72c.28-.05.57-.07.86-.07zm0 4c-.8 0-1.45.67-1.45 1.5S14.7 18 15.5 18c.8 0 1.45-.67 1.45-1.5S16.3 15 15.5 15zm1.53-10.97l-.97.97L19 7.94l.97-.97a2.08 2.08 0 10-2.94-2.94z" fill={primaryFill} /></svg>;
};

export default EditSettings24Regular;