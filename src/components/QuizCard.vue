<script setup>
defineProps({
  quiz: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="quiz_card">
    <div class="quiz_info">
      <span class="category">{{ quiz.category }}</span>
      <h3>{{ quiz.title }}</h3>
      <p>{{ quiz.description }}</p>
      <span class="questions-count">Кол-во вопросов: {{ quiz.questionsCount }}</span>
    </div>
    <RouterLink :to="`/quiz/${quiz.id}`" class="start_button">
      Начать тест
    </RouterLink>
  </div>
</template>

<style scoped>
.quiz_card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
    padding: 25px;
    background-color: #222235;
    border: 1px solid #34344d;
    border-radius: 14px;
    transition: transform 0.3s, border-color 0.3s;
}

.quiz_card:hover{
    transform: translateY(-5px);
    border-color: #8b5cf6;
}

.category{
    display: inline-block;
    margin-bottom: 15px;
    padding: 6px 12px;
    background-color: #373052;
    color: #c4b5fd;
    border-radius: 20px;
    font-size: 13px;
}

.quiz_info h3{
    margin-bottom: 12px;
    font-size: 22px;
}

.quiz_info p{
    margin-bottom: 18px;
    color: #aaaabd;
    line-height: 1.5;
}

.questions_count{
    color: #a78bfa;
    font-size: 14px;
}

.start_button{
    padding: 12px;
    background-color: #8b5cf6;
    color: white;
    text-align: center;
    border-radius: 8px;
    transition: background-color 0.3s;
}

.start_button:hover{
    background-color: #7c3aed;
}
</style>