import fetcher from "../../utils/fetcher/fetcher"
import useSWR from 'swr'
import CustomLoader from "../CustomLoader"


function FetchData() {
    const { data, error, isLoading } = useSWR(['/api/cpm/list'], fetcher)
    console.log("darar", data)

    if (error) return <div>failed to load</div>
    if (isLoading) return <CustomLoader />
    if (data) return <>

        {console.log("darar", data)}

    </>
}

export default FetchData;