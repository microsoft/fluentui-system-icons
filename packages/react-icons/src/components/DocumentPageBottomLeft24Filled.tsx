import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPageBottomLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.26 16.88l.23-1.5h1.48l-.23 1.5H9.26z" fill={primaryFill} /><path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75V4.25c0-1.19.93-2.16 2.1-2.24h11.65zM10.4 19.04a.75.75 0 101.48.24l.14-.9h.73a.75.75 0 000-1.5h-.5l.24-1.5h.76a.75.75 0 000-1.5h-.52l.16-1.02a.75.75 0 10-1.48-.24l-.2 1.26H9.73l.16-1.02a.75.75 0 10-1.48-.24l-.2 1.26h-.96a.75.75 0 000 1.5h.73l-.24 1.5h-.99a.75.75 0 000 1.5h.75l-.1.66a.75.75 0 001.48.24l.14-.9h1.48l-.1.66z" fill={primaryFill} /></svg>;
};

export default DocumentPageBottomLeft24Filled;