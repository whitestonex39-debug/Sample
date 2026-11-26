// APIから取得するレシピの型
interface Recipe {
  id: string;
  data: {
    title: string;
  };
}

class RecipeList {
  recipes: Recipe[] = [];
  error = "";

  async load(): Promise<void> {
    try {
      this.error = "";

      const response = await fetch("http://localhost:5053/api/recipes");

      if (!response.ok) {
        throw new Error(`取得に失敗しました（${response.status}）`);
      }
      const result: RecipeRecord[] = await response.json();

      this.recipes = result;
    } catch (error) {
      this.error =
        error instanceof Error ? error.message : "レシピの取得に失敗しました";
    }
  }
}

// 以下使用例
async function main(): Promise<void> {
  const list = new RecipeList();

  await list.load();

  if (list.error) {
    console.error(list.error);
    return;
  }

  console.log("取得したレシピ:", list.recipes);
}

void main();
