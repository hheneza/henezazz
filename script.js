// اتصال به پایگاه داده Firebase
const db = firebase.firestore();

// بارگذاری محصولات و نمایش در صفحه اصلی
document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-list");

  db.collection("products").onSnapshot(snapshot => {
    productContainer.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = 
        <img src="${data.image}" alt="${data.name}">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <p><strong>${Number(data.price).toLocaleString()} تومان</strong></p>
      ;
      productContainer.appendChild(card);
    });
  });
});
