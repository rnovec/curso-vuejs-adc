<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

