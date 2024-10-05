<template>
  <section class="testimonials">
    <h3 class="testimonials__title">Opiniones de nuestros clientes</h3>
    <p class="testimonials__subtitle">
      Hemos recibido estos comentarios de los usuarios
    </p>
    <div class="testimonials__wrapper">
      <button class="testimonials__arrow testimonials__arrow--left" @click="scrollLeft">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="testimonials__slider" ref="slider">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial">
          <h4 class="testimonial__name">{{ testimonial.name }}</h4>
          <div class="testimonial__stars">
            <i class="fas fa-star" v-for="star in 5" :key="star"></i>
          </div>
          <p class="testimonial__text">{{ testimonial.text }}</p>
        </div>
      </div>
      <button class="testimonials__arrow testimonials__arrow--right" @click="scrollRight">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Testimonial {
  name: string;
  text: string;
}

export default defineComponent({
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          name: 'Isabella Rodríguez',
          text: 'Tuve una experiencia maravillosa al utilizar los servicios de consultoría de esta empresa. Me ayudaron en todo momento y los resultados superaron mis expectativas.',
        },
        {
          name: 'Diego Martinez',
          text: 'La experiencia al obtener servicios de consultoría de esta empresa fue realmente fiable. Me brindaron el soporte necesario para avanzar con mi proyecto.',
        },
        {
          name: 'Sofia García',
          text: 'No podría estar más satisfecha con los servicios de consultoría que obtuve de esta empresa. Su atención al detalle y profesionalismo fueron excepcionales.',
        },
        {
          name: 'Laura Pérez',
          text: 'Gracias a esta empresa de consultoría, pude resolver un problema complejo en muy poco tiempo. Su equipo es altamente competente y siempre dispuesto a ayudar.',
        },
        {
          name: 'Juan Carlos Fernández',
          text: 'La consultoría brindada por esta empresa fue esencial para el éxito de mi trámite. Su conocimiento y experiencia en el área son incomparables.',
        },
        {
          name: 'Carmen López',
          text: 'El equipo de esta empresa de consultoría demostró una gran dedicación y compromiso. No solo resolvieron mis inquietudes, sino que también me ofrecieron soluciones innovadoras.',
        },
        {
          name: 'Andrés Ramírez',
          text: 'Mi experiencia con esta empresa de consultoría fue sobresaliente. Fueron muy profesionales y su enfoque en el cliente es realmente apreciable.',
        },
        {
          name: 'Valentina Torres',
          text: 'Recomiendo ampliamente los servicios de esta empresa. Su capacidad para entender y abordar mis necesidades fue impresionante.',
        },
        {
          name: 'Mario González',
          text: 'Gracias a la consultoría recibida, mi proyecto avanzó de manera significativa. Aprecio su atención personalizada y su enfoque estratégico.',
        },
        {
          name: 'Patricia Sánchez',
          text: 'Estoy muy contenta con el servicio recibido. La empresa demostró un conocimiento profundo del tema y me proporcionó soluciones eficientes.',
        },
      ] as Testimonial[],
    };
  },
  methods: {
    scrollLeft() {
      const slider = this.$refs.slider as HTMLElement;
      slider.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight() {
      const slider = this.$refs.slider as HTMLElement;
      slider.scrollBy({ left: 300, behavior: 'smooth' });
    },
  },
  mounted() {
    const slider = this.$refs.slider as HTMLElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // La cantidad que se desliza
      slider.scrollLeft = scrollLeft - walk;
    });
  },
});
</script>

<style scoped>
.testimonials {
  padding: 40px;
  background-color: #ffffff;
}

.testimonials__title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

.testimonials__subtitle {
  font-size: 1rem;
  margin-bottom: 32px;
  text-align: center;
}

.testimonials__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.testimonials__slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 20px;
  padding-bottom: 20px;
  -webkit-overflow-scrolling: touch;
  flex: 1;
}

.testimonial {
  background-color: #f3f4f6;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 100%;
  max-width: 300px;
}

.testimonial__name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.testimonial__stars {
  color: #fbbf24;
  margin-bottom: 16px;
}

.testimonial__text {
  font-size: 0.95rem;
  color: #4b5563;
}

.testimonials__slider.active {
  cursor: grabbing;
}

.testimonials__slider::-webkit-scrollbar {
  display: none;
}

/* Estilos para las flechas de navegación */
.testimonials__arrow {
  background: none;
  border: none;
  color: #6b7280;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}

.testimonials__arrow--left {
  left: 10px;
}

.testimonials__arrow--right {
  right: 10px;
}

/* Mostrar flechas en pantallas grandes */
@media (min-width: 768px) {
  .testimonials__arrow {
    display: block;
  }
}
</style>
