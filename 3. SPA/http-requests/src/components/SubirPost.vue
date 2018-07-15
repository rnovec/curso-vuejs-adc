<template>
    <div>
       <b-form>
      <b-form-group id="exampleInputGroup1"
                    label="Tema"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      required
                      v-model="post.title"
                      placeholder="Ingresa algún tema de interés">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label-for="exampleInput2"
                    label="Comentario">
        <b-form-textarea id="textarea1"
                     placeholder="Escribe algo..."
                     v-model="post.body"
                     :rows="3"
                     :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Usuario"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="usuarios"
                      v-model="post.userId"
                      required>
        </b-form-select>
      </b-form-group>
      <b-button type="submit" @click.prevent="subirPost" variant="primary">Subir</b-button>
    </b-form>
    </div>
</template>


<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        userId: null
      },
      usuarios: [
        { text: 'Selecciona una opción', value: null },
        { text: 'Jordan', value: 1 },
        { text: 'Dario', value: 2 }
      ]
    };
  },
  methods: {
      subirPost() {
          this.$http.post('https://jsonplaceholder.typicode.com/posts', {
          body: JSON.stringify(this.post),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => console.log(json))
            }
          }
  };
</script>