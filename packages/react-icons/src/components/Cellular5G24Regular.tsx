import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cellular5G24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.9 3.62a.75.75 0 01-1.28.79l-.02-.02a.64.64 0 00-.15-.12c-.15-.08-.47-.2-1.06-.09-.41.08-.62.33-.75.67a2.1 2.1 0 00-.14.65v1.25a1 1 0 001 1h.25a1 1 0 00.97-.75h-.47a.75.75 0 010-1.5h1.25c.41 0 .75.34.75.75v.5a2.5 2.5 0 01-2.5 2.5h-.25A2.5 2.5 0 018 6.75V5.46a2.57 2.57 0 01.03-.34c.03-.22.09-.5.2-.82.25-.62.8-1.4 1.88-1.6.92-.16 1.6 0 2.07.26a2.13 2.13 0 01.7.64l.01.01zm-9.65-.2A.75.75 0 014 2.75h2.5a.75.75 0 010 1.5H4.67l-.06.58h.01a2.23 2.23 0 11.4 4.42H4.8c-.75 0-1.45-.38-1.87-1l-.05-.08a.75.75 0 011.24-.84l.06.09c.14.2.37.33.62.33h.22A.73.73 0 104.9 6.3l-1 .19A.75.75 0 013 5.67l.25-2.25zm8.5 8.58c.38 0 .7.28.74.65l.01.1v7.5a.75.75 0 01-1.5.1v-7.6c0-.41.34-.75.75-.75zm4-3c.38 0 .7.28.74.65l.01.1v10.5a.75.75 0 01-1.5.1V9.75c0-.41.34-.75.75-.75zm-12 9c.38 0 .7.28.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75zm16-12c.37 0 .69.28.74.64l.01.1v13.5a.75.75 0 01-1.5.12V6.76c0-.42.33-.76.74-.76zm-12 9c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default Cellular5G24Regular;