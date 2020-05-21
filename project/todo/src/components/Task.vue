<template>
  <li :class="{ done: todo.isDone }" class="task" @click="$emit('checked')">
    <div class="color_and_title">
      <div class="color" :style="{backgroundColor: todo.color}"></div>
      <div class="title">{{ todo.title }}</div>
    </div>
    <div class="controls">
      <div class="delete" @click="$emit('deleted')">
        <i class="fa fa-trash"></i>
      </div>
    </div>
  </li>
</template>

<script>
export default {
    name: 'Task', 
    props: ['task']
};
</script>

<style scoped>
li {
    list-style: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 0.5em;
    user-select: none;
}
li .title_container {
    display: inline-block;
}

li .color{
    width: 0.5em;
    height: 1.2em;
    margin-right: 0.5em;
    border-radius:0.2em;
    opacity: 0.8;
    position: relative;
    top: 0.2em;
}
.task {
    display: flex;
    justify-content: space-between;
}
.controls {
    display: flex;
}

.controls div {
    border-radius: 0.1em;
    width: 1em;
    color: white;
    text-align: center;
    cursor: pointer;
    user-select: none;
    margin-left: 0.2em;
}

.task.done .title {
    color: #888;
    text-decoration: line-through;
}

</style>