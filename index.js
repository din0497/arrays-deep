let data = [
  {
    name: "Brian",
    number: "@bek_0127",
    address: "Seoul",
  },
  {
    name: "Din",
    number: "@iamabdunazarov",
    address: "Seoul",
  },
  {
    name: "Max",
    number: "@ISMOILOV_8686",
    address: "",
  },
  {
    name: "David",
    number: "@BekzodBegalie",
    address: "Seoul",
  },
  {
    name: "Jackson",
    number: "@Brave200 ",
    address: "Seoul",
  },
  {
    name: "Ethan",
    number: "@MuMar707",
    address: "Seoul",
  },
  {
    name: "John",
    number: +821028909010,
    address: "Seoul",
  },
  {
    name: "Joseph",
    number: +821028909010,
    address: "Seoul",
  },
  {
    name: "Daniel",
    number: +821028909010,
    address: "Seoul",
  },
  {
    name: "Albert",
    number: +821028909010,
    address: "Seoul",
  },
  {
    name: "James",
    number: +821028909010,
    address: "Seoul",
  },
  { name: "Alice", number: 123456789, address: "New York" },
  { name: "Bob", number: 987654321, address: "Los Angeles" },
  { name: "Charlie", number: 246813579, address: "Chicago" },
  { name: "David", number: 135792468, address: "Houston" },
  { name: "Emily", number: 987654123, address: "Phoenix" },
  { name: "Frank", number: 123456789, address: "Philadelphia" },
  { name: "Grace", number: 456789123, address: "San Antonio" },
  { name: "Henry", number: 654321789, address: "San Diego" },
  { name: "Ivy", number: 321654987, address: "Dallas" },
  { name: "Jack", number: 789123456, address: "San Jose" },
  { name: "Alice", number: 456789123, address: "New York" },
  { name: "Bob", number: 123456789, address: "Los Angeles" },
  { name: "Charlie", number: 789123456, address: "Chicago" },
  { name: "David", number: 123456789, address: "Houston" },
  { name: "Emily", number: 789123456, address: "Phoenix" },
  { name: "Frank", number: 123456789, address: "Philadelphia" },
  { name: "Grace", number: 789123456, address: "San Antonio" },
  { name: "Henry", number: 123456789, address: "San Diego" },
  { name: "Ivy", number: 987654321, address: "Dallas" },
  { name: "Jack", number: 321654987, address: "San Jose" },
];

const body = document.querySelector("tbody");
const input = document.querySelector("input");
const button = document.querySelector("button");

const fetchData = (data) => {
  body.innerHTML = "";

  data.forEach((ele) => {
    const { name, number, address } = ele;

    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${name}</td>
          <td>${number}</td>
          <td>${address}</td>`;
    body.appendChild(row);
  });
};

const filterData = (text) => {
  const newData = data.filter((eachObj) => {
    const letterLength = text.length;
    return Object.values(eachObj).some((value) => {
      const words = text.toLowerCase().split(' ')
      return (
        value.toString().toLowerCase().substring(0, letterLength) ==
        text.toLowerCase().trim()
      );
    });
  });
  fetchData(newData);
};

input.addEventListener("input", (e) => {
  filterData(e.target.value);
});

button.addEventListener("click", () => {
  fetchData(data);
});

fetchData(data);
