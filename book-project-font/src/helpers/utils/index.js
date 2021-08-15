/* eslint-disable import/prefer-default-export */
// import { message } from 'ant-design-vue';

export const result = (res) => {
  const { data } = res;
  console.log(data, '///');
  //   if ((data.code === 0) && autoShowerror) {
  //     message.error(data.msg);
  //   }
  return {
    success(cb) {
      if (data.code !== 0) {
        cb(data, res);
      }
      return this;
    },
    fail(cb) {
      if (data.code === 0) {
        cb(data, res);
      }
      return this;
    },
    fina(cb) {
      cb();
      return this;
    },
  };
};
