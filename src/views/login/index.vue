<template>
  <div class="login-box">
    <div class="form-wrapper">
      <div class="top-text">Enjoy YourSelf And Do YourSelf</div>
      <div class="login-form-wrapper">
        <div class="form-item">
          <label for="">用户名:</label>
          <input
            type="text"
            placeholder="请输入用户名..."
            v-model="formParams.phone"
          />
        </div>

        <div class="form-item">
          <label for="">密码:</label>
          <input
            type="password"
            placeholder="请输入密码..."
            v-model="formParams.password"
          />
        </div>

        <div class="btns-wrapper">
          <button @click="onSubmit">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { PhoneLogin, UserInfoDetail } from '@/types/Login.Interface';
import { phoneLogin } from '@/api/index';
import { setToken } from '@/utils/auth';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    let formParams: PhoneLogin = reactive({
      phone: '',
      password: ''
    });

    // 提交
    let onSubmit = async () => {
      let res: any = await phoneLogin(formParams);

      if (res.code == 200) {
        setToken(res.token);
        let params: UserInfoDetail = {
          account: res.account,
          bindings: res.bindings,
          profile: res.profile
        };
        store.dispatch('user/getUserInfo', params);
        router.push({
          name: 'Home'
        });
      }
    };

    return {
      formParams,
      onSubmit
    };
  }
});
</script>

<style lang="scss" scoped>
.login-box {
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    -225deg,
    #2cd8d5 0%,
    #c5c1ff 56%,
    #ffbac3 100%
  );
  .top-text {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    animation-name: titleMove;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    transform: translateZ(0);
    text-align: center;
  }
}

.form-wrapper {
  width: 100%;
}

.login-form-wrapper {
  width: 70%;
  margin: 0 auto;
}

.form-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  > label {
    flex: 0 0 70px;
    font-size: 14px;
  }
  > input {
    flex: 1;
    border: none;
    padding: 5px 10px;
    background-color: rgba($color: #fff, $alpha: 0.7);
    line-height: 25px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 12px;
    color: #333;
  }
  &:last-child {
    margin-bottom: 0;
  }
}

.btns-wrapper {
  > button {
    width: 100%;
    padding: 12px 5px;
    font-size: 12px;
    color: black;
    margin-top: 20px;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: rgba($color: #fff, $alpha: 0.7) !important;
  }
}

@keyframes titleMove {
  to {
    top: -60px;
  }

  from {
    top: 0;
  }
}
</style>
