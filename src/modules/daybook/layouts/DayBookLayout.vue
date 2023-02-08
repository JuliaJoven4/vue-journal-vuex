<template>
    <NavBar/>
    <div class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>

<script>

/* Con el 'defineAsyncComponent' le puedo cambiar el nombre al componente fácilmente y a su vez me permite tener menos importaciones
en la parte de los scripts */
import { defineAsyncComponent } from 'vue';

    export default {
        components: {
            NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
            EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
        }
    }

</script>