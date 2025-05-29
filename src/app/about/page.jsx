import React from "react";
import Image from "next/image";
import bgImageAbout from "../../../public/images/about.png";
import img1 from "../../../public/images/about-left.png";
import img2 from "../../../public/images/about-right.png";
import img3 from "../../../public/images/about-right2.png";

export default function About() {
  return (
    <div>
      {/* Header section with background + black overlay */}
      <div
        className="relative h-96 flex items-center justify-end"
        style={{
          backgroundImage: `url(${bgImageAbout.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white p-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            animi facere sed quod similique fugiat, reprehenderit quisquam eius
            at quis quia non commodi esse numquam voluptatibus tempora
            exercitationem qui illum?
          </p>
        </div>
      </div>

      {/* About sections */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-5/12">
            <h2 className="text-2xl font-bold mb-2">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sit illo praesentium eaque id eius voluptas, alias
              aliquam, cum labore, fuga cumque hic. Id eaque cupiditate, numquam
              iusto impedit beatae.
            </p>
          </div>
          <div className="md:w-7/12">
            <Image
              src={img2}
              alt="About section 1"
              className="rounded shadow"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-5/12">
            <h2 className="text-2xl font-bold mb-2">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sit illo praesentium eaque id eius voluptas, alias
              aliquam, cum labore, fuga cumque hic. Id eaque cupiditate, numquam
              iusto impedit beatae.
            </p>
          </div>
          <div className="md:w-7/12">
            <Image
              src={img1}
              alt="About section 2"
              className="rounded shadow"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-5/12">
            <h2 className="text-2xl font-bold mb-2">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sit illo praesentium eaque id eius voluptas, alias
              aliquam, cum labore, fuga cumque hic. Id eaque cupiditate, numquam
              iusto impedit beatae.
            </p>
          </div>
          <div className="md:w-7/12">
            <Image
              src={img3}
              alt="About section 3"
              className="rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
