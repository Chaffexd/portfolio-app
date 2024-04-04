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
  timeToRead: {
    minutes: number;
    words: number;
    text: string;
  };
};

const Author = ({ author, timeToRead }: AuthorProps) => {
  const { name, image } = author.fields;

  return (
    <div className="flex mb-8 items-center">
      <Image
        src={`https:${image.fields.file.url}`}
        alt="A photo of Shane"
        height={200}
        width={200}
        className="rounded-full h-12 w-12 bg-center bg-cover mr-4"
      />
      <div>
        <p className="text-md text-slate-800 dark:text-slate-200">{name} </p>
        <p className="text-sm text-slate-600 dark:text-slate-200">{`${timeToRead.minutes} min read ⏳`}</p>
      </div>
    </div>
  );
};

export default Author;
