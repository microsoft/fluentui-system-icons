import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Question48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 5.5a10 10 0 00-10 10 1.25 1.25 0 102.5 0 7.5 7.5 0 0115 0c0 1.88-.47 2.94-1.1 3.74-.51.66-1.1 1.14-1.85 1.74l-.99.82c-1.17 1-2.4 2.27-3.33 4.29-.92 2-1.48 4.66-1.48 8.41v.25a1.25 1.25 0 102.5 0v-.25c0-3.5.53-5.78 1.25-7.37a9.56 9.56 0 012.69-3.43l.75-.62c.82-.66 1.73-1.4 2.43-2.3 1-1.28 1.63-2.9 1.63-5.28a10 10 0 00-10-10z" fill={primaryFill} /><path d="M24 42a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
};

export default Question48Regular;