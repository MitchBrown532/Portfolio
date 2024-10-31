import React from "react";
import "./SkeletonCard.css"; // Skeleton styling

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-link"></div>
    </div>
  );
}

export default SkeletonCard;
