export interface MenuItemVariant {
  label: string;
  price: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  variants?: MenuItemVariant[];
  isVeg?: boolean;
  isNonVeg?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Breakfast Menu",
    items: [
      {
        name: "Masala Omelette",
        price: "₹80",
      },
      {
        name: "Cheese Omelette",
        price: "₹100",
      },
      {
        name: "Sunny Side Up",
        price: "₹70",
      },
      {
        name: "Egg Bhurji",
        price: "₹80",
      },
      {
        name: "Bun Omelite",
        price: "₹90",
      },
      {
        name: "Aloo Parantha",
        price: "₹60",
        isVeg: true,
      },
      {
        name: "Gobhi Parantha",
        price: "₹70",
        isVeg: true,
      },
      {
        name: "Chicken Parantha",
        price: "₹100",
        isNonVeg: true,
      },
      {
        name: "Egg Parantha",
        price: "₹100",
      },
      {
        name: "Paneer Parantha",
        price: "₹100",
        isVeg: true,
      },
      {
        name: "Cheese Parantha",
        description: "served With Pickles",
        price: "₹100",
        isVeg: true,
      },
      {
        name: "Butter Toast",
        price: "₹20",
      },
      {
        name: "Curd",
        price: "₹30",
      },
      {
        name: "Butter",
        price: "₹30",
      },
      {
        name: "Plain Maggi",
        price: "₹60",
      },
      {
        name: "Vegetables Maggi",
        price: "₹80",
      },
      {
        name: "Latavola Special Maggi",
        price: "₹130",
      },
      {
        name: "Chicken Maggi",
        price: "₹30",
      },
      {
        name: "Cheese (extra Topping)",
        price: "₹30",
      },
      {
        name: "Butter Milk",
        description: "Served with Maple Syrup",
        price: "₹200",
      },
      {
        name: "Chocolate Fantasy",
        description: "Served with Melted Chocolate",
        price: "₹230",
      },
      {
        name: "Ice Cream",
        price: "₹30",
      },
    ]
  },
  {
    title: "Italian - Pasta",
    items: [
      {
        name: "Choice Of Pasta (penne/spaghetti) Arrabiata",
        description: "Spicy Tomato Sauce & Parmesan Cheese",
        variants: [
          { label: "Veg", price: "₹280" },
          { label: "Chicken", price: "₹330" },
          { label: "Meat Balls", price: "₹350" },
        ],
      },
      {
        name: "Al Fungi",
        description: "Bechamel Sauce & Parmesan Cheese",
        variants: [
          { label: "Veg", price: "₹280" },
          { label: "Chicken", price: "₹330" },
          { label: "Meat Balls", price: "₹350" },
        ],
      },
      {
        name: "Mix Sauce",
        description: "Combination of Red Sauce & White Sauce & Parmesan Chesse",
        variants: [
          { label: "Veg", price: "₹290" },
          { label: "Chicken", price: "₹340" },
          { label: "Meat Balls", price: "₹360" },
        ],
      },
      {
        name: "Aglio Olio",
        description: "Pasta Tossed In Olive Oil, Garlic, Parsley Chilli Flakes",
        variants: [
          { label: "Veg", price: "₹270" },
          { label: "Chicken", price: "₹320" },
          { label: "Meat Balls", price: "₹340" },
        ],
      },
    ]
  },
  {
    title: "Pizza's - Veg",
    items: [
      {
        name: "Margherita",
        description: "Cheese & Fresh Basil",
        isVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹250" },
          { label: "Large (12 Inch)", price: "₹400" },
        ],
      },
      {
        name: "Farm House",
        description: "Capsicum, Onion, Sundried Tomatoes Black Olives & Jalapeno",
        isVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹300" },
          { label: "Large (12 Inch)", price: "₹440" },
        ],
      },
      {
        name: "Veggie Lover",
        description: "Crispy Onion, Bellpeppers, Green Chilli Tomatoes, Mushroom, Fresh Coriander",
        isVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹330" },
          { label: "Large (12 Inch)", price: "₹460" },
        ],
      },
      {
        name: "Mexican Green Wave",
        description: "Crispy Capsicum, Sauted Onion, Jalapeno, Green Olives, Green Chilli, Cherry Tomatoes",
        isVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹300" },
          { label: "Large (12 Inch)", price: "₹440" },
        ],
      },
      {
        name: "Pesto Pizza",
        description: "Sauted Onion, Fresh Pesto Sauce, Broccoli, Sundried Tomatoes, Black Olives, Bellpeppers",
        isVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹350" },
          { label: "Large (12 Inch)", price: "₹470" },
        ],
      },
      {
        name: "Latavola Special",
        description: "Panner, Onion, Bellpeppers, Mushroom, Broccoli, Black Olives",
        isVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹360" },
          { label: "Large (12 Inch)", price: "₹480" },
        ],
      },
    ]
  },
  {
    title: "Pizza's - Non Veg",
    items: [
      {
        name: "Pepperoni Pizza",
        description: "Pepperoni & Cheese",
        isNonVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹400" },
          { label: "Large (12 Inch)", price: "₹650" },
        ],
      },
      {
        name: "Chicken Lover",
        description: "Barbeque Chicken, Chicken Ham, Grilled Chicken, Chicken Sausage",
        isNonVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹420" },
          { label: "Large (12 Inch)", price: "₹660" },
        ],
      },
      {
        name: "Italian Meat",
        description: "Bacon, Pork Sausage, Grilled Chicken, Chicken Ham, Chicken Meat Ball",
        isNonVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹440" },
          { label: "Large (12 Inch)", price: "₹660" },
        ],
      },
      {
        name: "Bacon & Olive",
        description: "Mozzarella, Bacon & Olives",
        isNonVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹320" },
          { label: "Large (12 Inch)", price: "₹520" },
        ],
      },
      {
        name: "Latavola Special",
        description: "Sauce, Mozzarella, Grilled Chicken Mutton Seekh Kabab, Saute Onion & Cherry Tomatoes",
        isNonVeg: true,
        variants: [
          { label: "Medium (8 Inch)", price: "₹400" },
          { label: "Large (12 Inch)", price: "₹650" },
        ],
      },
      {
        name: "Mutton Seekh",
        description: "Delectable Mutton Seekh Combined With Jalapeno Sauted Onion, Crispy Capsicum, Cherry Tomatoes,Mozzarella",
        isNonVeg: true,
      },
    ]
  },
  {
    title: "Chinese - Starters Veg",
    items: [
      {
        name: "Vegetable Momos (6pc)",
        price: "₹100",
        isVeg: true,
      },
      {
        name: "Tandoori Momos (6pc)",
        price: "₹160",
        isVeg: true,
      },
      {
        name: "Gravy Momos (6pc)",
        price: "₹160",
        isVeg: true,
      },
      {
        name: "Honey Chilli Potato",
        price: "₹150",
        isVeg: true,
      },
    ]
  },
  {
    title: "Chinese - Starters Non Veg",
    items: [
      {
        name: "Chicken Momos",
        price: "₹150",
        isNonVeg: true,
      },
      {
        name: "Chicken Tandoori Momos",
        price: "₹200",
        isNonVeg: true,
      },
      {
        name: "Gravy Momos Chicken",
        price: "₹200",
        isNonVeg: true,
      },
    ]
  },
  {
    title: "Main Course - Noodles",
    items: [
      {
        name: "Veg. Hakka Noodles",
        price: "₹180",
        isVeg: true,
      },
      {
        name: "Chicken Hakka Noodles",
        price: "₹230",
        isNonVeg: true,
      },
      {
        name: "Egg Hakka Noodles",
        price: "₹200",
      },
      {
        name: "Chicken & Bacon Hakka Noodles",
        price: "₹300",
        isNonVeg: true,
      },
    ]
  },
  {
    title: "Main Course - Rice",
    items: [
      {
        name: "Veg. Fried Rice",
        price: "₹180",
        isVeg: true,
      },
      {
        name: "chicken Fried Rice",
        price: "₹250",
        isNonVeg: true,
      },
      {
        name: "Chicken & Bacon Fried Rice",
        price: "₹270",
        isNonVeg: true,
      },
    ]
  },
  {
    title: "Main Course - Gravy's Veg",
    items: [
      {
        name: "Veg. Manchurian",
        price: "₹180",
        isVeg: true,
      },
      {
        name: "Chilli Paneer",
        price: "₹300",
        isVeg: true,
      },
    ]
  },
  {
    title: "Main Course - Non Veg",
    items: [
      {
        name: "Chicken Manchurian",
        price: "₹300",
        isNonVeg: true,
      },
      {
        name: "Chilli Chicken",
        price: "₹300",
        isNonVeg: true,
      },
    ]
  },
  {
    title: "Indian Connect - Delicious Latavola Special Veg",
    items: [
      {
        name: "Paneer Butter Masala",
        isVeg: true,
        variants: [
          { label: "Half", price: "₹300" },
          { label: "Full", price: "₹600" },
        ],
      },
      {
        name: "Kadai Paneer",
        isVeg: true,
        variants: [
          { label: "Half", price: "₹300" },
          { label: "Full", price: "₹600" },
        ],
      },
      {
        name: "Dal Makhani",
        price: "₹200",
        isVeg: true,
      },
      {
        name: "Dal Tadka",
        price: "₹200",
        isVeg: true,
      },
      {
        name: "Mix Veg.",
        isVeg: true,
      },
    ]
  },
  {
    title: "Indian Connect - Non Veg",
    items: [
      {
        name: "Chicken Curry Masala",
        isNonVeg: true,
        variants: [
          { label: "Half", price: "₹300" },
          { label: "Full", price: "₹600" },
        ],
      },
      {
        name: "Delhi Style Mutton Curry",
        price: "₹1200",
        isNonVeg: true,
      },
      {
        name: "Masala Fish Curry",
        price: "₹300",
        isNonVeg: true,
      },
      {
        name: "Egg Curry",
        price: "₹200",
      },
    ]
  },
  {
    title: "Indian Connect - Rice",
    items: [
      {
        name: "Steam Rice",
        price: "₹150",
      },
      {
        name: "Jeera Rice",
        price: "₹170",
      },
    ]
  },
  {
    title: "Indian Connect - Indian Breads",
    items: [
      {
        name: "Tawa Roti",
        price: "₹10",
      },
      {
        name: "Butter Roti",
        price: "₹15",
      },
      {
        name: "Plain Parantha",
        price: "₹20",
      },
      {
        name: "Laccha Parantha",
        price: "₹30",
      },
    ]
  },
  {
    title: "Indian Connect - Raita's",
    items: [
      {
        name: "Mix Raita",
        price: "₹100",
      },
      {
        name: "Boondi Raita",
        price: "₹60",
      },
      {
        name: "Mix Fruit Raita",
        price: "₹100",
      },
      {
        name: "Papad",
        price: "₹30",
      },
    ]
  },
  {
    title: "Beverages - Hot",
    items: [
      {
        name: "Honey Ginger Lemon Tea",
        price: "₹70",
      },
      {
        name: "Coffee",
        price: "₹80",
      },
      {
        name: "Hot Chocolate",
        price: "₹100",
      },
    ]
  },
  {
    title: "Beverages - Shakes",
    items: [
      {
        name: "Strawberry Shake",
        price: "₹120",
      },
      {
        name: "Fresh Banana Shake",
        price: "₹120",
      },
      {
        name: "Strawberry Banana Shake",
        price: "₹140",
      },
      {
        name: "Mango Banana Shake",
        price: "₹140",
      },
      {
        name: "Oreo Shake",
        price: "₹140",
      },
    ]
  },
  {
    title: "Beverages - Cold Coffee",
    items: [
      {
        name: "Plain",
        price: "₹100",
      },
      {
        name: "Ice Cream",
        price: "₹120",
      },
    ]
  },
  {
    title: "Beverages - Smoothies",
    items: [
      {
        name: "Strawberry & Banana",
        price: "₹140",
      },
      {
        name: "Mango & Banana",
        price: "₹140",
      },
    ]
  },
  {
    title: "Beverages - Refreshers",
    items: [
      {
        name: "Fresh Lime Soda",
        price: "₹80",
      },
      {
        name: "Fresh Lime Water",
        price: "₹60",
      },
      {
        name: "Minty Mojito",
        price: "₹140",
      },
      {
        name: "Lemon Ice Tea",
        price: "₹120",
      },
      {
        name: "Peach Ice Tea",
        price: "₹140",
      },
    ]
  },
  {
    title: "Beverages - Aerated",
    items: [
      {
        name: "Thumbs Up, Fanta, Cokezero, Cocacola, Sprite",
        description: "Packaged Water (on Printed Rates)",
      },
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Desserts Will Be Served Freshly as Desserts Of The Day",
      },
    ]
  },
];
