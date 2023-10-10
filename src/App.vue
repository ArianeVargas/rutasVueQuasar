<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="secondary" to="/">Login</q-btn>
      <q-btn color="amber" to="/compras">Compras</q-btn>
      <q-btn color="primary" to="/acount">Acount</q-btn>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>