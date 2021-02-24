import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FoodCake24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 1c-.95 0-1.59.68-1.94 1.28a4.15 4.15 0 00-.56 1.97c0 .5.06 1.17.43 1.75.41.63 1.1 1 2.07 1 .96 0 1.66-.37 2.07-1 .37-.58.43-1.26.43-1.75 0-.6-.2-1.35-.56-1.97C13.59 1.68 12.95 1 12 1zm-1 3.25c0-.3.12-.8.36-1.21.25-.42.49-.54.64-.54.15 0 .4.12.64.54.24.4.36.9.36 1.21 0 .41-.06.73-.2.93-.08.14-.26.32-.8.32s-.72-.18-.8-.32c-.14-.2-.2-.52-.2-.93z" fill={primaryFill} /><path d="M20.5 10.25v8.25h.75a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5h.75v-8.25C3.5 9.01 4.5 8 5.75 8h12.5c1.24 0 2.25 1 2.25 2.25zm-15.5 0v2.1l2.45 1.57c.41.27.94.27 1.35 0l1.75-1.13c.88-.56 2-.58 2.9-.05l2 1.2c.43.25.96.23 1.37-.05L19 12.36v-2.11a.75.75 0 00-.75-.75H5.75a.75.75 0 00-.75.75zm12.68 4.87c-.89.62-2.06.67-2.99.11l-2-1.2c-.42-.24-.93-.23-1.33.02l-1.74 1.13c-.91.59-2.08.59-2.99 0L5 14.13v4.37h14v-4.3l-1.32.92z" fill={primaryFill} /></svg>;
};

export default FoodCake24Regular;