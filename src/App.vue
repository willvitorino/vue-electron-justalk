<template>
  <el-container id="app">
    <el-header>
      <span>Justalk</span>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-input
            placeholder="Cole a URL aqui..."
            v-model="url"
            @keyup.enter="download()"
          >
            <template slot="suffix">
              <el-button
                icon="el-icon-download"
                type="primary"
                size="small"
                circle
                @click="download()"
              />
            </template>
          </el-input>
        </el-col>
      </el-row>
      {{ url }}
    </el-main>
  </el-container>
</template>

<script>
const { ipcRenderer } = window.require('electron')

export default {
  name: 'App',
  data () {
    return {
      url: ''
    }
  },
  methods: {
    download () {
      const { url } = this
      ipcRenderer.send('download:start', { url })
      ipcRenderer.on('download:status', (event, resp) => {
        console.log(resp)
      })
      // download:status
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* Color Theme Swatches in Hex */
$ODESZA-1: #081226;
$ODESZA-2: #025373;
$ODESZA-3: #025E73;
$ODESZA-4: #037F8C;
$ODESZA-5: #BF5841;

* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;

  background: $ODESZA-2;

  .el-header {
    background-color: $ODESZA-1;
    line-height: 60px;
    font-family: 'Press Start 2P', cursive;
    color: white;
    text-align: center;
  }
}

.el-input__suffix-inner {
  button {
    margin: 4px 0px;
  }
}
</style>
