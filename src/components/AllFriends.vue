<template>
	
	<UnAmi v-for="unAmi in lesAmis"
	:key="unAmi.id"
	:id="unAmi.id"
	:nom="unAmi.name"
	:phone="unAmi.phone"
	:mail="unAmi.email"
	:premium="unAmi.premium"
	@mon_event_premium="afficherStatusPremium">
	</UnAmi>
	
</template>

<script lang='js'>
import { defineComponent } from 'vue';
import UnAmi from './UnAmi.vue'

export default defineComponent({
	name: 'AllFriends',
	components: {
		UnAmi
	},
	props: {
		// v-model
		modelValue: {
			default: '',
		},
	},
	
	data() {
		return {
			lesAmis: [
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
			premium: true
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
			premium: false
        },
        {
            id:'jojo',
            name:"jojoLeBarjo",
            phone:'123 12346 24',
            email:'jojo@barjo.com',
			premium: false
        },
        {
            id:'kimonoSurUnFrigo',
            name:"Steven Seagal",
            phone:'+338765477',
            email:'steven@seagal.com',
			premium: true
        },
    ],

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
	
	methods: {
		afficherStatusPremium(leIdDansUnAmi){
			let unAmiIdentified = this.lesAmis.find((element) => element.id === leIdDansUnAmi);
			unAmiIdentified.premium = !unAmiIdentified.premium;
			console.log(unAmiIdentified)
		}
	},
});
</script>

<style scoped lang="css">
</style>