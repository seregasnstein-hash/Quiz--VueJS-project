<script setup>
const correctCount = JSON.parse(localStorage.getItem("correctCount"));
const userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
</script>

<template>
  <div>
    <h1>Результаты теста</h1>
    <p>Правильных ответов: {{ correctCount }} из {{ userAnswers.length }}</p>
  </div>
</template>
