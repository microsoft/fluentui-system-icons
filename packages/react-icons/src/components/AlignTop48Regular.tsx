import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignTop48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 6.5a1.25 1.25 0 100 2.5h37.5a1.25 1.25 0 100-2.5H5.25zM26 15.75c0-2.35 1.9-4.25 4.25-4.25h5.5c2.35 0 4.25 1.9 4.25 4.25v15C40 33.1 38.1 35 35.75 35h-5.5A4.25 4.25 0 0126 30.75v-15zM30.25 14c-.97 0-1.75.78-1.75 1.75v15c0 .97.78 1.75 1.75 1.75h5.5c.97 0 1.75-.78 1.75-1.75v-15c0-.97-.78-1.75-1.75-1.75h-5.5zm-18-2.5h5.5c2.35 0 4.25 1.9 4.25 4.25V38c0 2.35-1.9 4.25-4.25 4.25h-5.5A4.25 4.25 0 018 38V15.75c0-2.35 1.9-4.25 4.25-4.25zm5.5 2.5h-5.5c-.97 0-1.75.78-1.75 1.75V38c0 .97.78 1.75 1.75 1.75h5.5c.97 0 1.75-.78 1.75-1.75V15.75c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /></svg>;
};

export default AlignTop48Regular;