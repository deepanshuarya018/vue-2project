<template>
    <div>
    <h2>Child Component B</h2>
    <p>{{ message }}</p>
    </div>
</template>
<script>
import { bus } from '@/event-bus.js';
export default {
    data() {
        return {
            message: ''
        }
    },
    created() {
        bus.$on('child-event', (message) => {
            this.message = message;
        });
    }
}
</script>