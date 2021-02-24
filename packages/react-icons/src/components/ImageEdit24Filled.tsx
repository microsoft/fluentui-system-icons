import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageEdit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.56 13.65l-.09.07-6.92 6.8c.5.3 1.08.48 1.7.48h4.91l.36-1.42c.16-.65.5-1.24.97-1.72l2.1-2.1-2.07-2.04-.09-.08a.75.75 0 00-.87 0zm4.94-5.4a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-.84 6.44l-2.08-2.04-.13-.12c-.84-.7-2.06-.7-2.9 0l-.13.12-6.93 6.8c-.31-.49-.49-1.07-.49-1.7V6.25C3 4.45 4.45 3 6.25 3h11.5C19.55 3 21 4.45 21 6.25v4.76c-.93-.08-1.9.24-2.6.95l-2.74 2.73zM13.5 8.25a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zm5.6 4.42l-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default ImageEdit24Filled;