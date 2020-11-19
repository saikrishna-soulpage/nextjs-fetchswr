import Head from "next/head";
import useSWR from "swr";
import Repo from "../components/repo";
import "bootstrap/dist/css/bootstrap.min.css";

export default function IndexPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const url = "https://api.github.com/repositories";

  const { data: result, error } = useSWR(url, fetcher);
  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  return (
    <main>
      <Head>
        <title>Repositories List</title>
      </Head>

      <h1 class="text-center">List of repositories</h1>
      <br />
      <div>
        {/* {console.log(result)} */}
        {result.map((repo) => (
          <div>
            <br />
            <Repo key={repo.id} repo={repo} />
          </div>
        ))}
      </div>
    </main>
  );
}
