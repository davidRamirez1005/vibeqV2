<template>
  <vue-good-table :columns="columns" :rows="rows" :line-numbers="true" :search-options="{
    enabled: true,
  }" :pagination-options="{
  enabled: true,
  mode: 'records',
}" :compactMode="true" class="text-nowrap">
    <template #table-actions> </template>
    <template #table-row="props">
      <span v-if="props.column.field == 'actionpage'">
        <span style="font-weight: bold; color: #6259ca">{{ props.row.actionpage }}</span>
        <div class="button-list">
          <a href="javascript:void(0);" class="btn"><i class="bi bi-file-earmark-text"></i></a>
          <a href="javascript:void(0);" class="btn"><i class="bi bi-pencil-square"></i></a>
          <a href="javascript:void(0);" class="btn"><i class="bi bi-trash"></i></a>
        </div>
      </span>
      <span v-if="props.column.field == 'status'">
        <span :class="'status bg-' + props.row.statusinfo"></span>{{ props.row.status }}
      </span>
      <span v-else>
        {{ props.formattedRow[props.column.field] }}
      </span>
    </template>
  </vue-good-table>
</template>

<script>
export default {
  name: "my-component",
  data() {
    return {
      columns: [
        {
          label: "ID",
          field: "id",
        },
        {
          label: "INVOICE",
          field: "invoice",
        },
        {
          label: "NAME",
          field: "name",
        },
        {
          label: "DATE",
          field: "date",
        },
        {
          label: "TOTAL",
          field: "total",
        },
        {
          label: "WAREHOUSE",
          field: "warehouse",
        },
        {
          label: "STATUS",
          field: "status",
        },
        {
          label: "ACTIONS",
          field: "actionpage",
        },
      ],
      rows: [
        {
          id: "#W83549801",
          invoice: "2",
          name: "Anna sthesia",
          date: "08/11/2022",
          total: "$1,000",
          warehouse: "Boston",
          status: "pending",
          statusinfo: "warning",
          Placement: "top",
        },
        {
          id: "#W83549802",
          invoice: "5",
          name: "Barb Dwyer",
          date: "15/11/2022",
          total: "$4,577",
          warehouse: "Washington Dc",
          status: "Delivered",
          statusinfo: "success",
        },
        {
          id: "#W83549803",
          invoice: "3",
          name: "Wilma Mumduya",
          date: "17/11/2022",
          total: "$4,500",
          warehouse: "San Francisco",
          status: "Delivered",
          statusinfo: "success",
        },
        {
          id: "#W83549804",
          invoice: "4",
          name: "Zack Lee",
          date: "18/11/2022",
          total: "$3,266",
          warehouse: "Las Vegas",
          status: " Refunded",
          statusinfo: "info",
        },
        {
          id: "#W83549805",
          invoice: "5",
          name: "Tom Foolery",
          date: "20/11/2022",
          total: "$1,30,000",
          warehouse: "Los Angel",
          status: "Cancelled",
          statusinfo: "danger",
        },
        {
          id: "#W83549806",
          invoice: "6",
          name: "Pat Agonia",
          date: "22/11/2022",
          total: "$2,535",
          warehouse: "Chicago",
          status: "Delivered",
          statusinfo: "success",
        },
        {
          id: "#W83549807",
          invoice: "6",
          name: "Mary Christmas",
          date: "26/11/2022",
          total: "$1,526",
          warehouse: "Los Angels",
          status: "Cancelled",
          statusinfo: "danger",
        },
        {
          id: "#W83549808",
          invoice: "5",
          name: "Ella Vator",
          date: "29/11/2022",
          total: "$1,500",
          warehouse: "Chicago",
          status: "pending",
          statusinfo: "warning",
        },
        {
          id: "#W83549809",
          invoice: "8",
          name: "Sharon Needles",
          date: "01/12/2022",
          total: "$2,30,000",
          warehouse: "Uk",
          status: "Delivered",
          statusinfo: "success",
        },
        {
          id: "#W835498010",
          invoice: "7",
          name: "Anne Fibbiyon",
          date: "04/12/2022",
          total: "$33,990",
          warehouse: "Chicago",
          status: " Refunded",
          statusinfo: "info",
        },
        {
          id: "#W835498011",
          invoice: "1",
          name: "Frank Senbeans",
          date: "09/12/2022",
          total: "$12,999",
          warehouse: "Chicago",
          status: "Cancelled",
          statusinfo: "danger",
        },
        {
          id: "#W835498012",
          invoice: "12",
          name: "Chris P. Bacon",
          date: "12/12/2022",
          total: "$15,993",
          warehouse: "Brazil",
          status: "Delivered",
          statusinfo: "success",
        },
      ],
    };
  },
};
</script>
