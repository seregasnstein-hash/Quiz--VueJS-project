<script setup>
    import quizzes from '@/data/quizzes';
    import { useRoute } from 'vue-router';
    const route = useRoute()

    const quiz = quizzes.find((elem)=> elem.id === Number(route.params.id))
</script>


<template>
    <div>
        <div v-if="!quiz">Викторина не найдена</div>
        <div v-else>{{ quiz.title }}</div>
    </div>
</template>