interface LoaderProps {
  error: boolean;
}

const Loader = ({ error }: LoaderProps) => {
  return !error ? (
    <div className="tw-fixed tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2">
      <div className="tw-w-16 tw-h-16 tw-border-solid tw-border-[8px] tw-border-x-transparent tw-border-y-gis-blue tw-rounded-[50%] tw-animate-spin"></div>
    </div>
  ) : (
    <div className="tw-font-bold tw-text-center">Oops, an error occurred.</div>
  );
};

export default Loader;
