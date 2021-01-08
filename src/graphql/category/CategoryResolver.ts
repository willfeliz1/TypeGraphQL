import { Resolver, Query, Mutation, InputType, Arg, Field } from "type-graphql";
import CategorySchema from "../../model/CategorySchema";
import Category from "./Category";
@InputType()
class CategoryInput {
  @Field()
  description: string;

  @Field()
  name: string;
}
@Resolver(Category)
class CategoryResolver {

  @Query(() => [Category])
  async categories() {
    const categories = await CategorySchema.find();

    return categories;
  }

  @Mutation(() => Category)
  async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
    const category = await CategorySchema.create(categoryInput);
    return category;
  }

  @Mutation(() => Category)
  async updateCategory(@Arg("_id") _id: string, @Arg("categoryInput") categoryInput: CategoryInput) { 
    const updatedCategory = await CategorySchema.findOneAndUpdate({ _id }, categoryInput, {
      new: true,
    });

    if(!updatedCategory) {
      throw new Error('category not found');
    }

    return updatedCategory;
  }
}

export default CategoryResolver;