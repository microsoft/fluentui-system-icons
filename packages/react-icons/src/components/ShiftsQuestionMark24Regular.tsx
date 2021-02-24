import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShiftsQuestionMark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 7.88a.62.62 0 100 1.25.62.62 0 000-1.25zM17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25h-5.77c.3-.46.53-.97.7-1.5h5.07c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v5.06c-.53.18-1.04.42-1.5.71V6.25C3 4.45 4.46 3 6.25 3h11.5zM6.5 14c-1.05 0-1.86.82-1.85 1.96a.5.5 0 001-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .23-.07.4-.31.68l-.1.11-.27.3c-.48.53-.67.89-.67 1.46a.5.5 0 001 0c0-.23.08-.4.32-.7l.1-.1.27-.3c.48-.53.66-.88.66-1.45 0-1.1-.82-1.95-1.85-1.95zm5.25-8c.38 0 .7.28.74.65l.01.1V12h3.75a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.74-.65l-.01-.1v-6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default ShiftsQuestionMark24Regular;