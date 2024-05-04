import React, { useEffect } from "react";
import { useFetchJobsMutation } from "../../../lib/store";
import PaperComponent from "../../../components/paperComponent";
import { Grid, Stack } from "@mui/material";
import { CompanyDescriptionComponent, CompanyHeaderComponent } from "../../../components";


const FilterScreen = () => {
  const [page, setPage] = useState(0);
  const body =({
    "limit": 10,
    "offset": 0
  });
  const [fetchJobs,{data:jobData,isLoading,isError,isSuccess}]=useFetchJobsMutation(body);

  useEffect(()=>{
    fetchJobs()
  },[fetchJobs])
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);




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
