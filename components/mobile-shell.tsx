interface MobileShellProps {
  children: React.ReactNode;
}

export const MobileShell = ({ children }: MobileShellProps) => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-rose-100">
      <div className="max-w-md w-full h-full bg-white shadow-lg py-16 md:py-0">
        {children}
      </div>
    </div>
  );
};
