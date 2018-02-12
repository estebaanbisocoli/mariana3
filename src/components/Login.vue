<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md4>
        <v-card flat class="accent radius" light>
          <v-toolbar flat class="radius" color="primary" dark>
            <v-toolbar-title>Inicie Sesion</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pb-0 mb-0" >
            <v-form>
              <v-text-field light prepend-icon="person" v-model="email" name="email" label="Email" type="text"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" v-model="password" label="Contraseña" id="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="pt-0 mt-0 flat" depressed dark @click="logIn">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import api from '../api/api'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn () {
      api.logUserIn({
        email: this.email,
        password: this.password
      }).then(user => {
     
        console.log(api.currentUser())
      })
    }
  }
}
</script>
<style>
.radius {
  border-radius: 0px
}
.toolbar-radius {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>
