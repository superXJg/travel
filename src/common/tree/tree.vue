<template>
  <div class="tree-menu">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="labelClasses">
        <i v-if="nodes" class="fa" :class="iconClasses"></i>
        {{ label }}
      </div>
    </div>
    <tree-menu v-if="showChildren" v-for="(node, index) in nodes" :nodes="node.nodes" :label="node.label" :depth="depth + 1" :key="index"
    >
    </tree-menu>
  </div>
</template>
<script>
/* eslint-disable */
export default {
 name: 'treeMenu',
  props: [ 'nodes', 'label', 'depth' ],
  data () {
     return {
       showChildren: false
     }
  },
  computed: {
    iconClasses () {
      return {
        'fa-plus-square-o': !this.showChildren,
        'fa-minus-square-o': this.showChildren
      }
    },
    labelClasses () {
      return { 'has-children': this.nodes }
    },
    indent () {
      return { transform: `translate(${this.depth * 50}px)` }
    }
  },
  methods: {
    toggleChildren () {
       this.showChildren = !this.showChildren
    }
  }
}
</script>
<style lang="less">
.container {
  width: 300px;
  margin: 0 auto;
}
.tree-menu {
  .label-wrapper {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    .has-children {
      cursor: pointer;
    }
  }
}
</style>


