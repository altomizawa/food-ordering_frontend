import appetizer from '../images/appetizers.jpg';
import pasta from '../images/carbonara.jpg';
import pizza from '../images/margherita pizza.jpg';
import dessert from '../images/cannoli.jpg';
import beverage from '../images/beverage.jpg';

const menuArray = [
  {
    category: 'Appetizers',
    image: appetizer,
    id: 0,
    items: [
      {
        id: 0,
        name: 'Bruschetta',
        category: 'Appetizers',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus velit accusamus incidunt hic ipsam.',
        link: 'https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 15,
        onSale: false,
        salePrice: 10,
      },
      {
        id: 1,
        name: 'Caprese Salad',
        category: 'Appetizers',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus velit accusamus incidunt hic ipsam.',
        link: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 10,
        onSale: false,
        salePrice: 7,
      },
      {
        id: 2,
        name: 'Carpaccio',
        category: 'Appetizers',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus velit accusamus incidunt hic ipsam.',
        link: 'https://images.unsplash.com/photo-1508471349025-ca3e278cf5e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 12,
        onSale: false,
        salePrice: 9,
      },
      {
        id: 3,
        name: 'Insalata Romana',
        category: 'Appetizers',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus velit accusamus incidunt hic ipsam.',
        link: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 10,
        onSale: false,
        salePrice: 8,
      },
      {
        id: 4,
        name: 'Antipasto Platter',
        category: 'Appetizers',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus velit accusamus incidunt hic ipsam.',
        link: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 18,
        onSale: false,
        salePrice: 12,
      },
      {
        id: 5,
        name: 'Suppli',
        category: 'Appetizers',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus velit accusamus incidunt hic ipsam.',
        link: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 13,
        onSale: false,
        salePrice: 8,
      },
    ],
  },
  {
    category: 'Pasta',
    image: pasta,
    id: 1,
    items: [
      {
        id: 6,
        name: 'Spaghetti Carbonara',
        description:
          'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
        price: 12,
        salePrice: 10,
        category: 'Pasta',
        onSale: false,
        link: 'https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 7,
        name: 'Fettuccine Alfredo',
        description:
          'Creamy Alfredo sauce tossed with fettuccine pasta and garnished with parsley.',
        price: 15,
        salePrice: 12,
        category: 'Pasta',
        onSale: false,
        link: '',
      },
      {
        id: 8,
        name: 'Penne Arrabiata',
        description:
          'Spicy tomato sauce combined with penne pasta and topped with fresh basil.',
        price: 11,
        salePrice: 9,
        category: 'Pasta',
        onSale: false,
        link: '',
      },
      {
        id: 9,
        name: 'Lasagna Bolognese',
        description:
          'Layers of pasta sheets, Bolognese sauce, béchamel, and melted cheese.',
        price: 18,
        salePrice: 15,
        category: 'Pasta',
        onSale: false,
        link: '',
      },
      {
        id: 10,
        name: 'Ravioli Ricotta e Spinaci',
        description:
          'Homemade ravioli filled with ricotta cheese and spinach served with marinara sauce.',
        price: 16,
        salePrice: 13,
        category: 'Pasta',
        onSale: false,
        link: '',
      },
      {
        id: 11,
        name: 'Pasta Primavera',
        description:
          'Colorful pasta dish featuring assorted vegetables and a light garlic sauce.',
        price: 14,
        salePrice: 11,
        category: 'Pasta',
        onSale: false,
        link: '',
      },
      {
        id: 12,
        name: 'Gnocchi Sorrentina',
        description:
          'Soft potato dumplings baked with tomato sauce, mozzarella, and basil.',
        price: 17,
        salePrice: 14,
        category: 'Pasta',
        onSale: false,
        link: '',
      },
      {
        id: 13,
        name: 'Linguine alle Vongole',
        description:
          'Linguine pasta served with fresh clams, garlic, white wine, and parsley.',
        price: 20,
        salePrice: 16,
        category: 'Pasta',
        onSale: false,
        link: '',
      },
    ],
  },
  {
    category: 'Pizza',
    image: pizza,
    id: 2,
    items: [
      {
        id: 14,
        name: 'Margherita Pizza',
        category: 'Pizza',
        description:
          'Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
        price: 12,
        salePrice: 10,
        link: '',
        onSale: false,
      },
      {
        id: 15,
        name: 'Pepperoni Pizza',
        category: 'Pizza',
        description:
          'Traditional pizza with pepperoni slices and melted mozzarella cheese on top.',
        price: 14,
        salePrice: 12,
        link: '',
        onSale: false,
      },
      {
        id: 16,
        name: 'Vegetarian Pizza',
        category: 'Pizza',
        description:
          'Delicious pizza loaded with assorted vegetables and gooey cheese on a crispy crust.',
        price: 13,
        salePrice: 11,
        link: '',
        onSale: false,
      },
      {
        id: 17,
        name: 'Hawaiian Pizza',
        category: 'Pizza',
        description:
          'A tropical twist on pizza with ham, pineapple, and mozzarella cheese.',
        price: 15,
        salePrice: 13,
        link: '',
        onSale: false,
      },
      {
        id: 18,
        name: 'BBQ Chicken Pizza',
        category: 'Pizza',
        description:
          'Savory pizza topped with BBQ sauce, grilled chicken, onions, and mozzarella cheese.',
        price: 16,
        salePrice: 14,
        link: '',
        onSale: false,
      },
      {
        id: 19,
        name: 'Supreme Pizza',
        category: 'Pizza',
        description:
          'Loaded with all your favorite toppings like pepperoni, sausage, peppers, and onions.',
        price: 18,
        salePrice: 15,
        link: '',
        onSale: false,
      },
      {
        id: 20,
        name: 'White Pizza',
        category: 'Pizza',
        description:
          'Garlic-infused olive oil base topped with ricotta, mozzarella, and Parmesan cheese.',
        price: 17,
        salePrice: 14,
        link: '',
        onSale: false,
      },
      {
        id: 21,
        name: 'Buffalo Chicken Pizza',
        category: 'Pizza',
        description:
          'Spicy buffalo chicken, tangy sauce, and melted cheese on a crispy pizza crust.',
        price: 16,
        salePrice: 13,
        link: '',
        onSale: false,
      },
      {
        id: 22,
        name: 'Mushroom Pizza',
        category: 'Pizza',
        description:
          'Delicious pizza topped with fresh mushrooms, mozzarella cheese, and herbs.',
        price: 14,
        salePrice: 12,
        link: '',
        onSale: false,
      },
    ],
  },
  {
    category: 'Dessert',
    image: dessert,
    id: 3,
    items: [
      {
        id: 24,
        name: 'Margherita Pizza',
        category: 'Pizza',
        description:
          'Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
        price: 12,
        salePrice: 10,
        link: '',
        onSale: false,
      },
      {
        id: 25,
        name: 'Pepperoni Pizza',
        category: 'Pizza',
        description:
          'Traditional pizza with pepperoni slices and melted mozzarella cheese on top.',
        price: 14,
        salePrice: 12,
        link: '',
        onSale: false,
      },
      {
        id: 26,
        name: 'Vegetarian Pizza',
        category: 'Pizza',
        description:
          'Delicious pizza loaded with assorted vegetables and gooey cheese on a crispy crust.',
        price: 13,
        salePrice: 11,
        link: '',
        onSale: false,
      },
      {
        id: 27,
        name: 'Hawaiian Pizza',
        category: 'Pizza',
        description:
          'A tropical twist on pizza with ham, pineapple, and mozzarella cheese.',
        price: 15,
        salePrice: 13,
        link: '',
        onSale: false,
      },
    ],
  },
  {
    category: 'Beverages',
    image: beverage,
    id: 4,
    items: [
      {
        id: 18,
        name: 'BBQ Chicken Pizza',
        category: 'Pizza',
        description:
          'Savory pizza topped with BBQ sauce, grilled chicken, onions, and mozzarella cheese.',
        price: 16,
        salePrice: 14,
        link: '',
        onSale: false,
      },
      {
        id: 19,
        name: 'Supreme Pizza',
        category: 'Pizza',
        description:
          'Loaded with all your favorite toppings like pepperoni, sausage, peppers, and onions.',
        price: 18,
        salePrice: 15,
        link: '',
        onSale: false,
      },
      {
        id: 20,
        name: 'White Pizza',
        category: 'Pizza',
        description:
          'Garlic-infused olive oil base topped with ricotta, mozzarella, and Parmesan cheese.',
        price: 17,
        salePrice: 14,
        link: '',
        onSale: false,
      },
      {
        id: 21,
        name: 'Buffalo Chicken Pizza',
        category: 'Pizza',
        description:
          'Spicy buffalo chicken, tangy sauce, and melted cheese on a crispy pizza crust.',
        price: 16,
        salePrice: 13,
        link: '',
        onSale: false,
      },
      {
        id: 22,
        name: 'Mushroom Pizza',
        category: 'Pizza',
        description:
          'Delicious pizza topped with fresh mushrooms, mozzarella cheese, and herbs.',
        price: 14,
        salePrice: 12,
        link: '',
        onSale: false,
      },
      {
        id: 23,
        name: 'Sausage Pizza',
        category: 'Pizza',
        description:
          "Savory sausage slices and gooey cheese on a crispy crust, a pizza lover's favorite.",
        price: 15,
        salePrice: 12,
        link: '',
        onSale: false,
      },
    ],
  },
];

export { menuArray };
