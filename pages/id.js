import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Id() {
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const url = "https://api.github.com/repositories";

  const { data: result, error } = useSWR(url + "/" + router.query.id, fetcher);
  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;
  //   console.log(url + "/" + router.query.id);

  return (
    <main>
      <Head>
        <title>User</title>
      </Head>

      <div class="card">
        <h1 class="text-center">User</h1>
        <br />
        <div class="text-center">
          <img
            class="card-thumbnail"
            src={result.owner.avatar_url}
            alt="Card image cap"
            width="280px"
          ></img>
        </div>
        <div class="card-body">
          <div class="text-center">
            <div class="text-capitalize">
              <h1 class="card-title">
                <a href={result.html_url}>{result.name}</a>
              </h1>
            </div>
          </div>
          <br />
          <div class="text-center">
            <p class="card-text">{result.description}</p>
          </div>
          <br />
          <div class="text-center">
            <Link
              href={{
                pathname: "/contributors",
                query: { id: result.contributors_url },
              }}
              key={result.id}
            >
              <a>Contributors</a>
            </Link>
            <br />
          </div>
        </div>
      </div>
    </main>
  );
}
