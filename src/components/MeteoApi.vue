<template>
	
		<h1>Méteo du jour</h1>
		<div class="card mb-3" style="max-width: 540px;">
		<div class="row g-0">
			<div class="col-md-4">
				<img :src="infoMeteo.current_condition.icon_big" class="img-fluid rounded-start" alt="...">
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">{{infoMeteo.city_info.name}} : {{ infoMeteo.current_condition.tmp }} C°</h5>
					<p class="card-text">Condition: {{ infoMeteo.current_condition.condition }}</p>
					<p class="card-text">Température max : {{ infoMeteo.fcst_day_0.tmax }} C°</p>
					<p class="card-text">Température min : {{ infoMeteo.fcst_day_0.tmin }} C°</p>
					
				</div>
			</div>
		</div>
	</div>

</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'MeteoApi',
	components: {
	},
	props: {
		// v-model
		modelValue: {
			default: '',
		},
	},
	emits: {
		// v-model event with validation
		'update:modelValue': (value) => value !== null,
	},
	data() {
		return {
			infoMeteo: null
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
	created(){
		fetch('https://prevision-meteo.ch/services/json/toulouse')
		.then(response => response.json())
		.then(data =>(this.infoMeteo = data))
		.catch((e)=> (console.log(e)));
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
	},
});
</script>

<style scoped lang="css">

</style>