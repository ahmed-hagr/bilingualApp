import React from "react";
import BookingParent from "@/Components/Bookin/BookingParent";
import Head from "next/head";

const cars = () => {
  return (
    <>
      <Head>
        <title>Cars</title>
        <meta name="description" content="Overview of your Cars" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="caching, data insights, movies , " />

        <meta property="og:title" content="Cars page" />
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

      <BookingParent />
    </>
  );
};

export default React.memo(cars);
