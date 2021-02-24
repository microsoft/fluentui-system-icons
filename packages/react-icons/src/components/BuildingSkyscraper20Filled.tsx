import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingSkyscraper20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V3H7v-.5z" fill={primaryFill} /><path d="M5.46 4a.5.5 0 00-.46.5V5h6v-.5a.5.5 0 00-.46-.5H5.46z" fill={primaryFill} /><path d="M13.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M14.5 11.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M5 6h6v.02c.6.34 1 .99 1 1.73V8h.5a4.5 4.5 0 014.5 4.5v4a.5.5 0 01-.5.5H9v-2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V17H4.5a.5.5 0 01-.5-.5V7.75a2 2 0 011-1.73V6zm7 10h4v-3.5A3.5 3.5 0 0012.5 9H12v7zM7.5 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm1.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zM7.5 11.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm1.75.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
};

export default BuildingSkyscraper20Filled;