import Link from "next/link";
import { Fragment } from "react";


export const Services = () => {
  return (
    <Fragment>
      <li>
        <Link href="/services/hair-care">Hair Care</Link>
      </li>
      <li>
        <Link href="/services/skin-care">Skin Care</Link>
      </li>
      <li>
        <Link href="/services/body-care">Body Care</Link>
      </li>
      <li>
        <Link href="/services/body-waxing">Body Waxing</Link>
      </li>
      <li>
        <Link href="/services/manicures-pedicures">Manicures & Pedicures</Link>
      </li>
      <li>
        <Link href="/services/nails">Nails</Link>
      </li>
    </Fragment>
  );
};

export const About = () => {
  return (
    <Fragment>
      <li>
        <Link href="/overview">Overview</Link>
      </li>
    </Fragment>
  );
};
export const Gallery = () => {
  return (
    <Fragment>
      <li>
        <Link href="/gallery/hair">Hair</Link>
      </li>
      <li>
        <Link href="/gallery/beauty">Beauty</Link>
      </li>
      <li>
        <Link href="/gallery/nails">Nails</Link>
      </li>
    </Fragment>
  );
};

export const Shop = () => {
  return (
    <Fragment>
      <li>
        <Link href="/shop">shop page</Link>
      </li>
      <li>
        <Link href="/product-details">Product details</Link>
      </li>
      <li>
        <Link href="/cart">Cart Page</Link>
      </li>
      <li>
        <Link href="/checkout">Checkout</Link>
      </li>
      <li>
        <Link href="/pricing">pricing</Link>
      </li>
    </Fragment>
  );
};
export const Contact = () => {
  return (
    <Fragment>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </Fragment>
  );
};
