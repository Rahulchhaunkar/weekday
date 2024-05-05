import { useEffect, useState } from "react";
import { useFetchJobsMutation } from "../../../lib/store";
import PaperComponent from "../../../components/paperComponent";
import { Grid } from "@mui/material";
import {
  CompanyDescriptionComponent,
  CompanyFooterComponent,
  CompanyHeaderComponent,
  LoaderComponent,
} from "../../../components";
import FilterComponent from "../header";

const FilterScreen = () => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [fetchJobs, { data: jobData, isFetching, isLoading }] =
    useFetchJobsMutation();
  const [filters, setFilters] = useState({
    role: "",
    employeeCount: 0,
    experience: 0,
    remote: false,
    minSalary: 0,
    companyName: "",
  });
  //Filter Change Handler
  const handleFieldChange = (e) => {
    setFilters((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  //Filter Reset Handler
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
  const filteredData = items?.filter((item) => {
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
  const fetchData = async () => {
    const response = await fetchJobs({ offset: offset, limit: 10 });
    console.log(response);
    setItems((prevItems) => [...prevItems, ...response.data.jdList]);
  };
  useEffect(() => {
    fetchData();
  }, [offset]);

  useEffect(() => {
    if (items.length > 0) {
      const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          // Fetch more data when user reaches the bottom
          setOffset((prevOffset) => prevOffset + 10);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [items]);
  return (
    <>
      <LoaderComponent open={isFetching || isLoading} />
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
