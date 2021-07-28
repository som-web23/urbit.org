import Link from "next/link";
import { formatDate } from "../lib/lib";

export default function Pagination(props) {
  return (
    <Link
      href={`/${props.section}/${props.post.slug}`}
      key={`post-${props.post.slug}`}
    >
      <div
        className="bg-wall cursor-pointer font-semibold p-2 px-4 rounded-xl flex"
        style={{ maxWidth: "45%" }}
      >
        <p className="flex-shrink-0">{props.previous ? "<- " : ""}</p>
        <p className="text-black truncate">{props.post.title}</p>
        <p className="flex-shrink-0">{props.next ? " ->" : ""}</p>
      </div>
    </Link>
  );
}

Pagination.defaultProps = {
  className: "",
};
