<template>
  <div class="text-center">
    <div class="text-sm font-semibold">
      {{ $t('linearVestingDisclaimerTitle') }}
    </div>
    <div>{{ $t('linearVestingDisclaimerBody') }}</div>
    <BalBtn color="gradient" class="mt-2 w-full">{{
      $t('earnRewards')
    }}</BalBtn>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import useNumbers from '@/composables/useNumbers';
import { DecoratedPool } from '@/services/balancer/subgraph/types';

export default defineComponent({
  components: {},

  props: {
    pool: { type: Object as PropType<DecoratedPool> },
    loading: { type: Boolean, default: true }
  },

  setup(props) {
    return {};
  }
});
</script>
