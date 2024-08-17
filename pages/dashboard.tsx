import React from "react";
import DashBordBarent from "@/Components/dashboard/DashBordBarent";
import Head from "next/head";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Overview of your Dashboard" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="caching, data insights, movies , " />

        <meta property="og:title" content="Dashboard page" />
        <meta
          property="og:description"
          content="Learn more about our caching capabilities and data insights."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="url_to_an_image_that_represents_the_page"
        />
      </Head>
      <DashBordBarent />
    </>
  );
};

export default React.memo(Dashboard);
