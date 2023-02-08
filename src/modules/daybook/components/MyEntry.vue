<template>

    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({name: 'entry', params: {id: 10}})"
    >
        <!-- Título -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">Miércoles, 8</span>&nbsp;
            <span class="mx-1 fs-5">febrero</span>&nbsp;
            <span class="mx-2 fw-light">2023</span>
        </div>

        <div class="entry-description">
            Id proident sunt occaecat minim est cillum ad eiusmod sint esse eiusmod dolor magna incididunt. Ea aliqua dolor 
            adipisicing et excepteur. Nulla do ut excepteur culpa aliqua enim. Irure officia sit officia sunt magna irure et fugiat 
            fugiat culpa qui est labore cupidatat. Ullamco labore aute eu officia. Esse aliquip elit fugiat sunt non anim aliquip 
            culpa do cupidatat nisi culpa fugiat reprehenderit. Proident nostrud consectetur ut in ea elit consectetur aute.
        </div>

    </div>

</template>

<script>

    export default {

    }

</script>

<style lang="scss" scoped>

    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s ease-in;

        //El '&' simboliza la misma clase en la que estamos
        &:hover {
            //Coge el color gris y lo aclara en un 45%
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s ease-in;
        }

        .entry-description {
            font-size: 12px;
        }

    }

</style>