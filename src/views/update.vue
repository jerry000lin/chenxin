<template>
  <div class="uploadView">
    <div class="uploadView-main">
      <div class="upload-button">
        <el-button size="small" type="primary" @click="selectFile">
          Upload
        </el-button>
        <span class="tip">
          {{ fileName ? fileName : "pleace selet your file" }}
        </span>
      </div>

      <div class="ExecuteInput">
        Execute Instruction :
        <el-input v-model="executeInstruction" size="mini"></el-input>
      </div>

      <div class="fixedParameters">
        <div class="fixedParameters-title">
          Fixed Parameters
          <i
            class="icon el-icon-circle-plus-outline"
            @click="addFixedParameters"
          ></i>
        </div>
        <div class="fixedParameters-list">
          <div
            class="fixedParameters-item"
            v-for="(item, index) in fixedParametersList"
            :key="item.id"
          >
            name:
            <el-input v-model="item.name" size="mini"></el-input>
            value:
            <el-input v-model="item.value" size="mini"></el-input>
            <i
              class="icon el-icon-circle-close"
              @click="deleteFixedParameters(index)"
            ></i>
          </div>
        </div>
      </div>

      <div class="tunedParameters">
        <div class="tunedParameters-title">
          Fixed Parameters
          <i
            class="icon el-icon-circle-plus-outline"
            @click="addTunedParameters"
          ></i>
        </div>
        <div class="tunedParameters-list">
          <div
            class="tunedParameters-item"
            v-for="(item, index) in tunedParametersList"
            :key="item.id"
          >
            name:
            <el-input v-model="item.name" size="mini"></el-input>
            type:
            <el-select
              size="mini"
              v-model="item.type"
              placeholder="pleace select"
            >
              <el-option
                v-for="item in tunedParametersTypeOptions"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
            range:
            <el-input v-model="item.range" size="mini"></el-input>
            default:
            <el-input v-model="item.default" size="mini"></el-input>
            <i
              class="icon el-icon-circle-close"
              @click="deleteTunedParameters(index)"
            ></i>
          </div>
        </div>
      </div>
      <div class="submitButton-container">
        <el-button
          class="submitButton"
          type="primary"
          size="small"
          @click="submitAll"
        >
          submit
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: "",
      executeInstruction: "",
      fixedParametersList: [],
      tunedParametersList: [],
      tunedParametersTypeOptions: ["int", "real", "enumarate"]
    };
  },
  methods: {
    addFixedParameters() {
      this.fixedParametersList.push({
        id: Date.now(),
        name: "",
        value: ""
      });
    },
    deleteFixedParameters(index) {
      this.fixedParametersList.splice(index, 1);
    },
    addTunedParameters() {
      this.tunedParametersList.push({
        id: Date.now(),
        name: "",
        type: "",
        range: "",
        default: ""
      });
    },
    deleteTunedParameters(index) {
      this.tunedParametersList.splice(index, 1);
    },
    uploadSuccess() {
      this.$message({
        message: "upload success!",
        type: "success"
      });
    },
    selectFile() {
      var input = document.createElement("input");
      input.type = "file";
      input.click();
      input.onchange = () => {
        this.file = input.files[0];
        this.fileName = this.file.name;
      };
    },
    uploadError() {
      this.$message({
        message: "upload fail!",
        type: "error"
      });
    },
    submitAll() {
      let formdata = new FormData();
      formdata.append("file", this.file);
      formdata.append("executeInstruction", this.executeInstruction);
      formdata.append(
        "fixedParametersList",
        JSON.stringify(this.fixedParametersList)
      );
      formdata.append(
        "tunedParametersList",
        JSON.stringify(this.tunedParametersList)
      );
      this.$apis.uploadSubmit(formdata);
    }
  }
};
</script>

<style lang="less">
.uploadView {
  height: 100%;
  overflow: auto;
  .tip {
    color: #909399;
  }
  .uploadView-main {
    width: 1100px;
    margin: 20px auto;
    > div {
      margin: 20px 0;
    }
    .upload-container {
      margin-left: 20px;
    }

    .fixedParameters-list,
    .tunedParameters-list {
      margin-left: 20px;
      > div {
        margin: 10px 0;
        .icon {
          margin-left: 10px;
        }
      }
    }
    .submitButton-container {
      text-align: center;
    }
  }
  .el-input {
    width: 180px;
  }
  .icon {
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
}
</style>
