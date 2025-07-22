import Head from 'next/head';
import GasDashboard from '../components/GasDashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cross-Chain Gas Price Tracker</title>
      </Head>
      <GasDashboard />
    </>
  );
}