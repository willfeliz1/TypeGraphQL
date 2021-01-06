import { Resolver, Query } from "type-graphql";
import CategorySchema from "../../model/CategorySchema";
import Category from "./Category";

@Resolver(Category)
class CategoryResolver {

  @Query(() => [Category])
  async categories() {
    const categories = await CategorySchema.find();

    return categories;
  }
}

export default CategoryResolver;