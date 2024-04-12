"use client";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="">
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Heading;
