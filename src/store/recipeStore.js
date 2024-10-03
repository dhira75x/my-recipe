import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecipeStore = defineStore("recipeStore", () => {
  const recipes = ref([
    {
      id: 1,
      name: "Spaghetti Bolognese",
      ingredients: "Pasta, Tomatoes, Meat, Onion, Garlic",
      description: "A classic Italian pasta dish with rich meat sauce.",
      image: "/spaghetti-bolognese.jpg",
    },
    {
      id: 2,
      name: "Chicken Tikka Masala",
      ingredients: "Pasta, Tomatoes, Meat, Onion, Garlic",
      description: "A popular Indian dish with spicy and creamy tomato sauce.",
      image: "/chicken-tikka-masala.jpg",
    },
    {
      id: 3,
      name: "Vegan Buddha Bowl",
      ingredients: "Pasta, Tomatoes, Meat, Onion, Garlic",
      description:
        "A healthy mix of grains, veggies, and protein for a balanced meal.",
      image: "/vegan-buddha-bowl.webp",
    },
    {
      id: 4,
      name: "Spaghetti Carbonara",
      ingredients: "Pasta, Tomatoes, Meat, Onion, Garlic",
      description:
        "A classic Italian pasta dish with creamy sauce and pancetta.",
      image: "/spaghetti-carbonara.jpg",
    },
    {
      id: 5,
      name: "Simple Omelette",
      ingredients: "Eggs, Salt, Chopped Vegetables, Butter or Oil",
      description:
        "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection.",
      image: "/image-omelette.jpeg",
    },
    {
      id: 6,
      name: "Italian Pasta Salad",
      ingredients:
        "Rotini pasta, Salami, Grape tomatoes, Black olives, Mozzarella cheese pearls,Parmesan, Lemon etc.",
      description:
        "Loaded and refreshing Italian Pasta Salad! Made with tender pasta, smoked salami, fresh veggies and herbs, two types of cheese, and a tangy homemade Italian dressing.",
      image: "/italian-pasta-salad.jpeg",
    },
    {
      id: 7,
      name: "Chicken Caesar Pasta Salad",
      ingredients:
        "Anchovies, Salami, Dijon mustard, Worcestershire sauce, Garlic,Parmesan cheese, Penne pasta etc.",
      description:
        "It is a delicious blend of two incredible side dishes, pasta salad meets a traditional green salad. It’s brimming with vibrant flavor, has a satisfying blend of textures,",
      image: "/chicken-caesar-pasta-salad.jpg",
    },
    {
      id: 8,
      name: "Thai Chicken Lettuce Wraps",
      ingredients:
        "Soy sauce, Fish sauce, Sesame oil, Red bell pepper, Carrots, Garlic,Turkey or Chicken, Lettuce etc.",
      description:
        "Thai Chicken Lettuce Wraps are a flavorful Asian dish made with lean protein, veggies, a sweet and savory sauce and a variety of satisfying garnishes.",
      image: "/thai-lettuce-wraps.jpg",
    },
    {
      id: 9,
      name: "Hot Honey Chicken",
      ingredients:
        "Cornflakes cereal, Honey, Eggs, All purpose flour, Olive oil or Butter,Chicken breast, Lettuce etc.",
      description:
        "Sweet and spicy Chicken strips that are breaded in crushed cornflakes then oven baked until tender, then they’re finished with a prominently flavored fiery hot honey sauce that will leave your taste buds craving more!",
      image: "/hot-honey-chicken.jpg",
    },
    {
      id: 10,
      name: "Chicken Alfredo",
      ingredients:
        "Parmesan cheese, Olive oil, Fresh Garlic, Salt & Black pepper, Fettuccine pasta noodles, Unsalted Butter,Chicken breast, Heavy cream etc.",
      description:
        "It’s a hearty dish made with fettuccine pasta, a creamy parmesan white sauce, and garlicky pan seared chicken.",
      image: "/chicken-alfredo.jpg",
    },
    {
      id: 11,
      name: "Chicken Alfredo Pizza",
      ingredients:
        "Pizza dough, Flour, Heavy cream & whole cream, Parmesan cheese, Mozzarella cheese, Olive oil & Butter,Chicken breast, Bacon etc.",
      description:
        "A soft and chewy pizza crust is topped with creamy alfredo sauce, tender chicken pieces, rich mozzarella, and flavorful bacon. All the best flavors coming together to create something undeniably delicious in pizza form!",
      image: "/chicken-alfredo-pizza.jpg",
    },
    {
      id: 12,
      name: "Avocado Salsa",
      ingredients:
        "Avocado, Tomatoes, Red Onions, Jalapeno, Cilantro, Olive oil, Lime juice etc.",
      description:
        "Made with creamy avocados, bright tomatoes, crisp onions, herby cilantro and a bright lime dressing. It’s the ultimate tortilla chip dip or main dish topping!",
      image: "/avocado-salsa.jpg",
    },
    {
      id: 13,
      name: "Overnight Oats (5 ways)",
      ingredients:
        "Oats, Unsweetened almond milk, Greek yoghurt, Honey or Maple syrup, Apples, Berries, Banana etc.",
      description:
        "Overnight oats are rich, creamy, and perfect as a hearty and satisfying breakfast on the go. Learn how to make the best overnight oats that you can customize with your favorite toppings and add-ins. Plus, 5 delicious flavor variations!",
      image: "/overnight-oats.jpg",
    },
    {
      id: 14,
      name: "Tofu Scramble",
      ingredients:
        "Firm tofu, Unsweetened almond milkRed bell pepper, Onions, Tumeric, Chill powder, Smoked paprika etc.",
      description:
        "Made with protein rich tofu, tender crisp sautéed bell peppers, and nutritious fresh spinach. It’s a tasty alternative to scrambled eggs yet I’d dare say equally as delicious!",
      image: "/tofu-scramble.jpg",
    },
    {
      id: 15,
      name: "Chinese Chicken Salad",
      ingredients:
        "Peanut butter, Sesame oil, Soy sauce, Rice vinegar, Lime juice, Honey etc.",
      description:
        "A colorful Asian salad made with crisp cabbage, tender roasted chicken, sweet bell pepper, and a rich and tangy peanut-sesame dressing.",
      image: "/chinese-chicken-salad.jpg",
    },
    {
      id: 16,
      name: "Sheet Pan Eggs",
      ingredients: "Eggs, Heavy cream, Milk, Cheddar cheese etc.",
      description:
        "Sheet Pan Eggs are an incredibly simple, highly adaptable, crowd-friendly recipe made with a few staple ingredients.",
      image: "/sheet-pan-eggs.jpg",
    },
    {
      id: 17,
      name: "Glazed Carrots",
      ingredients: "Fresh carrots, Butter,Brown sugar or Honey etc.",
      description:
        "Made with fresh sliced carrots, sweet brown sugar or honey and a few dabs of rich butter. This recipe is proof that it doesn’t take much to upgrade a simple vegetable and make it beautifully shine, both in taste and presentation!",
      image: "/glazed-carrots.jpg",
    },
    {
      id: 18,
      name: "Tabbouleh",
      ingredients:
        "Bulgur(Couscous), Lemon juice,Salt & pepper, Green onions etc.",
      description:
        "This Easy Tabbouleh Recipe is a vibrant, filling side dish! Soft yet chewy bulgur wheat combines with fresh veggies, bright herbs, and a rich olive oil dressing.",
      image: "/tabbouleh.jpg",
    },
    {
      id: 19,
      name: "Baked Oats (6 Ways)",
      ingredients:
        "Rolled oats, Butter, Eggs, Maple syrup, Vanilla extract etc.",
      description:
        "his simple recipe is made with whole grain oats blitzed in a blender with a handful of ingredients, then poured into individual ramekins with mix-ins added, and oven baked.",
      image: "/baked-oats.jpg",
    },
    {
      id: 20,
      name: "Cherry  Tomatoes Pasta",
      ingredients:
        "Spaghetti or linguine , Cherry tomatoes, Red pepper flakes, Cherry tomatoes etc.",
      description:
        "Made with an abundance of sweet cherry tomatoes, highly aromatic fresh basil, rich silky olive oil, and a just enough bold garlic and parmesan cheese.",
      image: "/cherry-tomato-pasta.jpg",
    },
    {
      id: 21,
      name: "Creamy Pesto Pasta",
      ingredients: "Farfalle , Parmesan cheese, Heavy cream, Garlic etc.",
      description:
        "This pasta is coated in a luxurious sauce that’s speckled generously with minced fresh basil, infused with garlic and parmesan, and it’s completely easy to make. It’s like a fusion of creamy Alfredo sauce mingled with fresh pesto pasta.",
      image: "/creamy-pesto-pasta.jpg",
    },
    {
      id: 22,
      name: "Korean Beef Bowls",
      ingredients:
        "Ground beef , Carrots, Soy sauce, Ginger, Red pepper flakes,  Garlic etc.",
      description:
        "These Korean Beef Bowls are so easy to make and taste undeniably delicious! Ground beef is browned in a hot skillet and finished with a simple, yet flavorful sauce.",
      image: "/korean-beef-bowls.jpg",
    },
    {
      id: 23,
      name: "Summery Chicken Pasta Salad",
      ingredients:
        "Bow tie pasta , Mayonnaise, Bacon, Cheddar cheese, English cucumber,  Garlic etc.",
      description:
        "Made with fun mini bow tie pasta, a lemony herb flecked dressing, sharp cheddar, crisp veggies, flavor rich bacon, and tender rotisserie chicken.",
      image: "/chicken-pasta-salads.jpg",
    },
    {
      id: 24,
      name: "Couscous Salad",
      ingredients:
        "Couscous , English cucumber, parsley, Grape tomatoes, Black pepper,  Garlic etc.",
      description:
        "Simple and refreshing Couscous Salad! It’s brimming with crisp veggies, fresh herbs, tangy feta and tossed with a vibrant lemon dressing.",
      image: "/couscous-salad.jpg",
    },
    {
      id: 25,
      name: "Chocolate Shortbread Cookies",
      ingredients:
        "All purpose flour , Unsweetened cocoa, Salt, Unsalted butter, Powered sugar,  Vanilla extract etc.",
      description:
        "They are crisp and tender, richly chocolatey and buttery, with the perfect balance of sweetness. And when dipped in a dark chocolate finish they become a sophisticated cookie with exceptional flavor!",
      image: "/chocolate-shortbread.jpg",
    },
    {
      id: 26,
      name: "Bulgogi",
      ingredients:
        "top sirloin steak, sweet apple or pear, green onions, garlic, ginger, soy sauce, sesame oil,  granulated sugar, black pepper etc.",
      description:
        "it’s made with tender pieces of steak that have been soaked in a flavorful bulgogi marinade sauce, and it’s quickly pan seared in a cast iron skillet in batches until perfectly browned.",
      image: "/bulgogi.jpg",
    },
    {
      id: 27,
      name: "Chicken Stir Fry",
      ingredients:
        "chicken breast or boneless chicken, corn starch, green onions, garlic, ginger, soy sauce, sesame oil,  honey or brown sugar, carrots, bell pepper (red, green, yellow and orange), sugar snap peas etc.",
      description:
        "A tasty chicken dinner packed with nutritious veggies and coated in a tasty stir-fry sauce. Ready in nearly 30 minutes and a great way to pack lots of vegetables in one meal.",
      image: "/chicken-stir-fry.jpg",
    },
    {
      id: 28,
      name: "Ramen Noodle Salad",
      ingredients:
        "dry ramen, sliced almonds, green cabbage, carrots, green onions, light olive oil, garlic, ginger, rice vinegar etc.",
      description:
        "A fresh and flavorful salad with such a satisfying crunch! Made with two types of cabbage, thin cut almonds, crisp ramen noodles and a sweet and tangy dressing. ",
      image: "/ramen-noodle-salad.jpg",
    },
    {
      id: 29,
      name: "Hawaiian Fried Rice",
      ingredients:
        "basmati or jasmine rice, coconut milk, olive oil, sesame oil, red bell pepper, ginger, garlic, ham, pineapple, eggs , soy sauce etc.",
      description:
        " It's a blend of coconut rice with that delicious ham and pineapple combo.",
      image: "/hawaiian-fried-rice.jpg",
    },
    {
      id: 30,
      name: "Thai Basil Beef",
      ingredients:
        "jasmine or basmati rice, top sirloin steak, corn starch, red bell pepper,garlic, ginger, thai basil leaves etc.",
      description:
        "s a flavorful meal that’s even better than takeout! Thin pieces of tender steak are seared in a hot skillet, then bright fresh veggies are sautéed and you’ll toss the two together along with a deliciously flavorful sauce.",
      image: "/thai_basil_beef_bowls.jpg",
    },
  ]);

  const addRecipe = (recipe) => {
    recipes.value.push({
      ...recipe,
      id: recipes.value.length + 1,
    });
  };

  return { recipes, addRecipe };
});
