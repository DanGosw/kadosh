<script setup lang="ts">

import ContentPage from "@/components/contentPage.vue";
import portTarapoto from "@/assets/images/portTarapoto.jpg";
import happyYoung from "@/assets/images/happyYoung.jpg";


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
                      color-to="var(--color-primary-700)" :opacity="0.65" :url-image="happyYoung">
            <template #description>
                no c k poner aki xd
            </template>
            <template #bottom-description>
                tetas
            </template>
        </content-page>

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
            <!-- Responsive container: switches from column on mobile to row on md+ -->
            <div class="mt-10 flex w-full flex-col items-center gap-6 md:flex-row">
                <!-- Video container with aspect ratio (16:9) -->
                <div class="w-full md:w-1/2">
                    <div class="relative w-full bg-indigo-500 pb-80">
                        <iframe class="absolute top-0 left-0 h-full w-full" title="YouTube video player" allowfullscreen
                                src="https://www.youtube.com/embed/AbQtqh_eUCM?si=tUnfe-P4WnjFchEM"/>
                    </div>
                </div>
                <!-- Text container -->
                <div class="w-full px-4 text-center text-2xl font-info md:w-1/2 md:text-4xl">
                    Toda la ciudad sabrá que estos que han trastornado al mundo...
                    <span class="block font-bold">TAMBIÉN HAN LLEGADO A TARAPOTO</span>
                </div>
            </div>
        </div>

        <content-page gradient-mode="to bottom right" color-via="var(--color-primary-100)" color-from="var(--color-primary-500)"
                      color-to="var(--color-primary-700)" :opacity="0.65"
                      url-image="https://as2.ftcdn.net/v2/jpg/02/56/10/07/1000_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg">
            <template #description>
                no c k poner aki xd
            </template>
        </content-page>

        <div class="grid w-full justify-items-center px-4 py-5 bg-slate-950">
            <div class="flex w-full flex-col items-center gap-6 md:flex-row">
                <!-- Video container with aspect ratio (16:9) -->
                <div class="w-full md:w-1/2">
                    <div class="relative w-full pb-80">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7969.033943686046!2d-79.08876090408359!3d-8.088177683828809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3c3fb3b141e3%3A0xabcdff834d4deeaa!2sColegio%20Militar%20Gran%20Maricon%20Ram%C3%B3n%20Castilla!5e0!3m2!1sen!2sco!4v1717595544404!5m2!1sen!2sco"
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                class="absolute top-0 left-0 rounded-2xl h-full w-full sectionVenue__Map-sc-15l7hda-2 gzfAHm"/>
                    </div>
                </div>
                <!-- Text container -->
                <div class="w-full px-4 text-center text-2xl font-info md:w-1/2 md:text-4xl">
                    ¿Dónde?
                    <span class="block font-bold">TAMBIÉN HAN LLEGADO A TARAPOTO</span>
                </div>
            </div>
        </div>
    </main>
</template>
