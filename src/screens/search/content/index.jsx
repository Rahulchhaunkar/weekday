import React, { useEffect, useState } from "react";
import { useFetchJobsMutation } from "../../../lib/store";
import PaperComponent from "../../../components/paperComponent";
import { Grid, Stack } from "@mui/material";
import { CompanyDescriptionComponent, CompanyHeaderComponent } from "../../../components";


const FilterScreen = () => {
  const [limit, setLimit] = useState(10);
  const [fetchJobs,{data:jobData,isFetching}]=useFetchJobsMutation();

  useEffect(()=>{
    fetchJobs({ "limit": limit ,
    "offset": 0})
  },[fetchJobs,limit])
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching && jobData?.jdList?.length !== jobData?.totalCount ) {
        setLimit(limit + 10);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [limit, isFetching,jobData?.jdList,jobData?.totalCount]);




  console.log(jobData)
  return <>
  <Grid container spacing={1}>
    {/* Check responsive in sm to be made 6 or 12 */}
 {jobData?.jdList.map(data=>
  <Grid  key={data?.jdUid}item xs={12} sm={6} md={6} lg={4}>
    <PaperComponent>
   
<CompanyHeaderComponent img={data?.logoUrl} companyName={data?.companyName} jobRole={data?.jobRole} location={data?.location} minJdSalary={data?.minJdSalary||0} maxJdSalary={data?.maxJdSalary||0}/>
<CompanyDescriptionComponent jobDetailsFromCompany={data?.jobDetailsFromCompany}/>

    </PaperComponent>
</Grid>
  )
    }
  </Grid>
  </>;
};

export default FilterScreen;
