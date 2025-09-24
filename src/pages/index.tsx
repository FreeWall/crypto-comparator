import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { trpc } from '@/utils/trpc';
import { GetStaticProps } from 'next';
import { CgSpinner } from 'react-icons/cg';
import CoinbaseLogo from '@public/logos/coinbase.svg';
import BinanceLogo from '@public/logos/binance.svg';
import KrakenLogo from '@public/logos/kraken.svg';
import { useForm } from '@tanstack/react-form';
import styles from './index.module.css';

/**
 * Important files
 * @see file://./../server/api/root.ts
 * @see file://./../server/cryptoProviders.ts
 */

interface IndexProps {}

export default function Index(props: IndexProps) {
  const { data: getHelloData, isFetching, refetch } = trpc.getHello.useQuery({ name: 'from GET' });
  const { data: postHelloData, isPending, mutateAsync } = trpc.postHello.useMutation();

  const form = useForm({
    onSubmit: async ({ value }) => {
      await mutateAsync({ name: value.fullname, fruit: value.fruit });
    },
    defaultValues: {
      fullname: '',
      fruit: '',
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <div className={styles.mystyle}>
        <div className="mb-10 flex items-center space-x-2">
          <CoinbaseLogo className="h-8 w-8" />
          <BinanceLogo className="h-8 w-8" />
          <KrakenLogo className="h-8 w-8" />
        </div>
      </div>

      {/* TRPC GET example */}
      <div className="mb-10 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          API GET response:{' '}
          {isFetching ? (
            <CgSpinner className="animate-spin text-xl" />
          ) : (
            <span className="text-green-700">{getHelloData?.greeting}</span>
          )}
        </div>
        <div>
          <Button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
          >
            Refetch
          </Button>
        </div>
      </div>

      {/* TRPC POST form example */}
      <div className="mb-10 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          API POST response:{' '}
          {isPending ? (
            <CgSpinner className="animate-spin text-xl" />
          ) : (
            <span className="text-green-700">{postHelloData?.greeting}</span>
          )}
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="mb-4 flex max-w-sm gap-2">
              <form.Field name="fullname">
                {(field) => (
                  <Input
                    placeholder="Name"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              </form.Field>
              <form.Field name="fruit">
                {(field) => (
                  <Select
                    value={field.state.value}
                    onValueChange={(value) => field.handleChange(value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Apple">Apple</SelectItem>
                      <SelectItem value="Orange">Orange</SelectItem>
                      <SelectItem value="Banana">Banana</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </form.Field>
            </div>
            <Button
              type="submit"
              disabled={isPending}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  return {
    props: {},
  };
};
