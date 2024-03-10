import type { Photo } from "@/models/Photo.model.ts";
import type { GalleryInformation } from "@/models/GalleryInformation.ts";

const photos: Photo[] = [
  {
    id: "1",
    url: "https://images7.alphacoders.com/886/886915.jpg",
    alt: "Waterfall in the forest",
    description: "Waterfall in the forest"
  },
  {
    id: "2",
    url: "https://images4.alphacoders.com/869/86994.jpg",
    alt: "Orterinsel Moai",
    description: "Picture of a Moai"
  },
  {
    id: "3",
    url: "https://images7.alphacoders.com/546/546378.jpg",
    alt: "Santiago",
    description: "Picture of Santiago"
  },
  {
    id: "4",
    url: "https://plus.unsplash.com/premium_photo-1671211756361-2c2396dd245e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cactus",
    description: "Cactus in Atacama desert"
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1612712191126-863ff61b57d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Puente rojo",
    description: "Picture of Puente Rojo in Panguipulli, Chile"
  },
  {
    id: "6",
    url: "https://plus.unsplash.com/premium_photo-1671211754323-456e3f317879?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Llamas en atacama",
    description: "Picture of Llamas in Atacama desert"
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1566110980915-b04ffd619fca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Castle in Viña del mar",
    description: "Castle in Viña del mar, Chile"
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1517956918805-bbacc31d5f81?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Valparaiso",
    description: "Picture of Valparaiso, Chile"
  },
]



export const galleryInformation: GalleryInformation = {
  title: "Chile Photography",
  photos: photos
};