import Link from 'next/link';
const CategoriesHeader = () => {
  return (
    <div className="header-categories">
      <Link href="/">Top Categories</Link>
      <Link href="/air-and-fuel-delivery">Air and Fuel Delivery</Link>
      <Link href="/suspension">Suspension</Link>
      <Link href="/electrical-lighting-and-body">Lighting</Link>
      <Link href="/exhaust">Exhaust</Link>
      <Link href="/brake">Brake</Link>
      <Link href="/tire-and-wheel">Tire and Wheel</Link>
      <Link href="/hvac">HVAC</Link>
      <Link href="/ignition">Ignition</Link>
      <Link href="/engine">Engine</Link>
      <Link href="/emission-control">Emission Control</Link>
    </div>
  );
};

export default CategoriesHeader;
