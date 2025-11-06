import { twMerge } from 'tailwind-merge';

interface MainButtonProps {
  variant?: string
  text: string
  className?: string
  onClick?: () => void
}

const MainButton = ({ 
  variant = 'primary',
  text,
  className = '',
  onClick,
}: MainButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-neutral-30 hover:bg-neutral-30/[85%]';
      case 'secondary':
        return 'bg-beige-10 text-neutral-30 hover:bg-beige-20';
      case 'tertiary':
        return 'bg-white/[10%] border border-[#E3E1E1] text-neutral-30 hover:text-gray-800 hover:bg-white/[20%]';
    }
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(`
        text-label
        py-4
        px-5.5
        rounded-full
        ${getVariantStyles()}
        ${className}
      `)}
    >
      {text}
    </button>
  );
};

export default MainButton;
