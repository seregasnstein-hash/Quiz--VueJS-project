<script setup>
import quizzes from "@/data/quizzes";
import { useRoute, useRouter } from "vue-router";
import { ref, computed, nextTick, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const route = useRoute();
const router = useRouter();

const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const isCorrect = ref(null);
const userAnswers = ref([]);

const quiz = quizzes.find((elem) => elem.id === Number(route.params.id));
const question = computed(() => quiz.questions[currentQuestionIndex.value]);

onMounted(async () => {
  await nextTick();
  Prism.highlightAll();
});

function checkAnswer(iOption) {
  if (selectedAnswer.value !== null) return;

  selectedAnswer.value = iOption;
  isCorrect.value = question.value.correctAnswer === selectedAnswer.value;
  userAnswers.value.push({ answer: iOption, isCorrect: isCorrect.value });
}

const correctCount = computed(
  () => userAnswers.value.filter((elem) => elem.isCorrect === true).length,
);

async function nextQuestion() {
  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    localStorage.setItem("correctCount", JSON.stringify(correctCount.value));
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers.value));
    return router.push("/results");
  }
  currentQuestionIndex.value++;
  selectedAnswer.value = null;
  isCorrect.value = null;

  await nextTick();
  Prism.highlightAll();
}
</script>

<template>
  <div class="quiz_page">
    <div v-if="!quiz">Викторина не найдена</div>
    <div class="quiz_container" v-else>
      <h1 class="quiz_title">{{ quiz.description }}</h1>
      <p class="question_number">Вопрос № {{ currentQuestionIndex + 1 }}</p>
      <h3 class="question_subtitle">{{ question.subQuestion }}</h3>
      <div class="question_block" v-if="quiz.questions[currentQuestionIndex]">
        <pre
          class="question_text"
        ><code :class="`language-${quiz.language}`">{{ question.question }}</code></pre>
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
        <button
          class="next_btn"
          :disabled="selectedAnswer === null"
          @click="nextQuestion"
        >
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

.quiz_page {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}

.quiz_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 25px;
  background-color: #222235;
  border: 1px solid #34344d;
  border-radius: 14px;
  transition: border-color 0.3s;
}
.quiz_container:hover {
  border-color: #8b5cf6;
}
.question_number{
  color: #a78bfa;
  font-size: 14px;
  font-weight: 600px;
  background-color: #292940;
  padding: 6px 12px;
  border-radius: 8px;
  display: inline-block;
  width: fit-content;
}
.quiz_title {
  font-size: 28px;
}

.question_subtitle {
  color: #a78bfa;
  margin: 20px 0 0 0;
}

.question_text {
  background-color: #171725;
  padding: 16px;
  border-radius: 10px;
  overflow-x: auto;
  color: #c4b5fd;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre;
}

.question_number {
  font-size: 14px;
}

.option_btn {
  width: 100%;
  padding: 10px 20px;
  background-color: #171725;
  border: 1px solid #34344d;
  border-radius: 14px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 5px;
  cursor: pointer;
  transition:
    transform 0.3s,
    border-color 0.3s;
}
.option_btn:hover {
  border-color: #9e8fc2;
}
.option_btn:active {
  transform: translateY(2px);
}
.option_btn.correct {
  background-color: #163d32;
  border-color: #34d399;
  color: #a7f3d0;
}
.option_btn.inCorrect {
  background-color: #451f2a;
  border-color: #f87171;
  color: #fecaca;
}
.question_description {
  margin-top: 20px;
  padding: 15px 20px;
  background-color: #292940;
  border: 1px solid #34344d;
  border-radius: 14px;
  line-height: 1.6;
}

.next_btn {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 12px 34px;
  background-color: #8b5cf6;
  border: 1px solid #8b5cf6;
  border-radius: 14px;
  color: white;
  text-align: center;
  font-size: 14px;
  transition:
    transform 0.1s,
    border-color 0.3s;
}
.next_btn:hover {
  border-color: #a78bfa;
}
.next_btn:active {
  transform: translateY(2px);
}
.next_btn:disabled{
  background-color: #3b3550;
  border-color: #3b3550;
  color: #9991ad;
  cursor: not-allowed;
  opacity: 0.6;
}

@media (max-width: 600px){
  .quiz_page{
    padding: 5px;
  }
  .quiz_container{
    padding: 10px;
  }
  .option_btn{
    padding: 5px 20px;
  }
  .quiz_title{
    font-size: 24px;
    text-align: center;
  }
  .question_number{
    display: block;
    margin: 0 auto;
  }
  .question_subtitle{
    text-align: center;
    margin-top: 10px;
  }
  .next_btn{
    padding: 6px 24px;
  }
}
</style>
