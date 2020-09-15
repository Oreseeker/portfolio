const namedField = Vue.component("named-field",{
	props: {
		fieldName: {
			required: true,
			type: String
		}
	},
	template: `<div class="named-text-wrapper">
					<div class="text-input-text-wrapper">
						<span>{{fieldName}}</span>
						<input type="text" class="form-input" v-model="fieldStatus">
					</div>
					<img :src="source" class="status-icon" width="50px">
			   </div>`,
	data() {
		return {
			fieldStatus: null,
			source: '',
			sourceOk: 'images/ok.png',
			sourceError: 'images/error.png'
		}
	},
	watch: {
		fieldStatus() {
			let letters = /^[a-zA-ZåäöÅÄÖ\s]+[a-zA-ZåäöÅÄÖ\s\-]*[a-zA-ZåäöÅÄÖ\s]+$/;;
			if (this.fieldStatus.match(letters)) {
				this.source = this.sourceOk;
				this.$emit('field-update', this.fieldName, true);
			}
			else {
				this.source = this.sourceError;
				this.$emit('field-update', this.fieldName, false);
			}
		}
	},
});

const btn = Vue.component("form-button", {
	props: {
		clr: {
			required: false,
			type: String,
		},
		bclr: {
			required: false,
			type: String,
		},
		buttonStatus: {
			type: Boolean,
		}
	},
	template: `<button
	 class="form-button" :style="{backgroundColor: clr, border: '2px solid ' + bclr}" v-on:click="buttonClicked" :disabled="buttonStatus">
		       		<slot></slot>
			   </button>`,
	methods: {
		buttonClicked() {
			this.$emit("button-clicked");
		}
	}
});

const app = new Vue({
	el: '#app',
	data: {
		"First name": false,
		"Last name": false,
		"Country": false,
		"City": false,
		isButtonDisabled: true,
	},
	methods: {
		updateFieldStatus(fieldName, status) {
			this[fieldName] = status;
		    let st = this['First name'] && this['Last name'] && this['Country'] && this['City'];
		    this.isButtonDisabled = !st;
		},
		sendData() {
			alert('Data has been successfully sent.');
		}
	}
});