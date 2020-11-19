import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import "bootstrap/dist/css/bootstrap.min.css";
import Contributor from "../components/contributor";

export default function Contributors() {
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const url = "https://api.github.com/repositories";

  const { data: result, error } = useSWR(router.query.id, fetcher);
  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;
  console.log(router.query.id);
  console.log(result);

  return (
    <main>
      <Head>
        <title>Contributors</title>
      </Head>

      <h1 class="text-center">Contributors</h1>
      <br />
      <div>
        {/* {console.log(result)} */}
        {result.map((item) => (
          <Contributor key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
