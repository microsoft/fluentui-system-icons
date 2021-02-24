import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenDesktop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 10c.92 0 1.67.7 1.74 1.6l.01.15v8.5c0 .92-.7 1.67-1.6 1.74l-.15.01h-8.5c-.92 0-1.67-.7-1.74-1.6L2 20.24v-8.5c0-.92.7-1.67 1.6-1.74l.15-.01h8.5zM7.5 11.5H3.75a.25.25 0 00-.24.2l-.01.05v8.5c0 .12.08.22.2.24l.05.01H7.5v-9zm4.75 0H8.5v9h3.75c.12 0 .22-.08.24-.2l.01-.05v-8.5a.25.25 0 00-.2-.24l-.05-.01zM10.62 18a.75.75 0 01.1 1.5h-.6a.75.75 0 01-.1-1.5h.6zm-4.74 0a.75.75 0 01.1 1.5h-.6a.75.75 0 01-.1-1.5h.6zM19.74 2c1.2 0 2.17.93 2.24 2.1l.01.15v9c0 1.2-.93 2.17-2.1 2.24l-.15.01H17v2h1.25a.75.75 0 01.1 1.5H15v-1.5h.5v-2H15V14h4.75c.38 0 .7-.28.74-.65l.01-.1v-9a.75.75 0 00-.75-.75H6.25c-.38 0-.7.28-.74.65l-.01.1V9H4V4.25c0-1.2.93-2.17 2.1-2.24L6.25 2h13.5z" fill={primaryFill} /></svg>;
};

export default DualScreenDesktop24Regular;