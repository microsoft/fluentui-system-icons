import * as React from "react";
import { IFluentIconsProps } from './IFluentIconsProps.types';

const AccessTime24Filled = (iconProps: IFluentIconsProps) => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-20 0 10 10 0 0020 0zM7.5 8.74A2.3 2.3 0 019.25 8c1.15 0 1.9.8 2.15 1.66.26.85.1 1.9-.62 2.62a8.1 8.1 0 01-.79.67l-.04.03c-.28.22-.53.41-.75.63a2.3 2.3 0 00-.58.89h2.13a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75c0-1.25.52-2.08 1.14-2.7.3-.3.62-.55.9-.76.28-.22.5-.4.68-.57.27-.27.37-.72.25-1.13-.12-.38-.37-.59-.72-.59s-.53.14-.64.25a.84.84 0 00-.15.23.75.75 0 01-1.43-.46l.04-.1.08-.17c.07-.14.18-.32.35-.5zM13.25 8c.41 0 .75.34.75.75v2.75h1.5V8.75a.75.75 0 011.5 0v6.47a.75.75 0 01-1.5 0V13h-2.25a.75.75 0 01-.75-.75v-3.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default AccessTime24Filled;