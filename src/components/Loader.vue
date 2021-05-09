<template>
    <div v-if="isVisible" class="loader-overlay">
        <b-spinner label="Large Spinner"></b-spinner>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        props: {
            isVisible: {type: Boolean, required: true},
            text: {type: String, required: false, default: ""},
        },
}
</script>

<style scoped>
    .loader-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 999;
        cursor: pointer;
    }
    .loader-overlay span {
        height: 80px;
        width: 80px;
        position: absolute;
        top: 50%;
    }
</style>