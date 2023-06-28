import randomColor from "randomcolor";

export default function Page(props) {
  console.log({ props });
  return (
    <div>
      <h1
        style={{
          color: randomColor(),
        }}
      >
        THIS PAGE WILL BE RELOADING INFINITELY
      </h1>
    </div>
  );
}
