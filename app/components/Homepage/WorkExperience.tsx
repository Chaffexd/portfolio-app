import Work from "../icons/Work";
import WorkItem from "./WorkItem";

const WorkExperience = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 xl:mr-24">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Work />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        <WorkItem
          company={"Contentful"}
          role={"Senior Technical Account Manager"}
          startDate={"2024"}
          endDate={"Present"}
          source={"/images/contentful.svg"}
        />
        <WorkItem
          company={"Contentful"}
          role={"Customer Support Engineer"}
          startDate={"2023"}
          endDate={"2024"}
          source={"/images/contentful.svg"}
        />
        <WorkItem
          company={"Sauce Labs"}
          role={"Customer Support Engineer"}
          startDate={"2022"}
          endDate={"2023"}
          source={"/images/saucelabs.svg"}
        />
        <WorkItem
          company={"OneTrust"}
          role={"Customer Support Engineer"}
          startDate={"2021"}
          endDate={"2022"}
          source={"/images/onetrust.svg"}
        />
        <WorkItem
          company={"Apple"}
          role={"Genius"}
          startDate={"2017"}
          endDate={"2021"}
          source={"/images/apple.svg"}
        />
      </ol>
    </div>
  );
};

export default WorkExperience;
