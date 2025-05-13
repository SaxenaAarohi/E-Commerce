import React from 'react';

const HomeCardSection = () => {
  const cards = [
    {
      title: 'Continue shopping deals',
      items: [
        'https://m.media-amazon.com/images/I/71tIrZqybrL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71K9CbNZPsL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg',
      ],
      linkText: 'See all deals',
    },
    {
      title: 'Appliances for your home | Up to 55% off',
      items: [
        {
          name: 'Air conditioners',
          img: 'https://m.media-amazon.com/images/I/61pV1n2rWLL._AC_SL1500_.jpg',
        },
        {
          name: 'Refrigerators',
          img: 'https://m.media-amazon.com/images/I/71s2p3ZqY-L._AC_SL1500_.jpg',
        },
        {
          name: 'Microwaves',
          img: 'https://m.media-amazon.com/images/I/71Z1bZ0I5CL._AC_SL1500_.jpg',
        },
        {
          name: 'Washing machines',
          img: 'https://m.media-amazon.com/images/I/71N1eLrYJ2L._AC_SL1500_.jpg',
        },
      ],
      linkText: 'See more',
    },
    {
      title: 'Revamp your home in style',
      items: [
        {
          name: 'Cushion covers, bedsheets & more',
          img: 'https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_SL1500_.jpg',
        },
        {
          name: 'Figurines, vases & more',
          img: 'https://m.media-amazon.com/images/I/71xBLRBYOiL._AC_SL1500_.jpg',
        },
        {
          name: 'Home storage',
          img: 'https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SL1500_.jpg',
        },
        {
          name: 'Lighting solutions',
          img: 'https://m.media-amazon.com/images/I/71c5Vn4uPFL._AC_SL1500_.jpg',
        },
      ],
      linkText: 'Explore all',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-100">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">{card.title}</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {card.items.map((item, i) =>
              typeof item === 'string' ? (
                <img
                  key={i}
                  src={item}
                  alt={`Product ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              ) : (
                <div key={i}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-24 object-cover mb-1 rounded"
                  />
                  <p className="text-sm">{item.name}</p>
                </div>
              )
            )}
          </div>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            {card.linkText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomeCardSection;
