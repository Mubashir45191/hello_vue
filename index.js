var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description:
      " We offer awesome socks of amazing quality which you will surely love to wear and will become your favorite socks in  a moment of time.",
    image: "images/vuestocks.png",
    link:
      "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    inventory: 50,
    onSale: true,
    details: ["80% cotton", "20% polyster", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
      },

      {
        variantId: 2235,
        variantColor: "blue",
      },
    ],
    sizes:["Small","Medium","Large","Extra-Large"]
  },
});

//a vue instance