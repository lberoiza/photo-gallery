<script setup lang="ts">

import { Photo } from "@/models/Photo.model.ts";

interface Props {
  photo?: Photo;
}

const props = defineProps<Props>();
const photo = props.photo;

</script>

<template>
  <section class="details hide-details">
    <article class="details__container">
      <div class="details__photo-controls">
        <span> B </span>
      </div>
      <div class="details__photo-container">
        <h2 class="details__photo-title">{{ photo?.alt }}</h2>
        <div class="details__photo-image-container">
          <img :src=photo?.url alt={photo.alt} class="details__photo">
        </div>
        <p class="details__photo-description">{{ photo?.description }}</p>
      </div>

      <div class="details__photo-controls">
        <span> F </span>
      </div>
    </article>
  </section>
</template>

<style scoped>

.details {
  --background-color: #aaaaaa90;
  --photo-controls-width: 5rem;
  --photo-controls-padding: 2rem;
  --container-display: none;
  --detail-animation: details-show 0.5s ease-in-out both;
  color: black;
}

.show-details {
  --container-display: flex;
  --detail-animation: details-show 0.5s ease-in-out;
}

.hide-details {
  --container-display: none;
  --detail-animation: details-show 0.5s ease-in-out reverse both;
}

.details {
  display: var(--container-display);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background-color);


  justify-content: center;
  align-items: center;
}

@keyframes details-show {
  from {
    transform: scale(0.3);
  }
  to {
    transform: scale(1);
  }
}

.details__photo-controls {
  padding: var(--photo-controls-padding);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  border-radius: 50%;
}

.details__container {
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: var(--photo-controls-width) 1fr var(--photo-controls-width);
  grid-template-rows: min-content 1fr;
  grid-template-areas:
        "close close close"
        "back photo-container forward";

  justify-items: center;
  align-items: center;
  animation: details-show 0.5s ease-in-out;

}

.details__container::before {
  font-family: Calibri, sans-serif;
  content: "X";
  grid-area: close;
  font-size: 3rem;
  place-self: start end;
  padding: 2rem;
  font-weight: 700;
}

.details__photo-container {
  grid-area: photo-container;
  width: 100%;

  display: grid;
  justify-items: center;
  gap: 2rem;
}

.details__photo-title {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  text-shadow: var(--background-color) 0.5rem 0.5rem 0.5rem 0.5rem;
}

.details__photo-description {
  font-size: 2rem;
  width: 100%;
  background-color: var(--background-color);
  padding: 2rem;
  border-radius: 0.5rem;

}

.details__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>