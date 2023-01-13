import CardList from "@/components/CardList";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          router.push("/AddFormPage");
        }}
      >
        Add Place
      </button>
      <CardList />
    </>
  );
}
