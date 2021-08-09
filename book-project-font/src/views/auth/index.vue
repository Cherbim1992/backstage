<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img
        src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1"
        alt=""
      />
      <div class="title">图书管理系统后台</div>
    </div>
    <div class="form">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="登录">
          <div class="form-item">
            <a-input placeholder="账户">
              <template #prefix>
                <UserOutlined style="color:#ccc" />
              </template>
            </a-input>
          </div>
          <div class="form-item">
            <a-input placeholder="密码">
              <template #prefix>
                <LockOutlined style="color:#ccc" />
              </template>
            </a-input>
          </div>
          <div class="form-item">
            <a href="">忘记密码</a>
          </div>
          <div class="form-item">
            <a-button type="primary">登录</a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册" force-render>
          <div class="form-item">
            <a-input placeholder="账户" v-model:value="regForm.account">
              <template #prefix>
                <user-outlined style="color:#ccc" type="user" />
              </template>
            </a-input>
          </div>
          <div class="form-item">
            <a-input placeholder="密码" v-model:value="regForm.password">
              <template #prefix>
                <LockOutlined style="color:#ccc" />
              </template>
            </a-input>
          </div>
          <div class="form-item">
            <a-input placeholder="邀请码">
              <template #prefix>
                <LaptopOutlined style="color:#ccc" />
              </template>
            </a-input>
          </div>
          <div class="form-item">
            <a-button type="primary" @click="register">注册</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
