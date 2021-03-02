"use strict";

const { getRegistrants } = require("../../../config/functions/zoom");

module.exports = {
  async findUsers() {
    return await strapi.config.functions.zoom.usersFind();
  },

  async userDetail(ctx) {
    return await strapi.config.functions.zoom.userDetail(ctx.params.mail);
  },

  async listWM(ctx) {
    return await strapi.config.functions.zoom.listWM(ctx.params.wm);
  },

  async listScheduleUsers(ctx) {
    if (!ctx.request.body) {
      return { message: "Hacen falta datos" };
    }

    if (!ctx.request.body.type) {
      return { message: "Debes especificar el tipo de petición: live ó past." };
    }

    return await strapi.config.functions.zoom.listScheduleUsers(
      ctx.params.wm,
      ctx.params.id,
      ctx.request.body
    );
  },

  async getRegistrants(ctx) {
    return await strapi.config.functions.zoom.getRegistrants(
      ctx.params.wm,
      ctx.params.id,
      ctx.params.status
    );
  },
};
