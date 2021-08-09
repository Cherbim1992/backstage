import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, LaptopOutlined } from '@ant-design/icons-vue';
// eslint-disable-next-line import/named
import { auth } from '../../service';

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
    });
    const register = () => {
      auth.register(regForm.account, regForm.password);
      console.log(regForm);
    };
    return {
      regForm,
      register,
    };
  },
});
