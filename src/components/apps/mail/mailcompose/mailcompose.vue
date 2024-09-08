<template>
  <!-- Row -->
  <Pageheader heading="WhastApp-Compose" :maintitle='["Apps", "WhastApp", "WhastApp-Compose"]' />
  <div class="row row-sm">
    <div class="col-lg-4 col-xl-3 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="">
            <div class="main-mail-menu">
              <nav class="nav main-nav-column mg-b-20">
                <label class="main-content-label main-content-label-sm">Carpetas</label>
                <router-link class="nav-link" :to="`${url}apps/mail/mailinbox`">
                  <i class="fe fe-mail"></i> Social
                  <span class="badge bg-primary">10</span>
                </router-link>
                <router-link class="nav-link" :to="`${url}apps/mail/mailinbox`">
                  <i class="fe fe-mail"></i> Promotions
                  <span class="badge bg-secondary">20</span>
                </router-link>
                <router-link class="nav-link" :to="`${url}apps/mail/mailinbox`">
                  <i class="fe fe-mail"></i> Updates
                  <span class="badge bg-success">20</span>
                </router-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-xl-9 col-md-12">
      <div class="card custom-card">
        <div class="card-header">
          <h3 class="card-title fs-18">
            <label class="main-content-label fs-15">Crear Mensaje</label>
          </h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <div class="row align-items-center">
                <label class="col-sm-3 col-xl-2 form-label fs-semibold">Para</label>
                <div class="col-sm-9 col-xl-10">
                  <VueMultiselect
                    v-model="selected"
                    :options="contactos"
                    :multiple="true"
                    :close-on-select="false"
                    placeholder="Seleccione contactos"
                    label="nombre"
                    track-by="numero"
                    class="custom-multiselect"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row align-items-center">
                <label class="col-sm-3 col-xl-2 form-label fs-semibold">Opcional</label>
                <div class="col-sm-9 col-xl-10">
                  <input type="text" class="form-control" v-model="form.opcional" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row align-items-center">
                <label class="col-sm-3 col-xl-2 form-label fs-semibold">Asunto</label>
                <div class="col-sm-9 col-xl-10">
                  <input type="text" class="form-control" v-model="form.asunto" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <label class="col-sm-3 col-xl-2 form-label fs-semibold">Mensaje</label>
                <div class="col-sm-9 col-xl-10">
                  <textarea rows="10" class="form-control" v-model="form.mensaje"></textarea>
                </div>
              </div>
            </div>
            <div class="form-group" v-if="uploadedImage">
              <div class="row align-items-center">
                <label class="col-sm-3 col-xl-2 form-label fs-semibold">Imagen</label>
                <div class="col-sm-9 col-xl-10">
                  <img :src="uploadedImageUrl" alt="Uploaded Image" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="form-group" v-if="addedLink">
              <div class="row align-items-center">
                <label class="col-sm-3 col-xl-2 form-label fs-semibold">Link</label>
                <div class="col-sm-9 col-xl-10">
                  <a :href="addedLink" class="color-primary" target="_blank">{{ addedLink }}</a>
                </div>
              </div>
            </div>
            <div class="btn-list ms-auto">
              <button type="button" class="btn btn-danger" @click="resetForm">Cancelar</button>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
        <div class="card-footer d-sm-flex rounded-0">
          <div class="">
            <a href="javascript:void(0)" class="btn px-2" data-bs-toggle="tooltip" title="" data-bs-original-title="Link" @click="openModal('Agregar Link', 'addLinkContent')">
              <i class="fe fe-link fs-16"></i>
            </a>
            <a href="javascript:void(0)" class="btn px-2" data-bs-toggle="tooltip" title=""
              data-bs-original-title="Photos" @click="triggerImageUpload">
              <i class="fe fe-image fs-16"></i>
            </a>
            <input type="file" ref="imageInput" accept="image/*" style="display: none;" @change="handleImageUpload" />
            <a href="javascript:void(0)" class="btn px-2" data-bs-toggle="tooltip" title=""
              data-bs-original-title="Guardar">
              <i class="fe fe-save fs-16"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Modal -->
  <BasicModal :title="modalTitle" @save="handleSave">
    <template v-if="modalContent === 'addLinkContent'">
      <div>
        <label for="linkInput">URL:</label>
        <input type="text" id="linkInput" v-model="linkInput" class="form-control" />
      </div>
    </template>
  </BasicModal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import BasicModal from "../../../../components/utilities/designs/modals/BasicModal.vue";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import VueMultiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css'; // Ruta corregida

const url = import.meta.env.BASE_URL;

// Form data
const form = ref({
  para: '',
  opcional: '',
  asunto: '',
  mensaje: ''
});

const selected = ref([]);

const contactos = ref([
  { nombre: 'yo', numero: '3177289785' },
  { nombre: 'mamá', numero: '3162904014' },
  // Agrega más contactos según sea necesario
]);

const imageInput = ref(null);
const uploadedImage = ref(null);
const uploadedImageUrl = ref('');
const addedLink = ref('');

// Modal link
const modalTitle = ref('');
const modalContent = ref('');
const linkInput = ref('');

const openModal = (title, content) => {
  modalTitle.value = title;
  modalContent.value = content;
  const modal = new bootstrap.Modal(document.getElementById('modaldemo1'));
  modal.show();
};

const handleSave = () => {
  if (modalContent.value === 'addLinkContent') {
    addedLink.value = linkInput.value;
  }
  const modal = bootstrap.Modal.getInstance(document.getElementById('modaldemo1'));
  modal.hide();
};

// Upload image
const triggerImageUpload = () => {
  imageInput.value.click();
};

const handleImageUpload = (event) => {
  const image = event.target.files[0];
  uploadedImage.value = image;
  uploadedImageUrl.value = URL.createObjectURL(image);
};

// Submit form
const submitForm = async () => {
  const formData = {
    para: selected.value.map(contact => contact.numero),
    opcional: form.value.opcional,
    asunto: form.value.asunto,
    mensaje: form.value.mensaje,
    imagen: uploadedImageUrl.value,
    link: addedLink.value
  };

  const mensajeWhatsApp = `
    ¡Hola!
    
    ${formData.asunto}.
    
    ${formData.mensaje}
    ${formData.imagen ? `Aquí tienes una imagen relacionada: ${formData.imagen}` : ''}
    ${formData.link ? `Puedes ver más detalles en el siguiente enlace: ${formData.link}` : ''}

    ¡Gracias!
  `;

  try {
    await axios.post('http://localhost:3100/api/send-whatsapp', {
      numeros: formData.para,
      mensaje: mensajeWhatsApp
    });
    alert('Mensajes enviados exitosamente');
  } catch (error) {
    console.error('Error enviando mensajes:', error);
    alert('Hubo un error enviando los mensajes');
  }
};

// Reset form
const resetForm = () => {
  form.value = {
    para: '',
    opcional: '',
    asunto: '',
    mensaje: ''
  };
  uploadedImage.value = null;
  uploadedImageUrl.value = '';
  addedLink.value = '';
  selected.value = [];
};

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});
</script>

<style scoped>
</style>