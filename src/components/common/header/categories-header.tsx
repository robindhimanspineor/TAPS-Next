import Link from 'next/link';
const CategoriesHeader = () => {
  return (
    <div className="header-categories w-screen max-w-screen-xl flex justify-between ">
      <Link href="/">
        <a className="m-2.5 text-black">Top Categories</a>
      </Link>
      <Link href="/air-and-fuel-delivery">
        <a className="m-2.5 text-black">Air and Fuel Delivery</a>
      </Link>
      <Link href="/suspension">
        <a className="m-2.5 text-black">Suspension</a>
      </Link>
      <Link href="/electrical-lighting-and-body">
        <a className="m-2.5 text-black">Lighting</a>
      </Link>
      <Link href="/exhaust">
        <a className="m-2.5 text-black">Exhaust</a>
      </Link>
      <Link href="/brake">
        <a className="m-2.5 text-black">Brake</a>
      </Link>
      <Link href="/tire-and-wheel">
        <a className="m-2.5 text-black">Tire and Wheel</a>
      </Link>
      <Link href="/hvac">
        <a className="m-2.5 text-black">HVAC</a>
      </Link>
      <Link href="/ignition">
        <a className="m-2.5 text-black">Ignition</a>
      </Link>
      <Link href="/engine">
        <a className="m-2.5 text-black">Engine</a>
      </Link>
      <Link href="/emission-control">
        <a className="m-2.5 text-black">Emission Control</a>
      </Link>
    </div>
  );
};

export default CategoriesHeader;
