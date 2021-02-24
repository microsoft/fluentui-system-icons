import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentSearch24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.4 10.95a4.93 4.93 0 01.55 6.32l-.14.2 4.22 4.21.07.09a.77.77 0 01-1.08 1.08l-.09-.08-4.25-4.25a4.93 4.93 0 11.73-7.57zM13.14 2c.6 0 1.17.24 1.59.66l2.81 2.8 2.8 2.82c.43.42.67 1 .67 1.6v9.87c0 1.24-1.01 2.25-2.25 2.25h-1.51c-.04-.3-.15-.58-.34-.83l-.12-.14-.52-.53h2.49c.41 0 .75-.34.75-.75V10h-4.25c-1.2 0-2.17-.92-2.24-2.1L13 7.76V3.5H7.25a.75.75 0 00-.75.75v4.42a5.9 5.9 0 00-1.5.58v-5C5 3.01 6 2 7.25 2h5.88zm-7.6 10.04a3.38 3.38 0 104.79 4.78 3.38 3.38 0 00-4.78-4.78zm8.97-7.48v3.2c0 .37.28.69.65.74H18.45L14.5 4.56z" fill={primaryFill} /></svg>;
};

export default DocumentSearch24Regular;