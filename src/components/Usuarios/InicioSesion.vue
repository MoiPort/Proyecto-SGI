<template>
    <section class="hero  is-fullheight fondo">

        <div class="hero-body">
            <div class="container">

                <div class="box">
                    <h1 class="title is-1 has-text-centered is-family-monospace">Sistema Gerencial de Ventas</h1>
                    <img src="@/assets/logo.jpeg" width="300" style="display: block; margin:0 auto;">
                    <b-field label="Nombre de usuario">
                        <b-input icon="shield-account" type="text" placeholder="Ej. Rosalio Monterrosa"
                            v-model="usuario.usuario"></b-input>
                    </b-field>
                    <b-field label="Contraseña">
                        <b-input type="password" placeholder="Contraseña" v-model="usuario.password" password-reveal>
                        </b-input>
                    </b-field>
                    <b-button type="is-primary" size="is-large" icon-left="check" @click="iniciarSesion">Ingresar</b-button>
                </div>
                <div v-if="informacionNegocio" class="has-text-centered">

                </div>


            </div>
        </div>
    </section>
</template>
<script>
import HttpService from '../../Servicios/HttpService'
import AyudanteSesion from '../../Servicios/AyudanteSesion'

export default {
    name: "InicioSesion",

    data: () => ({
        usuario: {
            usuario: "",
            password: ""
        },

        informacionNegocio: null
    }),

    mounted() {
        this.obtenerInformacionLocal()
        this.informacionNegocio = AyudanteSesion.obtenerDatosNegocio()
    },

    methods: {
        iniciarSesion() {
            let payload = {
                accion: 'iniciar_sesion',
                usuario: this.usuario
            }

            HttpService.obtenerConConsultas('usuarios.php', payload)
                .then(resultado => {
                    if (!resultado) {
                        this.$buefy.toast.open({
                            type: 'is-danger',
                            message: 'Información incorrecta. Verifica.'
                        })
                        return
                    }

                    if (resultado.estado) {
                        this.$buefy.toast.open({
                            type: 'is-info',
                            message: 'Información correcta. Bienvenido.'
                        })
                        this.$router.push({ name: 'InicioComponent' })
                        this.$emit("login", resultado)
                    }
                })
        },

        obtenerInformacionLocal() {
            HttpService.obtenerConConsultas('ajustes.php', {
                accion: 'obtener'
            })
                .then(resultado => {
                    AyudanteSesion.establecerDatosNegocio(resultado)
                })
        }
    }

}
</script>
<style>
.fondo {
    background: rgb(0, 255, 196);
    background: linear-gradient(180deg, rgba(0, 255, 196, 1) 0%, rgba(9, 9, 121, 1) 30%, rgba(0, 0, 0, 1) 100%);
    background-attachment: fixed;
    background-size: cover;
}
</style>