type CardProps = {
    title: string;
    description: string;
    image: string;
  };
  
  export default function Card({ title, description, image }: CardProps) {
    return (
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  