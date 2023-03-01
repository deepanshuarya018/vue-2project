<template>
    <form @submit.prevent="submitForm">
        <div v-for="block in blocks" :key="block.token">
            <label :for="block.token">{{ block.props.title }}</label>
            <div v-if="block.type === 'text'">
                <input :type="block.type" :placeholder="block.props.placeholder"
                :required="block.props.required" v-model="formData[block.token]">
            </div>
            <div v-if="block.type === 'checkbox'">
                <input :type="block.type" v-model="formData[block.token]" :required="block.props.default">
            <label>{{ block.props.title }}</label>
            </div>
            <div v-if="block.type === 'date'">
                <input :type="block.type" :placeholder="block.props.placeholder"
                :required="shouldRequire(block.props.required)" v-model="formData[block.token]">
            </div>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
export default {
    props: {
        config: {
        type: Object,
        required: true,
        },
    },
    data() {
        return {
            formData: {},
        };
    },
    computed: {
        blocks() {
            return this.config.blocks;
        }
    },
    methods: {
        shouldRequire(required) {
            if (!required) return false;
            const dependency = this.formData[required];
            return dependency && dependency === 'true';
        },
        submitForm() {
            if (this.validateForm()) {
                alert('Form submitted');
                this.formData = {};
            }
        },
        validateForm() {
            return this.blocks.every(block => {
                const isRequired = typeof block.props.required === 'string' ? this.formData[block.props.required] : block.props.required;
                if (isRequired && !this.formData[block.token]) {
                alert(`Field ${block.props.title} is required.`);
                return false;
                }
                return true;
            });
        }
    },
};
</script>