import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneSpeaker24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2C14.99 2 16 3 16 4.25v8.67c-.37.05-.73.23-1.03.54L13.53 15H12a1 1 0 00-1 1v2H8.75a.75.75 0 000 1.5h2.38c.18.3.5.5.87.5h1.53l1.44 1.54a2 2 0 00.06.06c-.36.25-.8.4-1.28.4h-7.5C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h7.5zm8.4 12.3a4.53 4.53 0 00-.92-1.13.75.75 0 10-.96 1.16c.13.1.35.35.59.74.4.67.64 1.48.64 2.43 0 .95-.24 1.76-.64 2.43-.24.39-.46.64-.59.74a.75.75 0 10.96 1.16c.25-.21.59-.58.91-1.13.54-.9.86-1.96.86-3.2 0-1.24-.32-2.3-.86-3.2zm-2.28 1.1c-.23-.36-.48-.6-.67-.75a.75.75 0 00-.9 1.2 2.24 2.24 0 01.7 1.65 2.24 2.24 0 01-.7 1.65l-.08.07a.75.75 0 00.98 1.13 3.73 3.73 0 001.3-2.85c0-.81-.23-1.52-.63-2.1zM17 14.75a.75.75 0 00-1.31-.5L14.16 16h-1.41a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h1.41l1.53 1.74a.75.75 0 001.31-.49v-5.5z" fill={primaryFill} /></svg>;
};

export default PhoneSpeaker24Filled;