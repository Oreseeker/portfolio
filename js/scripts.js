const goodItem = Vue.component("good-item", {
	props: {
		good: {
			type: Object,
			required: true
		}
	},
	template: ` <div class="good-item" v-on:mouseover="highlightGood()" v-on:mouseleave="unhighlightGood()">
					<span class="likes-text" v-if="hovered">{{ good.likes }}</span>
					<span class="comments-text" v-if="hovered">{{ good.comments }}</span>
					<div class="img-container">
						<img :src="good.imageUrl" :alt="good.name">
					</div>
					<h2>{{good.name}}</h2>
					<div class="price">
						$ {{good.price.toFixed(2)}} <!--Всегда оставлять 2 знака после запятой-->
				    </div>
				    <a class="buy-button" v-show="hovered" href="#">Add to Cart</a>
				</div>`,
	data() {
		return {
			hovered: false,
		}
	},
	methods: {
	 	highlightGood: function() {
	 		if (!this.hovered) {
				this.hovered = true;
			}
			return
		},
		unhighlightGood: function() {
			this.hovered = false;
		}
	}

});

const bags = new Vue({
	el: "#bags",
	components: {
		goodItem,
	},
	data: {
		bags: [
			{
				name: 'Black Genuine Leather Bags',
				price: 23.20,
				imageUrl: 'images/bag-1.png',
				likes: 1134,
				comments: 5430
			},
			{
				name: 'Fashion Red Leather Bags',
				price: 20.16,
				imageUrl: 'images/bag-2.png',
				likes: 53,
				comments: 144
			},
			{
				name: 'Fashion Genuine Leather Bags',
				price: 30.14,
				imageUrl: 'images/bag-3.png',
				likes: 236,
				comments: 541
			},
			{
				name: 'Simply Leather Bags',
				price: 15.20,
				imageUrl: 'images/bag-4.png',
				likes: 18,
				comments: 1
			},
			{
				name: 'New Fashion Leather Bags',
				price: 25.20,
				imageUrl: 'images/bag-5.png',
				likes: 24,
				comments: 5
			},
			{
				name: 'Single Hand Models Bags',
				price: 17.6,
				imageUrl: 'images/bag-6.png',
				likes: 20,
				comments: 10
			}
		]
	}
});

const watch = new Vue({
	el: '#watch',
	components: {
		goodItem
	},
	data: {
		navigationItems: ['Fashion', 'Furnitures', 'Watches', 'Mobile', 'Cloth', 'Toys'],
		states: ['', '', 'active', '', '', ''],
		watch: [
		{
			name: 'Fashion Genuine Chain Watch',
			imageUrl: 'images/watch-1.png',
			price: 25.36,
			likes: 35,
			comments: 24
		},
		{
			name: 'Fashion Silver Chain Watch',
			imageUrl: 'images/watch-2.png',
			price: 35.24,
			likes: 0,
			comments: 0
		},
		{
			name: 'Fashion Chain Watch',
			imageUrl: 'images/watch-3.png',
			price: 23.12,
			likes: 50,
			comments: 11
		},
		{
			name: 'Fashion Black Chain Watch',
			imageUrl: 'images/watch-4.png',
			price: 43.22,
			likes: 12,
			comments: 36
		},
		{
			name: 'Fashion Leather Watch',
			imageUrl: 'images/watch-5.png',
			price: 15.20,
			likes: 45,
			comments: 137
		},
		{
			name: 'Fashion Foreign Watch',
			imageUrl: 'images/watch-6.png',
			price: 36.12,
			likes: 12,
			comments: 0
		}
		],
	}
});