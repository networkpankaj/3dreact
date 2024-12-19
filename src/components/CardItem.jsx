// import React, { forwardRef } from 'react';
// import { CardData } from '../types/Card';

// interface CardItemProps {
//   card: CardData;
// }

// export const CardItem = forwardRef<HTMLDivElement, CardItemProps>(({ card }, ref) => {
//   const { icon: Icon, title, description } = card;

//   return (
//     <div
//       ref={ref}
//       className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//     >
//       <Icon className="w-12 h-12 text-blue-600 mb-4" />
//       <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// });

import React, { forwardRef } from 'react';

export const CardItem = forwardRef(({ card }, ref) => {
  const { icon: Icon, title, description } = card;

  return (
    <div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
});
