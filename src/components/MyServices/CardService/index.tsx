import Link from "next/link";

type CardServiceProps = {
  href?: String,
  title?: React.ReactNode,
  image?: React.ReactNode,

}

export function CardService({ href, image, title }: CardServiceProps) {

  return (

    <div className="card border-[2px] border-transparent bg-brand-primary p-8 hover:border-brand-third ease-in-out duration-200 rounded-xl cursor-pointer">
      <Link
        className="text-color-white text-center my-3 text-xl "
        href={`${href}`}
        target="_blank">
        <h1 >{title}</h1>
        <div className="image-portifolio p-3 mt-5">
          {image}
        </div>
      </Link>
    </div>
  );
}
