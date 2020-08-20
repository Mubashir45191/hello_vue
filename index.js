Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
  <div class="product">
            <div class="product-image">
                <!-- //product-image -->

                <img :src="image" alt="VueM Socks"/>
            </div>
            <div class="product-info">

                <!-- //some product-info -->

                <h1>{{title}}</h1>
                <p>{{description}}</p>

                <!-- //conditional rendering(checks the stock)// -->

                <!-- Stock -->

                <h4 v-if="inStock">In stock</h4>
                <h4 v-else :class="{outOfStock:!inStock}">Out of stock </h4>
                <p>Shipping : {{ shipping}}</p>

                <h4>{{sale}}</h4>

                <!-- details -->
                <h3>Details</h3>

                <ul>
                    <li v-for="d in details">{{d}}</li>
                </ul>

                <div v-for="(v,i) in variants" :key="v.variantId" class="color-box"
                     :style="{ backgroundColor: v.variantColor }" @mouseover="updateProduct(i)">


                </div>

                <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{disabledButton:!inStock}">Add to cart
                </button>
                <button @click="removeFromCart" :disabled="!inStock"  :class="{disabledButton:!inStock}" class="remCart">Remove from Cart</button>
                <div class="cart">
                    <button>Cart {{'(' + cart + ')'}}</button>
                </div>
            </div>
        </div>
    
  `,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0,
        },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
      this.cart -= 1;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping(){
      if(this.)
    }
  },
});
let app = new Vue({
  el: "#app",
  data: {
    premium: true,
  },
});

//a vue instance
