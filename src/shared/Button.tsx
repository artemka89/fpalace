import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="shadow-3xl rounded-full border-2 border-orange bg-orange px-8 py-3 text-xl text-white transition-colors duration-200 hover:bg-transparent hover:text-orange"
    >
      {children}
    </button>
  );
};
export default Button;
