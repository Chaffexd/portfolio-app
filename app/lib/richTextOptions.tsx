import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

export const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => {
      return <h1 className="font-bold text-3xl">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      return <h2 className="font-bold text-2xl">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      return <h3 className="font-bold text-xl">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node: any, children: any) => {
      return <h4 className="font-bold text-lg">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node: any, children: any) => {
      return <h5 className="font-bold text-lg">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node: any, children: any) => {
      return <h6 className="font-bold text-lg">{children}</h6>;
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return <ul className="list-disc">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
      return <li className="my-4">{children}</li>;
    },
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      return <li className="my-4">{children}</li>;
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return <p className="mb-2 text-slate-700">{children}</p>;
    },
    [BLOCKS.TABLE]: (node: any, children: any) => {
      return (
        <table>
          <tbody>{children}</tbody>
        </table>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      console.log(node.data.target.fields.file.url);
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.title}
          width={300}
          height={300}
          className="lg:w-1/4 my-4 rounded-lg"
        />
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <Link
          target="_blank"
          href={node.data.uri}
          className="text-blue-600 hover:underline"
          style={{ wordWrap: "break-word" }}
        >
          {children}
        </Link>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
      // node.data.fields holds description, language, code
      // console.log(node.data.target.fields.code);
      const { code, language } = node.data.target.fields;
      return (
        <SyntaxHighlighter style={vscDarkPlus} language={language}>
          {code}
        </SyntaxHighlighter>
      );
    },
  },
};
