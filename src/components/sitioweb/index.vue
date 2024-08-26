<template>
    <section class="tw-grid-cols-[1fr_4fr] tw-grid tw-bg-white  md:tw-rounded-3xl">
        <aside class="md:tw-z-2 md:tw-rounded-s-2xl md:tw-h-[500px] md:tw-flex md:tw-flex-col">
            <div class="md:tw-p-4 md:tw-text-white">
                <p class="md:tw-text-sm md:tw-font-bold md:tw-mb-5">Rellena el formulario para generar tu página web con IA en minutos!</p>
                <h2 class="md:tw-font-bold md:tw-text-lg">Progreso <span id="progressPercentage">{{ progressPercentage }}</span>%</h2>
                <div id="progressBarBg" class="md:tw-w-full md:tw-rounded-md md:tw-h-5 tw-bg-slate-600">
                    <div :style="widthProgressBarChild" id="progressBarChild" class="tw-bg-orange-500 md:tw-rounded-md"></div>
                </div>
            </div>
            <hr class="md:tw-h-1 tw-bg-orange-500 md:tw-border-none">
            <div id="listOfQuestions" class="contenedor-banco-preguntas md:tw-overflow-y-auto md:tw-flex-1">
                <div class="banco-preguntas">
                    <ul class="md:tw-flex md:tw-flex-col md:tw-space-y-5 md:tw-mt-5">
                        <li v-for="(question, index) in questions" 
                            :key="index"
                            :class="[
                                'md:tw-w-full md:tw-h-[70px] md:tw-p-4 tw-flex tw-space-x-3 tw-items-center',
                                index === currentQuestionIndex ? leftBorder : ''
                            ]">
                            <i :class="question.icon"></i>
                            <p>{{ question.pregunta }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <main class="md:tw-rounded-2xl">
            <div id="upperSectionForm" class="tw-relative tw-px-[20px] lg:tw-px-20 md:tw-py-10 lg:tw-px-30 tw-bg-[#f5f5f5] md:tw-rounded-e-3xl">
                <h1 class="tw-text-black tw-text-2xl">
                    <span id="currentQuestion">{{ questions[currentQuestionIndex].pregunta }}</span>
                </h1>
                <div v-if="questions[currentQuestionIndex].opt" id="currentAnswers" class="md:tw-flex tw-space-x-20 lg:tw-space-x-40 md:tw-h-full">
                    <div v-for="opt in questions[currentQuestionIndex].opt" :key="opt.id" class="md:tw-flex md:tw-space-x-2 md:tw-items-center">
                        <label :for="opt" class="md:tw-text-xl md:tw-m-0 md:tw-text-black">{{ opt }}</label>
                        <input 
                            @click="showNextQuestionButton" 
                            type="radio" 
                            name="choice" 
                            :id="opt" 
                            :value="opt" 
                            v-model="selectedOption"
                            class="md:tw-size-5 squared-radio">
                    </div>
                </div>
                <div v-else-if="questions[currentQuestionIndex].colors" id="currentAnswers" class="tw-mt-2 md:tw-h-1/5 tw-flex tw-space-x-5">
                    <input 
                        @input="handleInputChange" 
                        type="color" 
                        id="colorPrimary" 
                        v-model="colorPrimary"
                        class="form-control">
                    <input 
                        @input="handleInputChange" 
                        type="color" 
                        id="colorSecundary" 
                        v-model="colorSecundary"
                        class="form-control">
                    <input 
                        @input="handleInputChange" 
                        type="color" 
                        id="colorTerciary" 
                        v-model="colorTerciary"
                        class="form-control">
                </div>
                <div v-else id="currentAnswers" class="tw-mt-2 md:tw-h-1/5">
                    <input 
                        @input="handleInputChange" 
                        id="inputTextAnswer" 
                        v-model="textAnswer"
                        type="text" 
                        class="form-control"
                        placeholder="Ingresa tu respuesta aquí">
                </div>
                <button v-if="buttonNextQuestionActive" id="nextQuestionButton" @click="nextQuestion" class="tw-absolute tw-right-8 tw-bottom-10 lg:tw-right-20 lg:tw-bottom-10 tw-flex tw-items-center tw-space-x-2">
                    <span>siguiente</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div id="containerMessages" class="md:tw-text-black md:tw-p-3 tw-overflow-y-scroll messages">
                <div v-for="(message, index) in chatMessages" :key="index">
                    <component :is="message.sender === 'bot' ? ChatBot : ChatUsuario" :message="message.message" />
                </div>
            </div>
            <div>
                <div class="md:tw-flex md:tw-justify-end md:tw-p-4">
                <button @click="openModal" class="tw-text-orange-700 tw-py-2 tw-px-4">¿Necesitas ayuda?</button>
                </div>
                <ModalAyuda ref="modalAyuda"></ModalAyuda>
            </div>
        </main>
    </section>
</template>

<script setup>
import { ref, nextTick } from 'vue';
// import ModalAyuda from "../SitioWeb/ModalAyuda.vue"
import ChatBot from "./components/ChatBot.vue";
import ChatUsuario from "./components/ChatUsuario.vue";

const questions = [
    {pregunta: "¿Qué comercializas?", opt: ["Productos", "Servicios"], icon: "fa-solid fa-tags tw-text-xl"},
    {pregunta: "¿Cuál es el nombre de tu negocio?", icon: "fa-solid fa-briefcase tw-text-xl"},
    {pregunta: "¿Tienes una ubicación física? Si es así, ¿cuál es la dirección?", icon: "fa-solid fa-location-dot tw-text-xl"},
    {pregunta: "¿Tienes perfiles en redes sociales? ¿Cuáles?", icon: "fa-solid fa-icons tw-text-xl"},
    {pregunta: "¿Qué colores quieres para tu sitio web?", icon: "fa-solid fa-paint-roller tw-text-xl", colors: true},
    {pregunta: "¿Tienes algún logo? Si es así, cárgalo en el siguiente apartado", opt: ["Sí", "No"], icon: "fa-solid fa-file-circle-question tw-text-xl"},
    {pregunta: "¿Tienes algún logo? Si es así, cárgalo en el siguiente apartado", opt: ["Sí", "No"], icon: "fa-solid fa-file-circle-question tw-text-xl"},
    {pregunta: "¿Tienes algún logo? Si es así, cárgalo en el siguiente apartado", opt: ["Sí", "No"], icon: "fa-solid fa-file-circle-question tw-text-xl"},
    {pregunta: "¿Tienes algún logo? Si es así, cárgalo en el siguiente apartado", opt: ["Sí", "No"], icon: "fa-solid fa-file-circle-question tw-text-xl"},
    {pregunta: "¿Tienes algún logo? Si es así, cárgalo en el siguiente apartado", opt: ["Sí", "No"], icon: "fa-solid fa-file-circle-question tw-text-xl"},
]

let currentQuestionIndex = ref(0)
let progressPercentage = ref(0)

// Styles for current question
let widthProgressBarChild = ref(`width: ${progressPercentage.value}%; height: 100%;`)
const leftBorder = "md:tw-w-full md:tw-h-20 md:tw-p-4 md:tw-border-l-[10px] tw-border-l-indigo-600 tw-content-center"

let buttonNextQuestionActive = ref(false)
let responses = ref([]) // Array to store responses

// Reactive variables for form inputs
let selectedOption = ref(null);
let colorPrimary = ref('#000000');
let colorSecundary = ref('#000000');
let colorTerciary = ref('#000000');
let textAnswer = ref('');

// Reactive variable for chat messages
let chatMessages = ref([]); // Stores chat history

function showNextQuestionButton() {
    buttonNextQuestionActive.value = true;
}

function handleInputChange() {
    showNextQuestionButton();
}
const modalAyuda = ref(null);

const openModal = () => {
  modalAyuda.value.open();
};

function hideNextQuestionButton() {
    buttonNextQuestionActive.value = false;
}

function collectResponse() {
    let response;
    const question = questions[currentQuestionIndex.value];

    if (question.opt) {
        response = selectedOption.value;
    } else if (question.colors) {
        response = [colorPrimary.value, colorSecundary.value, colorTerciary.value];
    } else {
        response = textAnswer.value;
    }

    responses.value.push({
        question: question.pregunta,
        response: response
    });
}

function nextQuestion() {
    collectResponse(); // Collect the current response before moving to the next question

    // Add current question and response to chat history
    chatMessages.value.push({
        sender: 'bot',
        message: questions[currentQuestionIndex.value].pregunta
    });

    chatMessages.value.push({
        sender: 'user',
        message: selectedOption.value || textAnswer.value || `${colorPrimary.value}, ${colorSecundary.value}, ${colorTerciary.value}`
    });

    if (currentQuestionIndex.value < questions.length - 1) {
        currentQuestionIndex.value++;
        progressPercentage.value += Math.round(100 / questions.length);
        widthProgressBarChild.value = `width: ${progressPercentage.value}%; height: 100%; transition: 1.2s ease`;
        textAnswer.value = '';
        selectedOption.value = null;
        nextTick(() => {
            hideNextQuestionButton();
        });
    } else {
        progressPercentage.value = 100;
        widthProgressBarChild.value = `width: ${progressPercentage.value}%; height: 100%; transition: 1.2s ease`;
        let upperSectionForm = document.querySelector('#upperSectionForm');

        upperSectionForm.textContent="Formulario completado!"


        const responseObj = {
            form_completed: true,
            responses: responses.value
        }; // Log responses when the form is completed

        console.log(responseObj)
    }
}
</script>

<style scoped>

.contenedor-banco-preguntas{
    display: flex;
    margin-top: -1rem;
    margin-bottom: 1rem;
}
.squared-radio {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #555;
    margin-right: 5px;
    position: relative;
    top: 5px;
    background-color: transparent;
    margin-bottom: 10px;
}

.squared-radio:checked:after {
    content: '\2714';
    font-size: 25px;
    position: absolute;
    top: -10px;
    color: #27293d;
}

aside {
    height: calc(90vh);
    background-color: #27293d;
}

main {
    height: calc(90vh);
    display: grid;
    grid-template-rows: 2fr 5fr;
}

.messages {
    max-height: 500px;
    overflow-y: scroll;
}

.messages::-webkit-scrollbar {
  width: 8px;
}


</style>

