interface buttonProps {
  className?: string;
  size?: 'normal' | 'small' | 'large';
  href?: string;
  children: string;
  disabled?: boolean;
}

function Button(props: buttonProps) {
  const { className, disabled = false, size = 'normal', href, children } = props;
  let calcSize, calcClass;
  if (size === 'normal') {
    calcSize = 'px-8 py-3';
  } else if (size === 'small') {
    calcSize = 'px-4 py-1';
  } else {
    calcSize = 'text-xl px-12 py-4';
  }
  calcClass = className ? className : '';
  const baseClass =
    'cursor-pointer rounded border-[3px] border-[rgba(0,0,0,0.1)] font-bold text-blue-600 shadow-[5px_5px_0_0_rgba(0,0,0,0.1)] transition-all hover:translate-y-[-3px] active:translate-y-[3px] dark:border-[rgba(255,255,255,0.1)] dark:text-blue-400 dark:shadow-[5px_5px_0_0_rgba(255,255,255,0.1)]';
  const finalClass = baseClass + ' ' + calcSize + ' ' + calcClass;
  if (href) {
    return (
      <a href={href} className={finalClass}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={finalClass} disabled={disabled}>
        {children}
      </button>
    );
  }
}

export default Button;
