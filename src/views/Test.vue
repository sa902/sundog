<template>
  <div class="">
      <!-- <pdf ref="bitch" src="../pdf/test.pdf"></pdf> -->
      <base-material-stats-card
    color="primary"
    icon="mdi-poll"
    title="Website Visitsssss"
    value="75.521"
    sub-icon="mdi-tag"
    sub-text="Tracked from Google Analytics"
    />
      <h1>test</h1>
  </div>
</template>

<script>

import pdf from 'vue-pdf'

export default {
  components: {
    pdf,
    MaterialStatsCard: () => import('@/components/base/MaterialStatsCard.vue'),
  }
}
</script>
