'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {

  async index() {
    const ctx = this.ctx;
    
    // 直接操作数据库
    // const r = await this.app.mysql.query('select * from test');
    
    // 调用 service
    const r = await ctx.service.demo.index(ctx.request.body);

    // 排除异常测试
    // this.ctx.throw(500, '这是一个测试错误', { data: 123 });

    // 设置响应体和状态码
    ctx.body = {
      data: r
    };
    ctx.status = 200;
  }
}

module.exports = DemoController;