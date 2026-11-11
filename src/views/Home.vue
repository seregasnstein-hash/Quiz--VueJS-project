<script setup>
import QuizCard from "@/components/QuizCard.vue";
const quizzes = [
  {
    id: 1,
    title: "JavaScript",
    category: "Программирование",
    description: "Проверь, шаришь ли ты в JS",
    questionsCount: 10,
  },
  {
    id: 2,
    title: "HTML и CSS",
    category: "Веб-разработка",
    description: "Проверь, шаришь ли ты в HTML и CSS",
    questionsCount: 10,
  },
  {
    id: 3,
    title: "Vue.js",
    category: "Фреймворки",
    description: "Проверь, шаришь ли ты в Vue.js",
    questionsCount: 10,
  },
  {
    id: 4,
    title: "Node.js",
    category: "Программирование",
    description: "Проверь, шаришь ли ты в Node.js",
    questionsCount: 10,
  },
];
</script>

<template>
  <section class="home">
    <div class="page_heading">
      <h1>Поверь себя</h1>
      <p>Выбери категорию и начни игру</p>
    </div>

    <div class="quiz_grid">
      <QuizCard v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
    </div>
  </section>
</template>

<style scoped>
.page_heading {
  margin-bottom: 35px;
  text-align: center;
}

.page_heading h1 {
  margin-bottom: 12px;
  color: #a78bfa;
  font-size: 32px;
}

.page_heading p {
  color: #aaaabd;
}

.quiz_grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

@media (max-width: 600px) {
  .quiz_grid {
    grid-template-columns: 1fr;
  }
}
</style>
