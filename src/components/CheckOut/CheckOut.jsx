const [name, setName] = useState("");
const { id } = useParams("");
const order = {
  buyer: { name: "Lucas", phone: "324324523", email: "@gmail.com" },
  items: [
    {
      categoryId: "remeras",
      description: "",
      img: "",
      price: 200,
      stock: 100,
      title: "",
    },
  ],
  total: 10000,
};
