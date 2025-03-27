<script setup lang="ts">

import HeaderMenu from "@/components/headerMenu.vue";
</script>

<template>
    <header-menu/>
    <router-view v-slot="{Component}">
        <component :is="Component"/>
    </router-view>
</template>
