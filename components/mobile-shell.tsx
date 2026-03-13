interface MobileShellProps {
  children: React.ReactNode;
}

export const MobileShell = ({ children }: MobileShellProps) => {
  return (
    <div className="flex items-center justify-center w-full h-dvh bg-rose-100">
      <div className="max-w-md w-full h-dvh bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
};
