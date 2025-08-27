import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Switch } from '@/components/ui/Switch';
import { trpc } from '@/utils/trpc';
import { GetStaticProps } from 'next';
import { CgSpinner } from 'react-icons/cg';
import CoinbaseLogo from '@public/logos/coinbase.svg';
import BinanceLogo from '@public/logos/binance.svg';
import KrakenLogo from '@public/logos/kraken.svg';

interface IndexProps {}

export default function Index(props: IndexProps) {
  const { data, error, isFetching, refetch } = trpc.hello.useQuery({ name: 'tRPC' });
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mb-4 text-2xl">Index page</h2>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="Input" />
        <Button
          type="submit"
          variant="default"
        >
          Button
        </Button>
      </div>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>

      <div className="flex items-center space-x-2">
        <CoinbaseLogo className="h-8 w-8" />
        <BinanceLogo className="h-8 w-8" />
        <KrakenLogo className="h-8 w-8" />
      </div>

      <div className="mt-10 flex items-center gap-2">
        API response: {isFetching ? <CgSpinner className="animate-spin text-xl" /> : data?.greeting}
      </div>
      <div>
        <Button
          type="button"
          onClick={() => refetch()}
        >
          Refetch
        </Button>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  return {
    props: {},
  };
};
