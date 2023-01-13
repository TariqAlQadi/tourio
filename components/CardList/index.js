import Card from "../Card";
import useSWR from "swr";
import Link from "next/link";

export default function CardList() {
  const { data } = useSWR("/api/places");
  if (!data) {
    return <p>is Loading</p>;
  }
  console.log("data", data);
  return (
    <>
      <p>card list</p>
      <ul>
        {data.map((place) => {
          return (
            <Link href={`/${place._id}`} key={place.id}>
              <Card place={place} />
            </Link>
          );
        })}
      </ul>
    </>
  );
}
