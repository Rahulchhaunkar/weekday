import { useEffect, useState } from "react";
import { useFetchJobsMutation } from "../../../lib/store";
import PaperComponent from "../../../components/paperComponent";
import { Grid } from "@mui/material";
import {
  CompanyDescriptionComponent,
  CompanyFooterComponent,
  CompanyHeaderComponent,
} from "../../../components";
import FilterComponent from "../header";

const FilterScreen = () => {
  const [limit, setLimit] = useState(10);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fetchJobs, { data: jobData, isFetching }] = useFetchJobsMutation();

  useEffect(() => {
    fetchJobs({ limit: limit, offset: 0 });
  }, [fetchJobs, limit]);
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setScrollPosition(window.scrollY);
        setLimit(limit + 10);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [limit, isFetching, jobData?.jdList, jobData?.totalCount]);
  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition, limit]);
  return (
    <>
      <FilterComponent />
      <Grid container spacing={2}>
        {jobData?.jdList.map((data) => (
          <Grid key={data?.jdUid} item xs={12} sm={6} md={6} lg={4}>
            <PaperComponent>
              <CompanyHeaderComponent
                img={data?.logoUrl}
                companyName={data?.companyName}
                jobRole={data?.jobRole}
                location={data?.location}
                minJdSalary={data?.minJdSalary || 0}
                maxJdSalary={data?.maxJdSalary || 0}
              />
              <CompanyDescriptionComponent
                jobDetailsFromCompany={data?.jobDetailsFromCompany}
              />
              <CompanyFooterComponent minExp={data?.minExp || 0} />
            </PaperComponent>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FilterScreen;
