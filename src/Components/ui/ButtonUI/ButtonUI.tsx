import { ReactNode } from "react"

type TButtonUIProps = {
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const ButtonUI: React.FC<TButtonUIProps> = ({ children, disabled, className, onClick, type }) => {
  const buttonType = type ?? 'button';
  const isDisabled = disabled ?? false;
  return (
    <button disabled={isDisabled} onClick={onClick} type={buttonType} className={className}>{children}</button>
  )
}

export default ButtonUI;