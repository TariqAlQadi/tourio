//import useSWR from "swr";
import { useRouter } from "next/router";

export default function AddForm() {
  const router = useRouter();
  //const products = useSWR("/api/products");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    // try {
    //   const response = await fetch("/api/products", {
    //     method: "POST",
    //     body: JSON.stringify(productData),
    //     headers: { "Content-type": "application/json" },
    //   });
    //   if (response.ok) {
    //     products.mutate();
    //     event.target.reset();
    //   } else {
    //     console.error(`Error: ${response.status}`);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Go Back
      </button>
      <form onSubmit={handleSubmit}>
        <h1>Add Place</h1>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="image">
          Image Url:
          <input type="text" id="image" name="image" />
        </label>
        <label htmlFor="location">
          Location:
          <input type="text" id="location" name="location" />
        </label>
        <label htmlFor="description">
          Description:
          <textarea id="description" name="description"></textarea>
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
