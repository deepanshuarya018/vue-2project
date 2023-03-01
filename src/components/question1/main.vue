<template>
    <div>
        <p>Parent child communication via props</p>
        <ChildComponent :textProp="textMsg"></ChildComponent>
        -----------------------------------------
        <p>parent child communication via slots</p>
        <ChildComponent>
            <p>This content is passed from the parent component using a slot</p>
        </ChildComponent>
        -----------------------------------------
        <p>child to parent communication</p>
        <ChildComponent :eventProp="true" @child-event="handleChildEvent"></ChildComponent>
        <p v-if="childMessage">{{ childMessage }}</p>
        -----------------------------------------
        <p>child child communication via event bus</p>
        <ChildComponent :eventBus="true"></ChildComponent>
        <ChildComponentB></ChildComponentB>
    </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue'
import ChildComponentB from './ChildComponentB.vue';
export default {
    components:{
        ChildComponent,
        ChildComponentB
    },
    data () {
        return {
            textMsg: 'Hello Child Component',
            childMessage: null
        }
    },
    methods: {
        handleChildEvent (message) {
            this.childMessage = message;
        }
    }
}
</script>
<style>
</style>