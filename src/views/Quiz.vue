<script setup>
import quizzes from "@/data/quizzes";
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const router = useRouter();

const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const isCorrect = ref(null);
const userAnswers = ref([]);

const quiz = quizzes.find((elem) => elem.id === Number(route.params.id));
const question = computed(() => quiz.questions[currentQuestionIndex.value]);

function checkAnswer(iOption) {
  if (selectedAnswer.value !== null) return;

  selectedAnswer.value = iOption;
  isCorrect.value = question.value.correctAnswer === selectedAnswer.value;
  userAnswers.value.push({ answer: iOption, isCorrect: isCorrect.value });
}

const correctCount = computed(
  () => userAnswers.value.filter((elem) => elem.isCorrect === true).length,
);

function nextQuestion() {
  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    router.push("/results");
  }
  currentQuestionIndex.value++;
  selectedAnswer.value = null;
  isCorrect.value = null;

  localStorage.setItem("correctCount", JSON.stringify(correctCount.value));
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers.value));
}
</script>

<template>
  <div class="quiz_page">
    <div v-if="!quiz">Викторина не найдена</div>
    <div class="quiz_container" v-else>
      <h1 class="quiz_title">{{ quiz.description }}</h1>
      <h2 class="quiz_category">Категория: {{ quiz.category }}</h2>
      <div class="question_block" v-if="quiz.questions[currentQuestionIndex]">
        <h3 class="question_subtitle">{{ question.subQuestion }}</h3>
        <p class="question_text">{{ question.question }}</p>
        <p class="question_number">Вопрос № {{ currentQuestionIndex + 1 }}</p>
        <div
          v-for="(option, indexOption) in question.options"
          :key="indexOption"
          class="option_item"
        >
          <button
            class="option_btn"
            @click="checkAnswer(indexOption)"
            :disabled="selectedAnswer !== null"
            :class="{
              correct:
                selectedAnswer !== null &&
                indexOption === question.correctAnswer,
              inCorrect:
                selectedAnswer === indexOption &&
                selectedAnswer !== question.correctAnswer,
            }"
          >
            {{ option }}
          </button>
        </div>
        <p class="question_description" v-if="selectedAnswer !== null">
          {{ question.description }}
        </p>
        <button class="next_btn" :disabled="selectedAnswer === null" @click="nextQuestion">
          Следующий вопрос
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.correct {
  background-color: green;
}

.inCorrect {
  background-color: red;
}


</style>
