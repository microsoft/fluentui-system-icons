import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowForward20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.85 5.47l.05-.07a.5.5 0 01.64-.05l.07.05 4.27 4.28.03.04.04.07.03.06v.05l.02.1v.09l-.03.08-.02.06-.03.04-.04.05-.03.03-4.24 4.25a.5.5 0 01-.76-.64l.05-.07 3.4-3.39H2.5a.5.5 0 01-.5-.41V10a.5.5 0 01.41-.5H16.3l-3.4-3.39a.5.5 0 01-.05-.64l.05-.07-.05.07z" fill={primaryFill} /></svg>;
};

export default ArrowForward20Regular;