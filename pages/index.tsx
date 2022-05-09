import { GetStaticProps } from "next";
import { Button, P, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
function Home({menu}: HomeProps): JSX.Element {
  return (
    <>
      <Button appearance="ghost">11</Button>
      <P size="sm">123</P>
      <Rating
        rating={0}
        isEditable
      />
      
    </>
  )
}
export default withLayout(Home);


export const getStaticProps : GetStaticProps = async () => {
  const firstCategory = 0
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
  return {
    props : {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record <string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}