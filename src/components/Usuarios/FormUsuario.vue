<template>
	<form>
		<b-field label="Nombre de usuario" >
            <b-input  icon="shield-account" type="text" placeholder="Ej. Rosalio" v-model="datosUsuario.usuario"></b-input>
        </b-field>
        <b-field label="Nombre completo " >
            <b-input  icon="account" type="text" placeholder="Ej. Rosalio Alfredo Monterrosa Valle" v-model="datosUsuario.nombre"></b-input>
        </b-field>
        <b-field label="Teléfono del usuario" >
            <b-input step="any" icon="phone" type="number" placeholder="Ej. 73302281" v-model="datosUsuario.telefono"></b-input>
        </b-field>
		<b-field label="Rol del usuario" >
			<b-select name="rol_id" id="rol_id" v-model="datosUsuario.rol_id">
				<option value="1" selected>Vendedor</option>
				<option value="2">Gerente</option>
				<option value="3">Dueño</option>
			</b-select>
            <!-- <b-input step="any" icon="notebook" type="number" placeholder="1" v-model="datosUsuario.rol_id"></b-input> -->
        </b-field>

         <div class="buttons has-text-centered">
            <b-button type="is-primary" size="is-large" icon-left="check" @click="registrar">Registrar</b-button>
            <b-button type="is-dark" size="is-large" icon-left="cancel" tag="router-link" to="/usuarios">Cancelar</b-button>
        </div>
        <errores-component :errores="mensajesError" v-if="mensajesError.length > 0" />
	</form>
</template>
<script>
	import Utiles from '../../Servicios/Utiles'
	import ErroresComponent from '../Extras/ErroresComponent'

	export default {
		name: "FormUsuario",
		props: ["usuario"],
		components: { ErroresComponent },

		data:()=>({
			datosUsuario: {
				usuario: "",
				nombre: "",
				telefono: ""
			},
			mensajesError: [] 
		}),

		mounted(){
			this.datosUsuario = this.usuario
		},

		methods: {
			registrar(){
				this.mensajesError = Utiles.validarDatos(this.datosUsuario)
				if(this.mensajesError.length > 0) return
				this.$emit("registrar", this.datosUsuario)
				this.datosUsuario  = {
					usuario: "",
					nombre: "",
					telefono: ""
				}
			}
		}
	}
</script>