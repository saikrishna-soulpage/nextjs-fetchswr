import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Repo({ repo }) {
  //   console.log(repo.name);
  //   console.log(repo.owner.avatar_url);
  return (
    <div class="text-center">
      <img
        src={repo.owner.avatar_url}
        alt="Avatar"
        width="140px"
        class="img-thumbnail"
      ></img>
      <h2>
        {repo.id}.
        <a class="text-capitalize" href={repo.html_url}>
          {repo.name}
        </a>
      </h2>
      <p>{repo.description}</p>
      <p>Id-{repo.node_id}</p>

      <Link href={{ pathname: "/id", query: { id: repo.id } }} key={repo.id}>
        <a>Read more...</a>
      </Link>
    </div>
  );
}
