import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextFont20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2c.2 0 .4.13.47.32L8.9 8.57v.02l.18.44-.53 1.4-.46-1.17H3.91l-.94 2.42a.5.5 0 11-.94-.36L3.1 8.59v-.02l2.43-6.25A.5.5 0 016 2zM4.3 8.26h3.4L6 3.88 4.3 8.26z" fill={primaryFill} /><path d="M12.47 5.32a.5.5 0 00-.94 0L7.15 17H6.5a.5.5 0 000 1h2a.5.5 0 000-1h-.28l1.13-3h5.37l1.15 3h-.37a.5.5 0 100 1h2a.5.5 0 100-1h-.56L12.47 5.32zM14.34 13H9.72l2.29-6.09L14.34 13z" fill={primaryFill} /></svg>;
};

export default TextFont20Regular;