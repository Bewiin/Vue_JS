<template>
	<div class="container">
		<div class="card text-center">
			<h1 >{{ nom }}</h1>
			<h2 class="text-success" v-if="premium">Ami Premium</h2>
			<h2 class="text-danger" v-if="!premium">Ami nul</h2>
			<div  class="p-3 mb-2 bg-success text-white" v-if="toggle">
				<p>{{ phone }}</p>
				<p>{{ mail }}</p>
			</div>
			<input class="btn btn-primary" @click="premiumOnorOff()" type="button" value="Premium">
			<input class="btn btn-info" @click="turnOn()" type="button" :value="toggle ? 'Masquer détail' : 'Afficher détail'" >
		</div>
		
		
	</div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'UnAmi',
	components: {
	},
	props: {
		id:{
			type: String
		},
		nom: {
			type: String,
			required: true
		},
		phone: {
			type: String,
			required: true
		},
		mail: {
			type: String,
			required: true
		},
		premium: {
			type: Boolean,
			default: false,
			required: false
		}	
	},
	emits: {
		// v-model event with validation
		'update:modelValue': (value) => value !== null,
	},
	data() {
		return {
			toggle: false,
			// premiumData: this.premium
		};
	},
	computed: {
		value: {
			get () {
				return this.modelValue;
			},
			set (value) {
				this.$emit('update:modelValue', value);
			},
		},
	},
	watch: {
		modelValue: {
			async handler (_newValue, _oldValue) {
				// do something
			},
			immediate: true
		},
	},
	beforeMount() {
	},
	mounted() {
	},
	updated() {
	},
	beforeUnmount() {
		// stop the wacher on modelValue
		this.$watch('modelValue', () => {}, {});
	},
	methods: {
		turnOn(){
			this.toggle = !this.toggle;
		},
		premiumOnorOff(){
			this.$emit("mon_event_premium",this.id);
		}
		
		

	},
});
</script>

<style scoped lang="css">
</style>