export type foodItemStatic = {
  id: number;
  title: string;
  desc: string;
  price: string;
  imgSrc: string;
};

export type foodItemsStatic = {
  items: foodItemStatic[];
};

export type FoodItem = {
  id: number;
  title: string;
  description?: string;
  price: string;
  imageURL: string;
  calories: string;
  qty: string;
  category: string;
};

export type FoodItems = {
  items: FoodItem[];
};

export type FoodResp = {
  category: FoodCategory;
  foods: Food[];
};

export type Food = {
  foodId: number;
  foodName: string;
  foodDesp: string;
  foodPrice: number;
  foodImg: string;
  createTime: string;
  category?: string;
};

export type Token = {
  access_token: string;
  refresh_token: string;
};
export type CommonResp = {
  msg: string;
  data: FoodResp | UserInfo;
};

export type FoodCategory = {
  id: number;
  name: string;
  urlParam: string;
  icon?: JSX.Element;
};

export type FoodCat = {
  catId: number;
  catName: string;
  catDesp?: string;
  catLabel: string;
  icon: JSX.Element;
};

export type cartItem = {
  id: number;
  fid: number;
  uid: string;
  qty: number;
};

export type cartSingleItem = {
  id: number;
  foodId: number;
  userId: number;
  qty: number;
};

export type cartItems = {
  items: cartItem[];
};

export type User = {
  uid: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;
  providerId: string;
  photoURL?: string;
};

export type UserInfo = {
  userId: number;
  username: string;
  email: string;
  phoneNumber: string;
};

export type FoodCategories = FoodCategory[];
