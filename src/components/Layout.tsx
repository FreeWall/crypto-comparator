import { FaStar } from 'react-icons/fa';

interface LayoutProps extends React.PropsWithChildren {}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex min-h-full w-full flex-col items-center p-6 pt-8 sm:p-10 md:p-20">
      <div className="w-full max-w-[800px]">
        <div className="mb-8 sm:mb-14">
          <div className="flex items-center gap-4 text-4xl">
            <FaStar /> Crypto comparator
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}
