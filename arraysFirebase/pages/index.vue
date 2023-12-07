<script setup lang="ts">
import { reactive } from "vue";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";

let productos = reactive([]);
    const first = query(collection(db, "columns"));
    productos = [];
    const querySnapshot = await getDocs(first);
    querySnapshot.forEach((doc) => {
    let producto = doc.data();
    producto.id = doc.id;
    productos.push(producto);
    })
console.log("Prductos: ", productos); 

</script>

<template>
    <div>
        <li v-for="item in productos">
  {{ item.title }}
</li>
    </div>

</template>