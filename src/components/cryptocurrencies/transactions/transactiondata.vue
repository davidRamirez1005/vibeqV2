<template>
  <vue-good-table :columns="columns" :rows="rows" :line-numbers="false" :search-options="{
    enabled: true,
  }" :pagination-options="{
  enabled: true,
  mode: 'records',
}" :compactMode="true">
    <template #table-row="props">
      <span v-if="props.column.field == 'd'">
        <span class="crypto-icon bg-primary-transparent me-3 my-auto">
          <i :class="'fe fe-arrow-' +
            props.row.direction +
            '-' +
            props.row.position +
            ' text-primary'
            ">
          </i>
        </span>
      </span>
      <div v-else-if="props.column.field == 'to'">
        <div class="d-sm-flex my-auto w-10r">
          <img :src="props.row.idcard" class="avatar avatar-sm mx-2 float-end" alt="img" />
          <span class="my-auto">{{ props.row.to }}</span>
        </div>
      </div>

      <span v-else-if="props.column.field == 'coin'">
        <div class="d-sm-flex my-auto w-10r">
          <img :src="props.row.currency" class="avatar avatar-sm mx-2 float-end" alt="img" />
          <span class="my-auto">{{ props.row.currencyname }}</span>
        </div>
      </span>
      <span v-else-if="props.column.field == 'amount'">
        <div :class="'text-' + props.row.winning">
          {{ props.row.profit }}
        </div>
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
          field: "d",
        },
        {
          label: "Transaction",
          field: "transaction",
        },

        {
          label: "Date",
          field: "date",
        },
        {
          label: "From",
          field: "from",
        },
        {
          label: "To",
          field: "to",
        },
        {
          label: "Coin",
          field: "coin",
        },
        {
          label: "Amount",
          field: "amount",
        },
      ],
      rows: [
        {
          direction: "up",
          position: "right",
          date: "03/12/2020",
          transaction: "#1242232401",
          from: "Olive Yew",
          idcard: `${import.meta.env.BASE_URL}images/faces/11.jpg`,
          to: "PegLegge",
          currencyname: "Bitcoin",
          profit: "+0.041",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/btc.svg`,
          winning: "success",
          taskinformation: "COMPLETED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232402",
          date: "05/12/2020",
          from: "Addie Minstra",
          idcard: `${import.meta.env.BASE_URL}images/faces/2.jpg`,
          to: "Art Decco",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/eth.svg`,
          currencyname: "Ethereum",
          profit: "	-0.344",
          winning: "danger",
          taskinformation: "CANCELLED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232403",
          date: "14/12/2020",
          from: "Stan Dupp",
          idcard: `${import.meta.env.BASE_URL}images/faces/3.jpg`,
          to: "Neil Down",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xrp.svg`,
          currencyname: "Ripple",
          profit: "-0.345",
          winning: "muted",
          taskinformation: "PENDING",
        },
        {
          position: "right",
          direction: "up",
          transaction: "#1242232404",
          date: "16/12/2020",
          from: "Penny Black",
          idcard: `${import.meta.env.BASE_URL}images/faces/4.jpg`,
          to: "Anna Domino",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/dash.svg`,
          currencyname: "Dash",
          profit: "+0.132",
          winning: "success",
          taskinformation: "COMPLETED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232405",
          date: "08/12/2020",
          from: "Olive Yew",
          idcard: `${import.meta.env.BASE_URL}images/faces/5.jpg`,
          to: "Paul Misunday",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/ltc.svg`,
          currencyname: "litecoin	",
          profit: "-0.523	",
          winning: "danger",
          taskinformation: "CANCELLED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232406",
          date: "20/12/2020",
          from: "Arty ficial",
          idcard: `${import.meta.env.BASE_URL}images/faces/6.jpg`,
          to: "Marsha Mello",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xmr.svg`,
          currencyname: "Monero",
          profit: "-0.232",
          winning: "muted",
          taskinformation: "COMPLETED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232409",
          date: "03/12/2020",
          from: "Stew Gots",
          idcard: `${import.meta.env.BASE_URL}images/faces/9.jpg`,
          to: "Sara Bellum",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/waves.svg`,
          currencyname: "Waves",
          profit: "-0.326",
          winning: "muted",
          taskinformation: "PENDING",
        },
        {
          position: "right",
          direction: "up",
          transaction: "#1242232418",
          date: "20/12/2020",
          from: "Donatella Nobatt",
          idcard: `${import.meta.env.BASE_URL}images/faces/7.jpg`,
          to: "Peg Legge",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/steem.svg`,
          currencyname: "Steem",
          profit: "+0.041",
          winning: "success",
          taskinformation: "COMPLETED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232405",
          date: "08/12/2020",
          from: "Olive Yew",
          idcard: `${import.meta.env.BASE_URL}images/faces/5.jpg`,
          to: "Paul Misunday",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/ltc.svg`,
          currencyname: "litecoin	",
          profit: "-0.523	",
          winning: "danger",
          taskinformation: "CANCELLED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232403",
          date: "14/12/2020",
          from: "Stan Dupp",
          idcard: `${import.meta.env.BASE_URL}images/faces/3.jpg`,
          to: "Neil Down",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xrp.svg`,
          currencyname: "Ripple",
          profit: "-0.345",
          winning: "muted",
          taskinformation: "PENDING",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232403",
          date: "24/12/2020",
          from: "Stan Dupp",
          idcard: `${import.meta.env.BASE_URL}images/faces/6.jpg`,
          to: "Neil Down",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xrp.svg`,
          currencyname: "Ripple",
          profit: "-0.345",
          winning: "muted",
          taskinformation: "PENDING",
        },

        {
          position: "right",
          direction: "up",
          transaction: "#1242232418",
          date: "20/12/2020",
          from: "Donatella Nobatt",
          idcard: `${import.meta.env.BASE_URL}images/faces/7.jpg`,
          to: "Peg Legge",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/steem.svg`,
          currencyname: "Steem",
          profit: "+0.041",
          winning: "success",
          taskinformation: "COMPLETED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232406",
          date: "14/12/2020",
          from: "Stan Dupp",
          idcard: `${import.meta.env.BASE_URL}images/faces/3.jpg`,
          to: "Neil Down",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xrp.svg`,
          currencyname: "Ripple",
          profit: "-0.345",
          winning: "muted",
          taskinformation: "PENDING",
        },
        {
          position: "right",
          direction: "up",
          transaction: "#1242232404",
          date: "16/12/2020",
          from: "Penny Black",
          idcard: `${import.meta.env.BASE_URL}images/faces/4.jpg`,
          to: "Anna Domino",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/dash.svg`,
          currencyname: "Dash",
          profit: "+0.132",
          winning: "success",
          taskinformation: "COMPLETED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232405",
          date: "08/12/2020",
          from: "Olive Yew",
          idcard: `${import.meta.env.BASE_URL}images/faces/5.jpg`,
          to: "Paul Misunday",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/ltc.svg`,
          currencyname: "litecoin	",
          profit: "-0.523	",
          winning: "danger",
          taskinformation: "CANCELLED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232406",
          date: "20/12/2020",
          from: "Arty ficial",
          idcard: `${import.meta.env.BASE_URL}images/faces/6.jpg`,
          to: "Marsha Mello",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xmr.svg`,
          currencyname: "Monero",
          profit: "-0.232",
          winning: "muted",
          taskinformation: "COMPLETED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232409",
          date: "03/12/2020",
          from: "Stew Gots",
          idcard: `${import.meta.env.BASE_URL}images/faces/9.jpg`,
          to: "Sara Bellum",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/waves.svg`,
          currencyname: "Waves",
          profit: "-0.326",
          winning: "muted",
          taskinformation: "PENDING",
        },
        {
          position: "right",
          direction: "up",
          transaction: "#1242232418",
          date: "20/12/2020",
          from: "Donatella Nobatt",
          idcard: `${import.meta.env.BASE_URL}images/faces/7.jpg`,
          to: "Peg Legge",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/steem.svg`,
          currencyname: "Steem",
          profit: "+0.041",
          winning: "success",
          taskinformation: "COMPLETED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232405",
          date: "08/12/2020",
          from: "Olive Yew",
          idcard: `${import.meta.env.BASE_URL}images/faces/5.jpg`,
          to: "Paul Misunday",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/ltc.svg`,
          currencyname: "litecoin	",
          profit: "-0.523	",
          winning: "danger",
          taskinformation: "CANCELLED",
        },
        {
          position: "left",
          direction: "down",
          transaction: "#1242232403",
          date: "14/12/2020",
          from: "Stan Dupp",
          idcard: `${import.meta.env.BASE_URL}images/faces/3.jpg`,
          to: "Neil Down",
          currency: `${import.meta.env.BASE_URL}images/svgs/crypto-currencies/xrp.svg`,
          currencyname: "Ripple",
          profit: "-0.345",
          winning: "muted",
          taskinformation: "PENDING",
        },
      ],
    };
  },
};
</script>
