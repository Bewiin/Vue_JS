<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/test"><a class="navbar-brand" href="#">Lien vers Home</a></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
		<router-link to="/home"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></router-link>
      </li>
      <li class="nav-item">
       <router-link to="/pokemon"> <a class="nav-link" href="#">Les pokémons</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/meteo"><a class="nav-link" href="#">Météo</a></router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Header',
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
	},
});
</script>

<style scoped lang="css">
</style>