'use strict';

const Service = require('egg').Service;

class DemoService extends Service {
  constructor(ctx) {
    super(ctx);
  }

  async index(params) {
    const r = await this.app.mysql.query('select * from test');
    return r
  }
}

module.exports = DemoService;