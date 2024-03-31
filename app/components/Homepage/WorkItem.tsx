import Image from "next/image";

type WorkItemProps = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  source: string;
};

const WorkItem = ({
  company,
  role,
  startDate,
  endDate,
  source,
}: WorkItemProps) => {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-white dark:bg-zinc-800 dark:ring-0">
        <Image src={source} width={20} height={20} alt="Company logo" className="" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dt className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-white">
          {company}
        </dt>
        <dt className="sr-only">Role</dt>
        <dt className="text-xs text-zinc-500 dark:text-white">{role}</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-white">
          <time dateTime="2023" className="text-zinc-600 dark:text-white">
            {startDate}
          </time>
          <span>-</span>
          <time dateTime="2023" className="text-zinc-600 dark:text-white">
            {endDate}
          </time>
        </dd>
      </dl>
    </li>
  );
};

export default WorkItem;
