<script setup lang="ts">

import ContentPage from "@/components/contentPage.vue";
import portTarapoto from "@/assets/images/portTarapoto.jpg";
import happyYoung from "@/assets/images/happyYoung.jpg";
import LocationEvent from "@/components/locationEvent.vue";
import TeamContent from "@/components/teamContent.vue";
import FooterPage from "@/components/footerPage.vue";
import AboutEvent from "@/components/aboutEvent.vue";
import TimerToEvent from "@/components/timerToEvent.vue";

</script>

<template>
    <main class="-mt-20">
        <div>
            <content-page gradient-mode="to top right" color-via="var(--p-primary-100)" color-from="var(--p-primary-400)"
                          color-to="var(--p-primary-700)" :opacity="0.60" :url-image="portTarapoto">
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
            <timer-to-event/>
        </div>

        <content-page gradient-mode="to bottom right" color-via="var(--p-primary-100)" color-from="var(--p-primary-500)"
                      color-to="var(--p-primary-700)" :opacity="0.60" :url-image="happyYoung"/>

        <about-event id="about"/>

        <location-event id="location"/>

        <div class="flex w-full items-center justify-center py-10 text-center text-3xl font-info bg-slate-950 md:text-5xl">
            <div>
                "Kadosh es el desafío a aceptar el llamado de Dios a tu vida."
            </div>
        </div>
        <team-content id="team"/>
        <footer-page id="footer"/>
    </main>
</template>
