import Image from "next/image";

const Author = ({ author }) => {
  console.log("AUTHOR = ", author);

  const { name, image } = author.fields;
  console.log("image", image);
  return (
    <div className="flex">
      <Image
        src={`https:${image.fields.file.url}`}
        alt="A photo of Shane"
        height={200}
        width={200}
        className="rounded-full h-28 w-28"
      />
      <p className="text-2xl">{name}</p>
    </div>
  );
};

export default Author;
