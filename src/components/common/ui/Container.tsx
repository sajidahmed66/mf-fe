import { FC, ReactNode } from "react";

interface IcontainerProps {
  children: ReactNode;
}

const Container: FC<IcontainerProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="m-8">{children}</div>
    </div>
  );
};

export default Container;
