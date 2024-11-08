import Image from "next/image";

const Gallery = () => {
  const images = [
    "https://electrox.arenacommerce.com/cdn/shop/files/home-1-baner-1.jpg?v=1649835728&width=360",
    "https://electrox.arenacommerce.com/cdn/shop/files/home-1-baner-2.jpg?v=1649835736&width=360",
    "https://electrox.arenacommerce.com/cdn/shop/files/home-1-baner-3.jpg?v=1649835746&width=360",
    "https://electrox.arenacommerce.com/cdn/shop/files/home-1-baner-4.png?v=1649835757&width=360",
  ];

  return (
    <div className="container mx-auto flex justify-between gap-8">
      {images.map((img, index) => (
        <div key={index} className="bg-gray-100 rounded-lg shadow-md">
          <Image
            src={img}
            alt={`Gallery Image ${index + 1}`}
            width={360}
            height={360}
            layout="responsive"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
