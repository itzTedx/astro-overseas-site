import { IconStarFilled } from "@tabler/icons-react";

export const ReviewStar = () => {
  return (
    <div className="space-y-1.5">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <IconStarFilled
            key={index}
            className="text-yellow-400 last:text-neutral-300"
          />
        ))}
      </div>
      <p className="text-sm">Google Reviews</p>
    </div>
  );
};
