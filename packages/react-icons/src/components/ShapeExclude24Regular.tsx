import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeExclude24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 3.45 3.46 2 5.25 2h8a3.3 3.3 0 011.82.56 3.27 3.27 0 011.42 2.4l.01.29V7.5h2.25A3.24 3.24 0 0122 10.75v8c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 01-3.25-3.25V16.5H5.25a3.28 3.28 0 01-1.7-.48h-.02a3.27 3.27 0 01-1.52-2.47l-.01-.3v-8zm1.5 2.81v1.88L9.94 3.5H8.06L3.5 8.06zM5.94 3.5h-.69c-.97 0-1.75.78-1.75 1.75v.69L5.94 3.5zm6.12 0L3.5 12.06v1.19c0 .2.04.4.1.59L7.64 9.8A3.26 3.26 0 019.8 7.64l4.04-4.04c-.19-.06-.38-.1-.59-.1h-1.19zm2.84 1.16L12.06 7.5h1.88L15 6.44V5.25c0-.2-.04-.4-.1-.59zm-7.4 7.4L4.66 14.9c.19.06.38.1.59.1h1.19l1.06-1.06v-1.88zm1.5 6.5v.19c0 .47.18.9.48 1.2l3.46-3.45h-1.88L9 18.56zm7.5-5.62l3.46-3.46c-.32-.3-.74-.48-1.21-.48h-.19l-2.06 2.06v1.88zm4-1.88l-9.44 9.44h1.88l7.56-7.56v-1.88zm0 4l-5.44 5.44h1.88l3.56-3.56v-1.88zm-.03 4.03a1.75 1.75 0 01-1.38 1.38l1.38-1.38zM9 10.75V15h4.25c.97 0 1.75-.78 1.75-1.75V9h-4.25C9.78 9 9 9.78 9 10.75z" fill={primaryFill} /></svg>;
};

export default ShapeExclude24Regular;