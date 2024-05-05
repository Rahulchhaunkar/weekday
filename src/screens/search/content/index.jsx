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
  const [fetchJobs, { data: jobData, isFetching }] = useFetchJobsMutation();
  const [filters, setFilters] = useState({
    role: "",
    employeeCount: 0,
    experience: 0,
    remote: false,
    minSalary: 0,
    companyName: "",
  });

  const handleFieldChange = (e) => {
    setFilters((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const resetFilters = () => {
    setFilters({
      role: "",
      employeeCount: 0,
      experience: 0,
      remote: false,
      minSalary: 0,
      companyName: "",
    });
  };
  const filteredData = jobData?.jdList?.filter((item) => {
    return (
      (!filters.role || item?.jobRole === filters?.role) &&
      (!filters.employeeCount ||
        item.employeeCount === filters.employeeCount) &&
      (!filters.experience || item.minExp === filters.experience) &&
      (!filters.remote || item.remote === filters.remote) &&
      (!filters.minSalary || item.salary >= filters.minSalary) &&
      (!filters.companyName || item.companyName === filters.companyName)
    );
  });
  useEffect(() => {
    fetchJobs({ limit: limit, offset: 0 });
  }, [fetchJobs, limit]);
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setLimit(limit + 10);
      }
    };
    document.addEventListener("scroll", onScroll);
    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [limit, isFetching, jobData?.jdList, jobData?.totalCount]);

  useEffect(() => {}, [
    filters?.role,
    filters?.employeeCount,
    filters?.experience,
    filters?.remote,
    filters?.minSalary,
    filters?.companyName,
  ]);
  return (
    <>
      <FilterComponent
        reset={resetFilters}
        role={filters?.role}
        remote={filters?.remote}
        minSalary={filters?.minSalary}
        experience={filters?.experience}
        companyName={filters?.companyName}
        handleFieldChange={handleFieldChange}
        employeeCount={filters?.employeeCount}
      />
      <Grid container spacing={2}>
        {filteredData?.map((data) => (
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
