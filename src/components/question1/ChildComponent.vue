<template>
    <div>
        <button v-if="eventProp" @click="emitEvent">Emit Event</button>
        <p v-if="textProp">{{ textProp }}</p>
        <slot></slot>
        <div v-if="eventBus">
            <h2>Child Component A</h2>
            <button @click="emitEventBus">Emit Event</button>
        </div>
    </div>
</template>
<script>
import { bus } from '@/event-bus.js';
export default {
    props: ['textProp', 'eventProp', 'eventBus'],
    methods: {
        emitEvent() {
            this.$emit('child-event', 'Hello from child component!');
        },
        emitEventBus() {
            bus.$emit('child-event', 'Hello from Child Component A!');
        }
    }
}
</script>
<style>
</style>