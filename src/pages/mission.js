import Head from 'next/head';

const MissionPage = () => {
  return (
    <div>
      <Head>
        <title>Our Mission - Future City Real Estate</title>
        <meta name="description" content="Our mission at Future City Real Estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-4">
        <section className="mission mt-8">
          <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg">Our mission is to provide exceptional real estate services...</p>
        </section>
      </main>
    </div>
  );
};

export default MissionPage;
