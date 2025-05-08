import React from "react";

interface CardArticlesProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
  tags: string[];
}

const CardArticles: React.FC<CardArticlesProps> = ({
  title,
  description,
  imageUrl,
  onClick,
  tags = [],
}) => {
  return (
    <div
      className="w-[335px] h-fit pb-2 sm:w-[387px] sm:h-[432px] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[240px] object-cover rounded-md"
      />
      <div className="pt-4">
        <p
          className="text-xs sm:text-sm font-normal"
          style={{ fontFamily: "Archivo" }}
        >
          February 4, 2025
        </p>
        <h3
          className="text-base sm:text-lg font-semibold mb-2 mt-[8px] text-slate-900"
          style={{ fontFamily: "Archivo" }}
        >
          {title}
        </h3>
        <p
          className="text-sm font-normal text-slate-600 mt-[8px]"
          style={{ fontFamily: "Archivo" }}
        >
          {description}
        </p>
        <div
          className={`${
            tags.length > 0 ? "flex flex-wrap gap-2" : ""
          } mt-[12px]`}
        >
          {tags.map((tag, index) => (
            <p
              key={index}
              className="rounded-full text-blue-900 bg-blue-200 w-auto text-sm font-normal p-1"
              style={{ fontFamily: "Archivo" }}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardArticles;
