import Head from 'next/head';

const VisionPage = () => {
  return (
    <div>
      <Head>
        <title>Our Vision - Future City Real Estate</title>
        <meta name="description" content="Our vision for the future of real estate in Future City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-4">
        <section className="vision mt-8">
          <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
          <p className="text-lg">Our vision is to be the leading real estate agency...</p>
        </section>
      </main>
    </div>
  );
};

export default VisionPage;
