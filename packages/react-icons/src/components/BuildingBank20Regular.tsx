import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingBank20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.88a.83.83 0 100-1.67.83.83 0 000 1.67z" fill={primaryFill} /><path d="M16 13.34V8h.1a.92.92 0 00.52-1.66l-5.85-4.16a1.33 1.33 0 00-1.54 0L3.38 6.34A.92.92 0 003.9 8H4v5.34c-.6.39-1 1.06-1 1.83v1.33c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-1.33c0-.77-.4-1.44-1-1.83zM9.8 3a.33.33 0 01.4 0l5.63 4H4.17L9.8 3zM15 8v5h-2V8h2zM5 13V8h2v5H5zm.17 1h9.66c.65 0 1.17.52 1.17 1.17V16H4v-.83c0-.65.52-1.17 1.17-1.17zm4.33-1H8V8h1.5v5zm1 0V8H12v5h-1.5z" fill={primaryFill} /></svg>;
};

export default BuildingBank20Regular;