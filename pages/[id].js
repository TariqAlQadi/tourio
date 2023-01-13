import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";

export default function PlacesDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/places/${id}` : null);

  if (!data) {
    return <div>...is Loading</div>;
  }

  function handleDelete() {
    fetch(`/api/places/${id}`, { method: "DELETE" });
  }

  return (
    <>
      <h2>{data.name}</h2>
      <Image src={data.image} alt={data.name} width={300} height={200} />
      <p>location</p>
      <p>description</p>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          router.push(data.mapURL);
        }}
      >
        Google maps
      </button>
      <button
        onClick={() => {
          handleDelete();
          router.push("/");
        }}
      >
        Delete
      </button>
    </>
  );
}
