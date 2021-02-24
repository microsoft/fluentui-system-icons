import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Run16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.31 1.04a.5.5 0 01.39 0l4.9 2.1a.5.5 0 01.08.88h-.02a2.69 2.69 0 00-.22.17c-.15.11-.35.28-.55.48-.4.38-.75.85-.87 1.3a26.17 26.17 0 001.36 3.18l1.6.96A2.1 2.1 0 0115 11.9v1.59a.5.5 0 01-.48.5l-.02-.5.02.5h-.04a7.94 7.94 0 01-.42 0 21.2 21.2 0 01-5-.72c-2.9-.79-6.32-2.47-8.01-6.07a.5.5 0 010-.43 12.84 12.84 0 012.72-3.32 13 13 0 013.54-2.42zM14 13v-.54C7.67 11.9 4.16 9.28 2.44 6.42c-.15.2-.27.4-.38.59 1.55 3.06 4.55 4.57 7.27 5.3A20.2 20.2 0 0014 13zm-.53-2.04l-1.4-.83-.88.89c.83.19 1.73.33 2.71.43a1.1 1.1 0 00-.43-.49zm-3.33-5.53a4.45 4.45 0 011.29-1.7L7.5 2.04c-.82.37-1.84 1.09-2.81 1.94l1.16 1.17c.1.09.15.22.15.35v3.3c.54.39 1.15.75 1.84 1.08l1.05-1.4-1.8-2.7a.5.5 0 01.5-.77l2.55.42z" fill={primaryFill} /></svg>;
};

export default Run16Filled;