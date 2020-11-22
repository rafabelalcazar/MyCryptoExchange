<template>
    <header class="shadow w-screen bg-green-400">
        <nav class="flex items-center justify-between text-white flex-wrap p-6">
            <div class="flex items-center">
                <vue-icon class="mr-3"/>
                <span class="text-xl font-semibold">PlatziExchange</span>
            </div>
            <div class="hidden sm:flex">
                <div>Hola soy el header</div>
            </div>
        </nav>
    </header>
</template>

<script>
import VueIcon from "@/components/VueIcon";

    export default {
        name:"VueHeader",
        components:{ VueIcon }
        
    }
</script>

<style scoped>

</style>