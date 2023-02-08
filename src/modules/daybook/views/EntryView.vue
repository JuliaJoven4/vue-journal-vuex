<template>

    <div class="entry-title d-flex justify-content-between p-2">
        
        <div>
            <span class="text-success fs-3 fw-bold">Miércoles, 8</span>&nbsp;
            <span class="mx-1 fs-3">febrero</span>&nbsp;
            <span class="mx-2 fs-4 fw-light">2023</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar &nbsp;
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto &nbsp;
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>

    <hr/>

    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="¿Qué ha pasado hoy?"
        
        ></textarea>
    </div>

    <MyFab
        icon="fas fa-2x fa-save"
    />

    <img
        src="https://www.todofondos.net/wp-content/uploads/40-fondos-de-pantalla-de-super-hd-galaxy.-imagen-de-galaxia-scaled.jpg"
        alt="Entry-picture"
        class="img-thumbnail"
    />

</template>

<script>

    import { defineAsyncComponent } from 'vue';
    export default {

        components: {
            MyFab: defineAsyncComponent(() => import('../components/MyFab.vue'))
        }

    }

</script>

<style lang="scss" scoped>

    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }

    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }

</style>