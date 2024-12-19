// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Zap, Target, Trophy, Users } from 'lucide-react';
// import { CardData } from '../types/Card';
// import { CardItem } from './CardItem';

// gsap.registerPlugin(ScrollTrigger);

// const cards: CardData[] = [
//   {
//     icon: Zap,
//     title: "Fast Performance",
//     description: "Lightning-fast solutions that keep your business running efficiently"
//   },
//   {
//     icon: Target,
//     title: "Precision Focus",
//     description: "Targeted strategies that hit the mark every time"
//   },
//   {
//     icon: Trophy,
//     title: "Proven Success",
//     description: "Track record of delivering outstanding results"
//   },
//   {
//     icon: Users,
//     title: "Expert Team",
//     description: "Skilled professionals dedicated to your success"
//   }
// ];

// const Cards = () => {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const cards = cardsRef.current.filter(Boolean); // Remove null values

//     // Section title animation
//     gsap.fromTo(section,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 0.6,
//         scrollTrigger: {
//           trigger: section,
//           start: "top bottom-=100",
//           end: "bottom top+=100",
//           toggleActions: "play reverse play reverse",
//         }
//       }
//     );

//     // Cards animation
//     cards.forEach((card, index) => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: card,
//           start: "top bottom-=100",
//           end: "bottom top+=100",
//           toggleActions: "play reverse play reverse",
//         }
//       });

//       tl.fromTo(card,
//         {
//           opacity: 0,
//           x: index % 2 === 0 ? -50 : 50,
//           y: 30,
//         },
//         {
//           opacity: 1,
//           x: 0,
//           y: 0,
//           duration: 0.8,
//           delay: index * 0.15,
//           ease: "power2.out",
//         }
//       );
//     });

//     return () => {
//       // Cleanup all ScrollTrigger instances
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="py-20 bg-gray-50" ref={sectionRef}>
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           Why Choose Us
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {cards.map((card, index) => (
//             <CardItem
//               key={index}
//               ref={el => cardsRef.current[index] = el}
//               card={card}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target, Trophy, Users } from 'lucide-react';
import { CardItem } from './CardItem';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast solutions that keep your business running efficiently"
  },
  {
    icon: Target,
    title: "Precision Focus",
    description: "Targeted strategies that hit the mark every time"
  },
  {
    icon: Trophy,
    title: "Proven Success",
    description: "Track record of delivering outstanding results"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals dedicated to your success"
  }
];

const Cards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean); // Remove null values

    // Section title animation
    gsap.fromTo(section,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    // Cards animation
    cards.forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play reverse play reverse",
        }
      });

      tl.fromTo(card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          y: 30,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
        }
      );
    });

    return () => {
      // Cleanup all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <CardItem
              key={index}
              ref={el => cardsRef.current[index] = el}
              card={card}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
