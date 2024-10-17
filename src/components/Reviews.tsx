import React from 'react';

const reviews = [
  {
    name: "John Smith",
    company: "ABC Logistics",
    review: "Implementing this fleet management solution has significantly improved our operational efficiency and reduced costs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Sarah Johnson",
    company: "XYZ Transport",
    review: "The real-time tracking and analytics have given us unprecedented visibility into our fleet operations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Michael Brown",
    company: "123 Delivery Services",
    review: "The customer support team is exceptional. They've been there every step of the way to ensure smooth implementation and operation.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  }
];

const Reviews: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
            <p className="italic mb-4">"{review.review}"</p>
            <p className="font-semibold text-center">{review.name}</p>
            <p className="text-sm text-gray-600 text-center">{review.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;