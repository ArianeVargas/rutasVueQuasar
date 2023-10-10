<template>
  <div>
    <h1>Acount</h1>
    <q-btn color="secondary" label="Agregar" @click="prompt = true" />
    <div class="q-pa-md">
      <q-table title="Buses" :rows="DatosData" :columns="columns" row-key="Id" >
      <template v-slot:body-cell-acciones="{ row }">
        <q-td class="text-right" :props="rowProps">
          <q-btn color="secondary" flat icon="edit" @click="editarBus(row.Id)" />
          <q-btn color="secondary" flat icon="delete" @click="eliminarBus(row.Id)" />
        </q-td>
      </template>
      <template v-slot:body-cell-estado="{ row }">
        <q-td class="text-right" :props="rowProps">
          <span v-if="estado == true" >Activo</span>
          <span v-else >Inactivo</span>
        </q-td>
      </template>
      </q-table>
    </div>

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 text-center">Bus</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="numero_bus"
            label="Número de Autobús"
            autofocus
            @keyup.enter="prompt = false"
          />
          <q-input
            dense
            v-model="placa"
            autofocus
            label="Placa"
            @keyup.enter="prompt = false"
          />
          <q-input
            dense
            v-model="cantidad_asientos"
            label="Cantidad de asientos"
            autofocus
            @keyup.enter="prompt = false"
          />
          <q-input
            dense
            v-model="empresa_asignada"
            label="Empresa asignada"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat label="Aceptar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const DatosData = ref([]);

    const columns = [
      {
        name: "numero_bus",
        required: true,
        label: "Número de Autobús",
        field: "numero_bus",
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "placa",
        label: "Placa",
        field: "placa",
        sortable: true,
      },
      {
        name: "cantidad_asientos",
        label: "Cantidad de Asientos",
        field: "cantidad_asientos",
      },
      {
        name: "empresa_asignada",
        label: "Empresa Asignada",
        field: "empresa_asignada",
      },
      {
        name: "estado",
        label: "Estado",
        field: "estado",
      },
      {
        name: "acciones",
        label: "Acciones",
        field: "acciones",
      },
    ];

    async function ObtenerDatos() {
      try {
        const response = await axios.get(
          `https://transporte2.onrender.com/api/bus/buses`
        );

        const data = response.data;

        if (data && data.buses) {
          DatosData.value = data.buses.map((bus) => ({
            Id: bus._id,
            numero_bus: bus.numero_bus,
            placa: bus.placa,
            cantidad_asientos: bus.cantidad_asientos,
            empresa_asignada: bus.empresa_asignada,
          }));
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    function editarBus(busId) {
      // Add your logic to edit the bus here
    }

    function eliminarBus(busId) {
      // Add your logic to delete the bus here
    }

    onMounted(() => {
      ObtenerDatos();
    });

    return {
      DatosData,
      columns,
      editarBus,
      eliminarBus,
      prompt: ref(false),
    };
  },
};
</script>