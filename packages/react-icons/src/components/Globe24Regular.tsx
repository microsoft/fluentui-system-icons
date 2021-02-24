import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Globe24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm2.94 14.5H9.06c.65 2.41 1.79 4 2.94 4s2.29-1.59 2.94-4zm-7.43 0H4.79a8.53 8.53 0 004.09 3.41c-.52-.82-.95-1.84-1.27-3.01l-.1-.4zm11.7 0H16.5c-.32 1.33-.79 2.5-1.37 3.41a8.53 8.53 0 003.9-3.13l.2-.28zM7.1 10H3.74v.02a8.52 8.52 0 00.3 4.98h3.18a20.3 20.3 0 01-.13-5zm8.3 0H8.6a18.97 18.97 0 00.14 5h6.52a18.5 18.5 0 00.14-5zm4.87 0h-3.35a20.82 20.82 0 01-.13 5h3.18a8.48 8.48 0 00.3-5zM8.88 4.09h-.02A8.53 8.53 0 004.25 8.5H7.3c.31-1.75.86-3.28 1.58-4.41zm3.12-.6l-.12.01c-1.26.12-2.48 2.12-3.05 5h6.34c-.56-2.87-1.78-4.87-3.04-5H12zm3.12.6l.1.17A12.64 12.64 0 0116.7 8.5h3.05a8.53 8.53 0 00-4.34-4.29l-.29-.12z" fill={primaryFill} /></svg>;
};

export default Globe24Regular;