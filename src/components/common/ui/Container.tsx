import { FC, ReactNode } from "react";

interface IcontainerProps {
  children: ReactNode;
}

const Container: FC<IcontainerProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="sm:p-4 md:p-6">{children}</div>
    </div>
  );
};

export default Container;
