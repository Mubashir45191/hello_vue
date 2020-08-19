let app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    brand: 'Vue Mastery',
    description:
        " We offer awesome socks of amazing quality which you will surely love to wear and will become your favorite socks in  a moment of time.",
    selectedVariant: 0,
    onSale: true,
    link:
        "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",

    details: ["80% cotton", "20% polyster", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./images/vuestocks.png",
        variantQuantity: 10
      },

      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./images/vuesock.jpg",
        variantQuantity: 0
      },
    ],
    sizes: ["Small", "Medium", "Large", "Extra-Large"],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index)
    },
    removeFromCart() {
      this.cart -= 1;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale.';
      } else {
        return this.brand + ' ' + this.product + ' are  not on sale.';
      }
    },
  }
  });


//a vue instance