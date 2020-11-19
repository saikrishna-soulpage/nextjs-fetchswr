import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contributor({ item }) {
  return (
    <div class="text-center">
      <img
        src={item.avatar_url}
        alt="Avatar"
        width="140px"
        class="img-thumbnail"
      ></img>
      <h2>
        {item.id}.{item.login}
      </h2>
      <p>Contributions-{item.contributions}</p>
      <br />
    </div>
  );
}
