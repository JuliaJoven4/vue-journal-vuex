<template>

    <button class="btn btn-primary">
        <i 
            :class="icon"
        ></i>
    </button>

</template>

<script>

    export default {
        props: {
            icon: {
                type: String,
                default: 'fa fa-2x fa-plus'
            }
        }
    }

</script>

<style lang="scss" scoped>

    button {
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right: 20px;
        width: 80px;
    }
    .fa-solid.fa-floppy-disk {
        color: white;
    }

</style>