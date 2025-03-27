<script setup lang="ts">
import { toRefs, computed } from "vue";

const props = defineProps({
    colorFrom: { type: String, default: "#ea6b92" },
    colorTo: { type: String, default: "#e31f5a" },
    colorVia: { type: String, default: "#6e22cc" },
    gradientMode: { type: String, default: "to bottom right" },
    opacity: { type: Number, default: 1 },
    urlImage: { type: String, default: "" }
});

const { colorFrom, colorVia, colorTo, gradientMode } = toRefs(props);

/**
 * Helper: If the color is a CSS variable (e.g., "var(--color-primary-400)"),
 * return its computed value.
 */
const getCssVar = (cssVar: string): string => {
    if (cssVar.startsWith("var(")) {
        const match = cssVar.match(/var\(([^)]+)\)/);
        if (match) {
            const variableName = match[1].trim();
            return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim() || cssVar;
        }
    }
    return cssVar;
};

/**
 * Converts a hex (or rgb) color to an rgba() string with the given opacity.
 */
const convertToRgba = (color: string, opacity: number): string => {
    const computedColor = getCssVar(color);

    if (computedColor.startsWith("#")) {
        let hex = computedColor;
        if (hex.length === 4) {
            hex = "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${ r }, ${ g }, ${ b }, ${ opacity })`;
    } else if (computedColor.startsWith("rgb(")) {
        return computedColor.replace("rgb(", "rgba(").replace(")", `, ${ opacity })`);
    }
    return computedColor;
};

const gradientStyle = computed(() => ({
    backgroundImage: `linear-gradient(${ gradientMode.value }, ${ convertToRgba(colorFrom.value, props.opacity) }, ${ convertToRgba(colorVia.value, props.opacity) }, ${ convertToRgba(colorTo.value, props.opacity) })`
}));

</script>

<template>
    <div class="relative w-full">
        <img :src="props.urlImage" alt="Background" class="w-full object-contain"/>
        <div class="absolute inset-0">
            <section class="order-1 grid h-full grid-cols-2 sm:grid-cols-12" :style="gradientStyle">
                <article class="col-span-8 p-4">
                    <slot name="description"/>
                </article>
                <div class="col-span-4 flex items-center justify-center rounded-br-lg p-5 rounded-se-lg">
                    <slot name="images"/>
                </div>
            </section>
        </div>
    </div>
</template>
