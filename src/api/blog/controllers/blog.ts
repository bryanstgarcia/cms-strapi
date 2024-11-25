"use strict";
/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query("api::blog.blog").findOne({
        where: { slug: id },

        // Line to populate the relationships
        populate: { tags: true, author: true },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },

    async find(ctx) {
      const entity = await strapi.db.query("api::blog.blog").findMany({
        // Line to populate the relationships
        populate: { tags: true, author: true },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
