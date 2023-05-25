import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Grid,
  LegacyCard
} from "@shopify/polaris";
import {
  Chart as ChartJS,
  
} from 'chart.js';
import {Bar}from 'react-chartjs-2';
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";


export default function HomePage() {
  const data={
    labels:['Mon','Tue','Wed'],
    datasets:[
      {
        label: '369',
        data: [3,6,9],
        backgroundColor: 'aqua',
        borderColor:'black',
        borderWidth: 1,
      }
    ]
  }
  const options={

  }
  
  return (
    <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard title="Sales" sectioned>
            <p>View a summary of your online store’s sales.</p>
          </LegacyCard>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>
        </Grid.Cell>
      </Grid>
      
      <Layout>
        <Layout.Section>
          <Bar
            data={data}
            options={options}
          
          
          ></Bar>
        </Layout.Section>
      </Layout>
      
        
    </Page>
  );
}
    
