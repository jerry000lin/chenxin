<template>
  <div class="home-view">
    <div class="home-main">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="taskId" label="Task ID" width="180">
        </el-table-column>
        <el-table-column prop="taskName" label="Task name" width="180">
        </el-table-column>
        <el-table-column prop="taskStudents" label="Task Students">
        </el-table-column>
        <el-table-column prop="operation" label="Operation"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        },
        {
          taskId: "123",
          taskName: "123",
          taskStudents: "123",
          operation: "123"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.home-view {
  height: 100%;
  overflow: auto;
  .home-main {
    width: 1100px;
    margin: 20px auto;
  }
}
</style>
