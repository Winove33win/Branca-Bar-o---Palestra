import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded shadow-lg transform hover:-translate-y-1 hover:shadow-xl";
  
  const variants = {
    primary: "bg-brand-green hover:bg-brand-greenHover text-brand-dark border-2 border-transparent",
    secondary: "bg-transparent border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-dark"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children}
    </button>
  );
};