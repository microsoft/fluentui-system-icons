import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier18X20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.46 6.03c.32.1.54.39.54.72v6.5a.75.75 0 01-1.5 0V8.81c-.24.19-.52.38-.86.58a.75.75 0 01-.78-1.28c.58-.35.9-.62 1.13-.87.22-.24.36-.47.58-.81l.04-.08a.75.75 0 01.85-.32zm8.79 2.22c0 .58-.23 1.07-.59 1.45.51.44.84 1.07.84 1.8 0 1.47-1.33 2.5-2.75 2.5S8 12.97 8 11.5c0-.73.33-1.36.84-1.8a2.08 2.08 0 01-.59-1.45C8.25 6.9 9.48 6 10.75 6s2.5.9 2.5 2.25zm-2.5-.75c-.66 0-1 .44-1 .75s.34.75 1 .75c.66 0 1-.44 1-.75s-.34-.75-1-.75zm-1.25 4c0 .46.46 1 1.25 1s1.25-.54 1.25-1c0-.46-.46-1-1.25-1s-1.25.54-1.25 1zm4.72-1.28c.3-.3.77-.3 1.06 0l.72.72.72-.72a.75.75 0 111.06 1.06l-.72.72.72.72a.75.75 0 11-1.06 1.06l-.72-.72-.72.72a.75.75 0 11-1.06-1.06l.72-.72-.72-.72a.75.75 0 010-1.06zM7 13.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /></svg>;
};

export default Multiplier18X20Filled;