type CardProps = {
  title: string;
  description: string;
  image: string;
  price?: number;
  author?: string;
};

const Card = ({ title, description, image, price, author }: CardProps) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-lg flex flex-col items-center">
      <img src={image} alt={title} className="w-32 h-32 object-contain mb-4" />
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-sm text-gray-500 text-center mb-2">{description}</p>
      {price ? (
        <p className="text-red-800 font-bold mb-2">Price: ${price}</p>
      ) : (
        <p className="text-gray-800 font-bold mb-2">Author: {author}</p>
      )}
    </div>
  );
};

export default Card;
