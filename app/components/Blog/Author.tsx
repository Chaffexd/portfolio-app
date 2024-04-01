import Image from "next/image";

type AuthorProps = {
  author: {
    fields: {
      name: string;
      image: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
};

const Author = ({ author }: AuthorProps) => {
  const { name, image } = author.fields;

  return (
    <div className="flex items-center mb-8">
      <Image
        src={`https:${image.fields.file.url}`}
        alt="A photo of Shane"
        height={200}
        width={200}
        className="rounded-full h-20 w-20 bg-center bg-cover mr-4"
      />
      <p className="text-xl text-slate-600 dark:text-slate-200">{name}</p>
    </div>
  );
};

export default Author;
