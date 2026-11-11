const quizzes = [
  {
    id: 1,
    title: "JavaScript",
    description: "Вопросы на тему JavaScript",
    questions: [
      {
        id: 1,
        subQuestion: "Каков будет результат выполнения следующего кода?",

        question: `function checkScope() {
                    if (true) {
                        var x = 10;
                        let y = 20;
                    }
                     console.log(x);
                     console.log(y);
                    }
                   checkScope()`,
        options: [
          "Выведет 10, а затем 20",
          "Выведет 10, а затем вызовет ошибку ReferenceError: y is not defined",
          "Вызовет ошибку ReferenceError: x is not defined",
          "Выведет undefined для обеих переменных",
        ],
        correctAnswer: 1,
        description:
          "Переменная var имеет функциональную область видимости, поэтому доступна вне блока if. Переменная let имеет блочную область видимости и вне if не существует",
      },
      {
        id: 2,
        subQuestion: "Каков будет результат выполнения следующего кода?",

        question: `console.log(typeof null);
                   console.log([1, 2] == '1,2');`,
        options: [
          "null и false",
          "object и false",
          "object и true",
          "undefined и true",
        ],
        correctAnswer: 2,
        description:
          "typeof null возвращает object из-за исторической ошибки в JS. При сравнении массива со строкой через == массив неявно приводится к строке, вызывая метод toString(), что превращает [1, 2] в '1,2'. В итоге сравниваются две одинаковые строки, и результат равен true",
      },
      {
        id: 3,
        subQuestion: "Каков будет результат выполнения следующего кода?",

        question: `function createCounter() {
                    let count = 0;
                     return function() {
                        count++;
                        return count;
                     };
                    }

                   const counter1 = createCounter();
                   const counter2 = createCounter();

                   counter1();
                   console.log(counter1());
                   console.log(counter2());`,
        options: [
          "Выведет 2, а затем 2",
          "Выведет NaN, а затем NaN",
          "Выведет 1, а затем 1",
          "Выведет 2, а затем 1",
        ],
        correctAnswer: 3,
        description:
          "Каждое создание счетчика через createCounter() формирует свое собственное, независимое замыкание со своей переменной count. Первый счетчик мы вызвали дважды (он стал равен 2), а второй — только один раз (он вернул 1)",
      },
      {
        id: 4,
        subQuestion: "Каков будет результат выполнения следующего кода?",
        question: `const user = {
                   name: 'Алексей',
                        greetNormal: function() {
                            console.log(this.name);
                        },
                   greetArrow: () => {
                        console.log(this.name);
                        }
                    };

                   user.greetNormal();
                   user.greetArrow();`,
        options: [
          "Выведет Алексей, а затем Алексей",
          "Выведет Алексей, а затем undefined (или пустую строку в браузере)",
          "Выведет undefined для обоих вызовов",
          "Вызовет ошибку ReferenceError во втором вызове",
        ],
        correctAnswer: 1,
        description:
          "Обычная функция получает this динамически в момент вызова, поэтому this ссылается на объект user. У стрелочных функций нет своего this — они берут его из внешнего (лексического) контекста, где в данном случае this ссылается на глобальный объект window или globalThis, у которого свойства name нет",
      },
      {
        id: 5,
        subQuestion:
          "В каком порядке выведутся числа в консоли при выполнении следующего кода?",
        question: `console.log(1);

                   setTimeout(() => {
                     console.log(2);
                   }, 0);

                   Promise.resolve().then(() => {
                     console.log(3);
                   });

                  console.log(4);`,
        options: ["1, 4, 3, 2", "1, 2, 3, 4", "1, 4, 2, 3", "1, 3, 4, 2"],
        correctAnswer: 0,
        description:
          "Сначала выполняется синхронный код в порядке очереди (1, затем 4). После этого движок проверяет очередь микрозадач (Microtasks), куда попадают колбэки от промисов — выполняется 3. И только в самом конце, на следующем тике Event Loop, выполняется макрозадача (Macrotask) из setTimeout — выводится 2",
      },
      {
        id: 6,
        subQuestion: "Каков будет результат выполнения следующего кода?",
        question: `console.log(a);
                   var a = 5;
                   console.log(b);
                   let b = 10;`,
        options: [
          "Выведет undefined, а затем 10",
          "Вызовет ошибку ReferenceError на первой строке",
          "Выведет 5, а затем 10",
          "Выведет undefined, а затем вызовет ошибку ReferenceError",
        ],
        correctAnswer: 3,
        description:
          "Благодаря всплытию (hoisting) объявление var поднимается вверх и инициализируется значением undefined. Переменная let также всплывает, но попадает во временную мертвую зону (TDZ) до строки объявления, поэтому обращение к ней вызывает ReferenceError",
      },
      {
        id: 7,
        subQuestion: "Что выведет в консоль следующий код?",
        question: `const a = { count: 1 };
                   const b = a;
                   b.count = 2;
                   console.log(a.count);`,
        options: [
          "1",
          "2",
          "undefined",
          "Вызовет ошибку TypeError: Assignment to constant variable",
        ],
        correctAnswer: 1,
        description:
          "Объекты в JavaScript передаются и копируются по ссылке. Переменные a и b ссылаются на один и тот же объект в памяти, поэтому изменение свойства через b отражается и на a",
      },
      {
        id: 8,
        subQuestion: "Каков будет результат выполнения следующего кода?",
        question: `const nums = [1, 2, 3, 4];
                   const result = nums
                    .filter(n => n % 2 === 0)
                    .map(n => n * 10);
                   console.log(result);`,
        options: ["[10, 20, 30, 40]", "[20, 40]", "[2, 4]", "[10, 30]"],
        correctAnswer: 1,
        description:
          "Метод filter отбирает только четные числа, возвращая новый массив. Затем метод map умножает каждый элемент полученного массива на 10, в результате чего формируется массив [20, 40]",
      },
      {
        id: 9,
        subQuestion: "Что выведет в консоль данный код?",
        question: `console.log(0 || 'Привет' && 'Мир');`,
        options: ["0", "'Привет'", "'Мир'", "true"],
        correctAnswer: 2,
        description:
          "Логическое И (&&) имеет более высокий приоритет, чем логическое ИЛИ (||). Сначала вычисляется 'Привет' && 'Мир', что возвращает последнее истинное значение ('Мир'), а затем 0 || 'Мир' возвращает первый истинный операнд, то есть 'Мир'",
      },
      {
        id: 10,
        subQuestion: "Каков будет результат выполнения следующего кода?",
        question: `const person = { name: 'Иван', age: 25 };
                   const { name: userName, city = 'Алматы' } = person;
                   console.log(userName, city);`,
        options: [
          "Иван undefined",
          "undefined Алматы",
          "Иван Алматы",
          "Вызовет ошибку ReferenceError: userName is not defined",
        ],
        correctAnswer: 2,
        description:
          "При деструктуризации объекта свойство name записывается в новую переменную userName. Так как свойства city в исходном объекте нет, для него применяется значение по умолчанию 'Алматы'",
      },
    ],
    category: "Программирование",
  },
  {
    id: 2,
    title: "HTML и CSS",
    description: "Вопросы на тему верстки, семантики и стилей",
    questions: [
      {
        id: 1,
        subQuestion: "Какой ширины в итоге окажется блок на странице?",
        question: `.box {
                    box-sizing: border-box;
                    width: 200px;
                    padding: 20px;
                    border: 5px solid black;
                   }`,
        options: ["200px", "250px", "240px", "225px"],
        correctAnswer: 0,
        description:
          "Свойство box-sizing со значением border-box заставляет браузер включать внутренние отступы (padding) и рамки (border) в указанную ширину width, поэтому итоговая ширина элемента останется 200px",
      },
      {
        id: 2,
        subQuestion: "Какого цвета будет текст внутри параграфа?",
        question: `/* CSS */
                   #main p { color: blue; }
                   .content .text { color: green; }
                   p.text { color: red; }

                   /* HTML */
                   <div id="main" class="content">
                     <p class="text">Привет, мир!</p>
                   </div>`,
        options: [
          "Синего (blue)",
          "Зеленого (green)",
          "Красного (red)",
          "Черного (цвет по умолчанию)",
        ],
        correctAnswer: 0,
        description:
          "Селектор по идентификатору (#main p) имеет наибольшую специфичность (1-0-1) по сравнению с селекторами классов (0-2-0 и 0-1-1), поэтому применится синий цвет",
      },
      {
        id: 3,
        subQuestion: "Как расположится элемент с классом .child на экране?",
        question: `.parent {
                     position: relative;
                   }
                   .child {
                     position: absolute;
                     top: 0;
                     right: 0;
                   }`,
        options: [
          "В правом верхнем углу экрана (окна браузера)",
          "В левом верхнем углу блока .parent",
          "Останется в обычном потоке документа",
          "В правом верхнем углу блока .parent",
        ],
        correctAnswer: 3,
        description:
          "Элемент с position: absolute позиционируется относительно ближайшего родителя, у которого свойство position отлично от static. В данном случае это блок .parent с position: relative",
      },
      {
        id: 4,
        subQuestion:
          "Какое расстояние по вертикали будет между двумя соседними абзацами?",
        question: `p {
                     margin-top: 20px;
                     margin-bottom: 30px;
                   }`,
        options: ["50px", "30px", "20px", "10px"],
        correctAnswer: 1,
        description:
          "В блочной модели CSS происходит схлопывание вертикальных отступов (margin collapsing) соседних элементов. Вместо сложения выбирается наибольший из двух отступов, то есть 30px",
      },
      {
        id: 5,
        subQuestion: "Как будут выровнены дочерние элементы внутри контейнера?",
        question: `.container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;
                  }`,
        options: [
          "По центру по вертикали и прижаты к правому краю",
          "По центру по горизонтали и прижаты к низу",
          "По центру по горизонтали и прижаты к правому краю",
          "В одну строку по центру контейнера",
        ],
        correctAnswer: 0,
        description:
          "При flex-direction: column главная ось становится вертикальной, а поперечная — горизонтальной. Поэтому justify-content выравнивает элементы по вертикальному центру, а align-items прижимает их к правому краю",
      },
      {
        id: 6,
        subQuestion:
          "Какой тег лучше всего использовать для оборачивания основного уникального содержимого страницы?",
        question: `<body>
                     <header>...</header>
                     <!-- Какой тег здесь? -->
                     <footer>...</footer>
                   </body>`,
        options: ["<section>", "<article>", "<main>", "<content>"],
        correctAnswer: 2,
        description:
          "Семантический тег <main> предназначен для основного уникального контента документа, который не повторяется на других страницах (в отличие от шапки, подвала или боковой панели)",
      },
      {
        id: 7,
        subQuestion:
          "Сколько колонок создаст следующая сетка CSS Grid и какой ширины?",
        question: `.grid {
                     display: grid;
                     grid-template-columns: 100px 1fr 2fr;
                     width: 400px;
                   }`,
        options: [
          "3 колонки: 100px, 100px и 200px",
          "3 колонки: 100px, 150px и 150px",
          "3 колонки равной ширины по 133.3px",
          "2 колонки: 100px и 300px",
        ],
        correctAnswer: 0,
        description:
          "Первая колонка забирает фиксированные 100px. Оставшиеся 300px делятся на 3 равные доли (1fr + 2fr = 3fr), где 1fr равен 100px, а 2fr — 200px",
      },
      {
        id: 8,
        subQuestion:
          "Что произойдет при попытке задать ширину и высоту строчному элементу?",
        question: `span {
                    display: inline;
                    width: 200px;
                    height: 100px;
                  }`,
        options: [
          "Элемент станет размером 200 на 100 пикселей",
          "Элемент автоматически переключится на display: inline-block",
          "Сработает только width, а height проигнорируется",
          "Свойства width и height будут проигнорированы",
        ],
        correctAnswer: 3,
        description:
          "Для строчных элементов (display: inline) свойства width и height не применяются — их размеры зависят исключительно от внутреннего содержимого",
      },
      {
        id: 9,
        subQuestion: "Чему будет равен размер шрифта у элемента .text?",
        question: `html { font-size: 16px; }
                  .parent { font-size: 20px; }
                  .text { font-size: 1.5rem; }`,
        options: ["30px", "24px", "16px", "20px"],
        correctAnswer: 1,
        description:
          "Единица измерения rem (root em) всегда рассчитывается относительно размера шрифта корневого элемента html, а не ближайшего родителя. 16px умножить на 1.5 равно 24px",
      },
      {
        id: 10,
        subQuestion:
          "Какой атрибут тега <img> обязателен по стандартам доступности и валидности HTML5?",
        question: `<img src="logo.png" ... >`,
        options: ["title", "description", "alt", "caption"],
        correctAnswer: 2,
        description:
          "Атрибут alt задает альтернативный текст для изображения. Он необходим для скринридеров (программ экранного доступа) и отображается, если картинка не загрузилась",
      },
    ],
    category: "Веб-разработка",
  },
  {
    id: 3,
    title: "Vue.js",
    description:
      "Вопросы по реактивности, директивам и жизненному циклу во Vue 3",
    questions: [
      {
        id: 1,
        subQuestion:
          "Как правильно изменить значение реактивной переменной, созданной через ref, внутри тега <script setup>?",
        question: `<script setup>
                  import { ref } from 'vue';

                  const count = ref(0);
                  // Как увеличить count на 1?
                  </script>`,
        options: [
          "count.value++",
          "count++",
          "this.count++",
          "setCount(count + 1)",
        ],
        correctAnswer: 0,
        description:
          "Функция ref() оборачивает примитивное значение в реактивный объект со свойством .value. Внутри JavaScript-кода обращаться к значению и изменять его нужно через .value, хотя в шаблоне (<template>) Vue разворачивает его автоматически",
      },
      {
        id: 2,
        subQuestion:
          "В чем главное отличие директивы v-if от директивы v-show?",
        question: `<div v-if="isVisible">Блок 1</div>
                   <div v-show="isVisible">Блок 2</div>`,
        options: [
          "Никакого отличия нет, это синонимы",
          "v-if удаляет элемент из DOM-дерева, а v-show скрывает его через CSS (display: none)",
          "v-show работает только с компонентами, а v-if — только с обычными HTML-тегами",
          "v-if меняет прозрачность (opacity: 0), а v-show удаляет элемент из DOM",
        ],
        correctAnswer: 1,
        description:
          "Директива v-if осуществляет условный рендеринг: если условие ложно, элемент вообще не создается в DOM. Директива v-show всегда рендерит элемент в DOM и лишь переключает CSS-свойство display",
      },
      {
        id: 3,
        subQuestion:
          "Что произойдет при попытке деструктурировать объект, созданный через reactive()?",
        question: `import { reactive } from 'vue';

                   const state = reactive({ count: 0, name: 'Vue' });
                   let { count } = state;
                   count++;`,
        options: [
          "Значение state.count обновится до 1, интерфейс перерисуется",
          "Vue выбросит ошибку компиляции",
          "Переменная count станет обычным ref-объектом",
          "Переменная count потеряет реактивность, и state.count останется равным 0",
        ],
        correctAnswer: 3,
        description:
          "При деструктуризации примитивных свойств из reactive-объекта связь с прокси-объектом разрывается и реактивность теряется. Чтобы сохранить реактивность при деструктуризации, нужно использовать функцию toRefs(state)",
      },
      {
        id: 4,
        subQuestion:
          "В чем ключевое преимущество вычисляемых свойств (computed) перед обычными методами в шаблоне?",
        question: `const fullName = computed(() => {
                     return firstName.value + ' ' + lastName.value;
                   });`,
        options: [
          "computed может принимать аргументы напрямую из шаблона",
          "computed работает асинхронно по умолчанию",
          "computed кэширует результат и пересчитывается только при изменении его реактивных зависимостей",
          "Методы нельзя вызывать внутри интерполяции {{ }}",
        ],
        correctAnswer: 2,
        description:
          "Вычисляемые свойства кэшируются на основе их реактивных зависимостей. Если ни firstName, ни lastName не изменились, повторное обращение к fullName мгновенно вернет сохраненный результат без повторного запуска функции",
      },
      {
        id: 5,
        subQuestion:
          "Для чего необходимо указывать уникальный атрибут :key при использовании директивы v-for?",
        question: `<ul>
                     <li v-for="item in items" :key="item.id">
                       {{ item.text }}
                     </li>
                   </ul>`,
        options: [
          "Без него код не скомпилируется в браузере",
          "Он помогает алгоритму Virtual DOM точно отслеживать каждый узел при изменении порядка или удалении элементов",
          "Он автоматически сортирует массив по возрастанию ключа",
          "Он делает элементы списка доступными для поисковых роботов",
        ],
        correctAnswer: 1,
        description:
          "Атрибут key служит уникальным идентификатором для каждого элемента списка. Благодаря ему Vue может эффективно переиспользовать и переупорядочивать существующие DOM-элементы вместо их полной перерисовки",
      },
      {
        id: 6,
        subQuestion:
          "В каком хуке жизненного цикла Composition API компонент уже смонтирован и можно безопасно обратиться к его DOM-элементам?",
        question: `<script setup>
                    import { onMounted } from 'vue';
                    // ...
                   </script>`,
        options: ["onMounted", "onBeforeMount", "onCreated", "onUpdated"],
        correctAnswer: 0,
        description:
          "Хук onMounted вызывается после того, как компонент был впервые отрисован и вставлен в DOM-дерево страницы. На этом этапе уже доступны ссылки на шаблонные элементы (template refs)",
      },
      {
        id: 7,
        subQuestion: "Что делает модификатор .prevent в обработчике событий?",
        question: `<form @submit.prevent="onSubmit">
                     <button type="submit">Отправить</button>
                   </form>`,
        options: [
          "Останавливает всплытие события (event.stopPropagation())",
          "Позволяет обработчику сработать только один раз",
          "Запускает обработчик только при нажатии правой кнопки мыши",
          "Отменяет стандартное поведение браузера (event.preventDefault())",
        ],
        correctAnswer: 3,
        description:
          "Модификатор .prevent автоматически вызывает метод event.preventDefault() перед запуском обработчика. В случае с формой это предотвращает стандартную перезагрузку страницы при отправке",
      },
      {
        id: 8,
        subQuestion:
          "Как в Vue 3 принято передавать данные от дочернего компонента обратно к родительскому?",
        question: `<!-- Дочерний компонент -->
                   <script setup>
                   const emit = defineEmits(['update']);
                   </script>`,
        options: [
          "Напрямую мутировать входной параметр (prop)",
          "Сгенерировать пользовательское событие через функцию emit('update', data)",
          "Использовать глобальную шину событий $bus",
          "Передать колбэк через директиву v-bind:emit",
        ],
        correctAnswer: 1,
        description:
          "Во Vue действует однонаправленный поток данных: входные параметры (props) передаются сверху вниз, а дочерний компонент сообщает об изменениях родителю с помощью генерации событий через emit",
      },
      {
        id: 9,
        subQuestion: "В чем разница между функциями watch и watchEffect?",
        question: `watchEffect(() => {
                     console.log(userId.value);
                   });`,
        options: [
          "watchEffect автоматически отслеживает все реактивные зависимости внутри себя и запускается сразу при создании",
          "watch работает только с примитивами, а watchEffect — только с объектами",
          "watchEffect не имеет доступа к DOM-элементам",
          "watch запускается синхронно, а watchEffect — только по клику",
        ],
        correctAnswer: 0,
        description:
          "В отличие от watch, где нужно явно указывать источник отслеживания, watchEffect запускается немедленно и автоматически подписывается на все реактивные свойства, которые были прочитаны во время его выполнения",
      },
      {
        id: 10,
        subQuestion:
          "Какой встроенный компонент Vue позволяет отрендерить часть шаблона в другом месте DOM-дерева (например, модальное окно внутри <body>)?",
        question: `<template>
                     <!-- Какой тег нужно использовать? -->
                     <div class="modal">Модальное окно</div>
                   </template>`,
        options: [
          "<Portal>",
          '<Teleport to="body">',
          "<KeepAlive>",
          "<Suspense>",
        ],
        correctAnswer: 1,
        description:
          "Встроенный компонент <Teleport> позволяет «телепортировать» кусок разметки в любой существующий DOM-узел за пределами текущего компонента (например, в конец <body>), сохраняя при этом логическую связь и состояние внутри компонента",
      },
    ],
    category: "Фреймворки",
  },
  {
    id: 4,
    title: "Node.js",
    description:
      "Вопросы по архитектуре, асинхронности, модулям и встроенным API в Node.js",
    questions: [
      {
        id: 1,
        subQuestion:
          "В каком порядке выведутся сообщения в консоли при выполнении следующего кода в Node.js?",
        question: `setTimeout(() => console.log('timeout'), 0);
                   setImmediate(() => console.log('immediate'));
                   process.nextTick(() => console.log('nextTick'));
                   console.log('sync');`,
        options: [
          "sync, nextTick, timeout, immediate",
          "sync, timeout, immediate, nextTick",
          "nextTick, sync, immediate, timeout",
          "sync, immediate, timeout, nextTick",
        ],
        correctAnswer: 0,
        description:
          "Сначала выполняется синхронный код ('sync'). Затем очередь process.nextTick имеет наивысший приоритет среди асинхронных операций и выполняется сразу после текущей фазы ('nextTick'). Далее Event Loop переходит к фазам таймеров (setTimeout) и проверки (setImmediate)",
      },
      {
        id: 2,
        subQuestion:
          "Что выведет в консоль следующий код внутри обычного CommonJS-модуля в Node.js?",
        question: `console.log(this === module.exports);
                   console.log(this === global);`,
        options: [
          "false и true",
          "true и true",
          "true и false",
          "false и false",
        ],
        correctAnswer: 2,
        description:
          "В Node.js каждый CommonJS-файл оборачивается в функцию-обертку, где ключевое слово this на верхнем уровне ссылается на объект module.exports, а не на глобальный объект global",
      },
      {
        id: 3,
        subQuestion:
          "В чем главное преимущество использования потоков (Streams) при чтении большого файла в Node.js?",
        question: `const fs = require('fs');
                   const readStream = fs.createReadStream('huge-video.mp4');
                   readStream.pipe(res);`,
        options: [
          "Потоки сжимают файл перед отправкой клиенту",
          "Потоки автоматически кэшируют файл на диске",
          "Метод pipe() блокирует основной поток до полного завершения чтения",
          "Файл читается и передается небольшими частями (чанками), не загружая его целиком в оперативную память",
        ],
        correctAnswer: 3,
        description:
          "Потоки позволяют обрабатывать данные по частям (chunks) по мере их поступления. Это избавляет от необходимости загружать гигабайты данных в оперативную память сервера перед отправкой",
      },
      {
        id: 4,
        subQuestion:
          "Как получить аргументы командной строки, переданные при запуске скрипта node app.js --port=3000?",
        question: `// Запуск: node app.js --port=3000
                   console.log(/* что нужно написать? */);`,
        options: [
          "process.env.ARGS",
          "process.argv",
          "os.args()",
          "global.arguments",
        ],
        correctAnswer: 1,
        description:
          "Свойство process.argv возвращает массив, содержащий путь к исполняемому файлу Node.js, путь к запускаемому файлу скрипта и все последующие переданные аргументы командной строки",
      },
      {
        id: 5,
        subQuestion:
          "В чем разница между экспортами в CommonJS (module.exports) и ES-модулях (export default)?",
        question: `// CommonJS
                   module.exports = { a: 1 };

                   // ES Modules
                   export default { a: 1 };`,
        options: [
          "CommonJS загружается синхронно во время выполнения, а ES-модули поддерживают статический анализ и асинхронную загрузку",
          "ES-модули работают только в браузере и не поддерживаются в Node.js",
          "CommonJS нельзя использовать для импорта JSON-файлов",
          "Между ними нет разницы, это просто разный синтаксис одного механизма",
        ],
        correctAnswer: 0,
        description:
          "require() в CommonJS выполняется синхронно в момент вызова функции. Инструкции import/export в ES-модулях анализируются статически на этапе парсинга до выполнения кода, что позволяет делать tree-shaking",
      },
      {
        id: 6,
        subQuestion: "Для чего в Node.js используется встроенный класс Buffer?",
        question: `const buf = Buffer.from('Привет', 'utf-8');
                   console.log(buf);`,
        options: [
          "Для кэширования HTTP-запросов в памяти",
          "Для прямой работы с бинарными данными и потоками байтов вне кучи V8",
          "Для ограничения частоты вызова функций (debounce)",
          "Для создания пула подключений к базе данных",
        ],
        correctAnswer: 1,
        description:
          "JavaScript изначально плохо работал с сырыми бинарными данными. Класс Buffer выделяет область памяти вне движка V8 для эффективного чтения и записи байтов при работе с файлами, сокетами и криптографией",
      },
      {
        id: 7,
        subQuestion:
          "Что произойдет, если в объекте EventEmitter сгенерировать событие 'error', на которое не подписан ни один обработчик?",
        question: `const EventEmitter = require('events');
                   const emitter = new EventEmitter();

                   emitter.emit('error', new Error('Что-то пошло не так'));`,
        options: [
          "Событие будет молча проигнорировано",
          "Ошибка автоматически запишется в файл error.log",
          "Метод emit вернет false и продолжит выполнение кода",
          "Node.js выбросит неперехваченное исключение, выведет стек ошибки и аварийно завершит процесс",
        ],
        correctAnswer: 3,
        description:
          "Событие 'error' является особенным для EventEmitter. Если у него нет ни одного слушателя (listener), Node.js воспринимает это как критический сбой и завершает работу всего приложения",
      },
      {
        id: 8,
        subQuestion: "За что отвечает библиотека libuv в архитектуре Node.js?",
        question: `// Стек технологий Node.js:
                   // JavaScript -> V8 -> Node.js Bindings -> libuv`,
        options: [
          "За компиляцию JavaScript-кода в машинный код",
          "За управление пакетами и зависимостями в node_modules",
          "За реализацию цикла событий (Event Loop), пула потоков и асинхронного ввода-вывода (I/O)",
          "За парсинг HTML и рендеринг страниц на сервере",
        ],
        correctAnswer: 2,
        description:
          "Движок V8 отвечает только за выполнение самого JavaScript. Кроссплатформенная библиотека libuv написана на C и обеспечивает работу Event Loop, асинхронную работу с файловой системой, сетью и пул рабочих потоков (Worker Pool)",
      },
      {
        id: 9,
        subQuestion:
          "Какой встроенный модуль позволяет запустить дочерние копии Node.js-приложения на всех ядрах процессора для распределения входящего трафика?",
        question: `const cluster = require('cluster');
                   const numCPUs = require('os').availableParallelism();`,
        options: [
          "Модуль cluster",
          "Модуль path",
          "Модуль assert",
          "Модуль querystring",
        ],
        correctAnswer: 0,
        description:
          "Один процесс Node.js работает в одном потоке и использует только одно ядро CPU. Модуль cluster позволяет создать несколько дочерних процессов (воркеров), которые разделяют один и тот же серверный порт",
      },
      {
        id: 10,
        subQuestion:
          "Чем отличается метод path.join() от path.resolve() при работе с путями к файлам?",
        question: `const path = require('path');
                   console.log(path.join('/a', '/b'));
                   console.log(path.resolve('/a', '/b'));`,
        options: [
          "path.resolve работает только в Windows, а path.join — только в Linux",
          "path.join склеивает сегменты в относительный путь, а path.resolve всегда возвращает абсолютный путь от корня",
          "path.join проверяет существование файла на диске, а path.resolve — нет",
          "Оба метода вернут абсолютно одинаковый результат в любых ситуациях",
        ],
        correctAnswer: 1,
        description:
          "path.join() просто объединяет переданные сегменты с учетом разделителя ОС (вернет '/a/b'). path.resolve() обрабатывает пути справа налево как последовательность команд cd и всегда формирует абсолютный путь (в примере вернет '/b', так как '/b' начинается с корня)",
      },
    ],
    category: "Программирование",
  },
];

export default quizzes;
