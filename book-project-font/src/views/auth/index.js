import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, LaptopOutlined } from '@ant-design/icons-vue';

import { message } from 'ant-design-vue';
// eslint-disable-next-line import/named
import { auth } from '../../service';
import { result } from '../../helpers/utils';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    LaptopOutlined,
  },
  setup() {
    const regForm = reactive({
      account: '',
      password: '',
      inviteCode: '',
    });
    const loginForm = reactive({
      account: '',
      password: '',
    });
    const register = async () => {
      if (regForm.account === '') {
        message.info('账户不能为空');
        return;
      }
      if (regForm.password === '') {
        message.info('密码不能为空');
        return;
      }
      if (regForm.inviteCode === '') {
        message.info('邀请码不能为空');
        return;
      }
      const res = await auth.register(regForm.account, regForm.password, regForm.inviteCode);
      result(res).success((data) => {
        message.success(data.msg);
      }).fail((data) => {
        message.error(data.msg);
      });
    };
    const login = async () => {
      if (loginForm.account === '') {
        message.info('账户不能为空');
        return;
      }
      if (loginForm.password === '') {
        message.info('密码不能为空');
        return;
      }
      const res = await auth.login(loginForm.account, loginForm.password);
      result(res).success((data) => {
        message.success(data.msg);
      }).fail((data) => {
        message.error(data.msg);
      });
    };
    return {
      regForm,
      register,
      loginForm,
      login,
    };
  },
});
