<script setup lang="ts">

import ContentPage from "@/components/contentPage.vue";
import portTarapoto from "@/assets/images/portTarapoto.jpg";
import happyYoung from "@/assets/images/happyYoung.jpg";
import LocationEvent from "@/components/locationEvent.vue";
import TeamContent from "@/components/teamContent.vue";
import FooterPage from "@/components/footerPage.vue";

</script>

<template>
    <main class="-mt-20">
        <div>
            <content-page gradient-mode="to bottom right" color-via="var(--color-primary-100)" color-from="var(--color-primary-400)"
                          color-to="var(--color-primary-700)" :opacity="0.65" :url-image="portTarapoto">
                <template #bottom-description>
                    <div class="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
                        <div class="flex items-center gap-2">
                            <i-material-symbols-calendar-month class="text-xl text-indigo-600"/>
                            <span>25 - 29 de Julio</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i-tabler-clock-hour-5 class="text-xl text-indigo-600"/>
                            <span>7:00 PM</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i-material-symbols-file-map class="text-xl text-indigo-600"/>
                            <span>Tarapoto - Lamas</span>
                        </div>
                    </div>
                </template>
            </content-page>
        </div>

        <div class="flex w-full items-center justify-center py-10 text-3xl font-info bg-slate-950 md:text-5xl">
            <div>
                !Ya Comenzó¡
            </div>
        </div>

        <content-page gradient-mode="to bottom right" color-via="var(--color-primary-100)" color-from="var(--color-primary-500)"
                      color-to="var(--color-primary-700)" :opacity="0.65" :url-image="happyYoung"/>

        <div class="grid w-full justify-items-center px-4 py-10 bg-slate-950">
            <p class="text-center text-3xl font-info md:text-5xl">
                ¿Qué es Kadosh?
            </p>
            <p class="mt-10 text-center text-xl">
                ¡Amor por el prójimo! Nuestra sociedad necesita amor. Un amor que solo Dios puede dar. Un amor que transforma cualquier
                realidad. Que da un abrazo, pero con un mensaje que lo cambia todo.
            </p>
            <p class="mt-4 text-center text-xl">
                Vive la experiencia de Kadosh. Pon al servicio de la comunidad los dones y talentos que Dios te ha dado, mientras que
                impactamos.
            </p>
            <div class="mt-10 flex w-full flex-col items-center gap-6 md:flex-row">
                <div class="w-full md:w-1/2">
                    <div class="relative w-full pb-80">
                        <iframe class="absolute top-0 left-0 h-full w-full rounded-2xl" title="YouTube video player" allowfullscreen
                                src="https://www.youtube.com/embed/Bn4Qi1Wuxb0?si=9nzLjBR2UXK1aR4T"/>
                    </div>
                </div>
                <div class="w-full px-4 text-center text-2xl font-info md:w-1/2 md:text-4xl">
                    Toda la ciudad sabrá que estos que han trastornado al mundo...
                    <span class="block font-bold">TAMBIÉN HAN LLEGADO A TARAPOTO</span>
                </div>
            </div>
        </div>

        <location-event/>

        <div class="flex w-full items-center justify-center py-10 text-center text-3xl font-info bg-slate-950 md:text-5xl">
            <div>
                "Kadosh es el desafío a aceptar el llamado de Dios a tu vida."
            </div>
        </div>
        <team-content/>
        <footer-page/>
    </main>
</template>
