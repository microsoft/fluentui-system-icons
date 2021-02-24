import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cellular4G24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.9 3.62a.75.75 0 01-1.28.79l-.02-.02a.64.64 0 00-.15-.12c-.15-.08-.47-.2-1.06-.09-.41.08-.62.33-.75.67a2.1 2.1 0 00-.14.65v1.25a1 1 0 001 1h.25a1 1 0 00.97-.75h-.47a.75.75 0 010-1.5h1.25c.41 0 .75.34.75.75v.5a2.5 2.5 0 01-2.5 2.5h-.25A2.5 2.5 0 018 6.75V5.46a2.57 2.57 0 01.03-.34c.03-.22.09-.5.2-.82.25-.62.8-1.4 1.88-1.6.92-.16 1.6 0 2.07.26a2.13 2.13 0 01.7.64l.01.01zm-8.17-.56a1 1 0 011.77.64v2.8h.25a.75.75 0 010 1.5H6.5v.5a.75.75 0 11-1.5 0V8H3.2a1.2 1.2 0 01-.92-1.96l2.45-2.98zM5 6.5V5.09L3.84 6.5H5zm6.75 5.5c.38 0 .7.28.74.65l.01.1v7.5a.75.75 0 01-1.5.1v-7.6c0-.41.34-.75.75-.75zm4-3c.38 0 .7.28.74.65l.01.1v10.5a.75.75 0 01-1.5.1V9.75c0-.41.34-.75.75-.75zm-12 9c.38 0 .7.28.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75zm16-12c.37 0 .69.28.74.64l.01.1v13.5a.75.75 0 01-1.5.12V6.76c0-.42.33-.76.74-.76zm-12 9c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default Cellular4G24Regular;