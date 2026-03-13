import Image from "next/image";

interface CameraProps {
  image: string;
  alt: string;
  buttonLabel: string;
  onCapture: () => void;
  disabled?: boolean;
}

export const Camera = ({
  image,
  alt,
  buttonLabel,
  onCapture,
  disabled = false,
}: CameraProps) => {
  return (
    <div className="w-full h-full relative">
      <div className="h-full flex justify-center items-center">
        <Image src={image} alt={alt} width={300} height={300} />
      </div>
      <div className="w-full h-42 bg-rose-300 flex justify-center items-center rounded-t-3xl absolute bottom-0">
        <button
          type="button"
          onClick={onCapture}
          disabled={disabled}
          className="size-20 rounded-full bg-white disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
          aria-label={buttonLabel}
        />
      </div>
    </div>
  );
};
