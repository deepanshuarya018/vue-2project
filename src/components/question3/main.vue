<template>
   <Solution :config="config"></Solution>
</template>
<script>
import Solution from './Solution.vue'
export default {
    components: {
        Solution
    },
    data () {
        return {
            config: {
                blocks: [
                {
                    "token": "PERSON_NAME",
                    "type": "text",
                    "props": {
                    "title": "Enter your name",
                    "required": true,
                    "placeholder": "e.g. John Doe"
                    }
                },
                {
                    "token": "IS_PERSON_MINOR",
                    "type": "checkbox",
                    "props": {
                        "title": "is the current person minor ?",
                        "default": false
                    }
                },
                {
                    "token": "PERSON_DOB",
                    "type": "date",
                    "props": {
                    "title": "Enter your BOD",
                    "required": "IS_PERSON_MINOR",
                    "placeholder": "e.g. 01/01/2000"
                    }
                }
            ]
            }
        }
    }
}
</script>