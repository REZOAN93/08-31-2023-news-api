const loadCategory = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await res.json();
  const category = data?.data?.news_category;
  handleCategory(category);
};

const handleCategory = (categories) => {
  const tabField = document.getElementById("tab-contaniner");
  for (const list of categories) {
    console.log(list);
    const catAnchor=document.createElement('p')
    catAnchor.classList='tab tab-lifted'
    catAnchor.innerHTML= `${list.category_name}`
    tabField.appendChild(catAnchor)
  }
};

loadCategory();
